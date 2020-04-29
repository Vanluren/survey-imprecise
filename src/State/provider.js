import React, { useEffect } from "react";
import StateContext from "./context";
import { createAction } from "../utils/createAction";
import { API_URL, RESPONSE_URL } from "../utils/urls";
import { useHistory } from "react-router-dom";

const initialState = {
  isLoading: false,
  errors: null,
  questions: [],
  suppliers: {},
  numOfQuestions: null,
  currentQuestion: 0,
  humanQuestionNum: 1,
  steps: [],
};

const request = () => createAction("request");
const success = (res) => createAction("success", res);
const error = (err) => createAction("error", err);

export const nextQuestion = () => createAction("next question");
export const saveAnswer = (questionId, caseId, cases) =>
  fetch(RESPONSE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: "cors",
    body: JSON.stringify({ questionId, chosenCaseId: caseId, choices: cases }),
  }).catch((err) => {
    return error(err);
  });

const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { ...state, isLoading: true };
    case "success":
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
        numOfQuestions: action.payload.length,
        steps: [...state.steps, "/intro", "/question/1", "/end"],
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        errors: action.err,
      };
    case "next question":
      return {
        ...state,
        currentQuestion: (state.currentQuestion += 1),
        humanQuestionNum: (state.humanQuestionNum += 1),
      };
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(request());

    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch(success(data));
      })
      .then((err) => {
        return dispatch(error(err));
      });
  }, []);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
