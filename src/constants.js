let BACKEND_URL = 'http://localhost:3001';

if (import.meta.env.MODE == 'production') {
  BACKEND_URL = '';
}
export { BACKEND_URL };
