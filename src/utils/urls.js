let URL_BASE = 'https://localhost:5556/api';
if (process.env.NODE_ENV === 'production') {
  URL_BASE = 'http://survey.vanluren.xyz/api';
} else {
  URL_BASE = 'http://localhost:5556/api';
}

export const API_URL = `${URL_BASE}/questions`;
export const RESPONSE_URL = `${URL_BASE}/response`;
export const SUPPLIER_URL = `${URL_BASE}/suppliers`;
export const RESPONDANT_URL = `${URL_BASE}/respondants`;
