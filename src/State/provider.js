import React from 'react';
import StateContext from './context';

export const state = {
  questions: [
    {
      id: 1,
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed eos repudiandae temporibus ipsa exercitationem expedita reprehenderit recusandae illum commodi. Exercitationem harum eaque eveniet voluptatum reprehenderit, fugiat nihil amet commodi!',
      header: '',
      suppliers: [1, 2],
    },
    { id: 2, text: '', header: '', suppliers: [1, 2] },
  ],
  suppliers: {
    1: {
      id: 1,
      name: 'Lars Landmand',
      content: '',
    },
    2: { id: 2, name: 'Peter Producent', content: '' },
  },
};

const StateProvider = ({ children }) => {
  return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
};

export default StateProvider;
