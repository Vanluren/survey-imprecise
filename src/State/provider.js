import React, { useEffect } from "react";
import StateContext from "./context";
import { createAction } from "../utils/createAction";
import { API_URL, RESPONSE_URL, RESPONDANT_URL } from "../utils/urls";
import { SAVE_RESPONDANT_ID, SUCCESS, ERROR, REQUEST } from "./action-types.js";

export const initialState = {
  isLoading: false,
  errors: null,
  questions: [],
  numOfQuestions: null,
  currentQuestion: 0,
  humanQuestionNum: 1,
  respondantId: null,
};

const request = () => createAction(REQUEST);
const success = (res) => createAction(SUCCESS, res);
const error = (err) => createAction(ERROR, err);
const saveRespondantIdToLocalStorage = (id) => {
  window.localStorage.setItem("respondantId", id);
};
const saveRespondant = (id) => createAction(SAVE_RESPONDANT_ID, id);

export const saveOccupation = (occupation) =>
  fetch(RESPONDANT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ occupation }),
  })
    .then((res) => res.json())
    .then((body) => {
      console.log(body.respondantId);
      saveRespondantIdToLocalStorage(body.respondantId);
      return saveRespondant(body.respondantId);
    })
    .catch((error) => error(error));

export const saveAnswer = (respondantId, questionId, caseId, cases) =>
  fetch(RESPONSE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: "cors",
    body: JSON.stringify({
      respondantId: respondantId || window.localStorage.getItem("respondantId"),
      questionId,
      chosenCaseId: caseId,
      choices: cases,
    }),
  }).catch((err) => {
    return error(err);
  });

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case REQUEST:
      return { ...state, isLoading: true };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
        numOfQuestions: action.payload.length,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.err,
      };
    case SAVE_RESPONDANT_ID:
      return {
        ...state,
        respondantId: action.payload,
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
