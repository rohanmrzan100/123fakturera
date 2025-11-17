let BACKEND_URL = 'http://localhost:3001';

if (import.meta.env.MODE == 'production') {
  BACKEND_URL = 'http://202.51.82.227:3001';
}
export { BACKEND_URL };
