export const createAction = (type, payload, meta) => {
  if (typeof payload === 'undefined' && typeof meta === 'undefined') {
    return { type };
  } else if (typeof meta === 'undefined') {
    return { type, payload };
  } else {
    return { type, payload, meta };
  }
};
