import http from 'k6/http';
import {pegarBaseURL} from '../utils/variaveis.js'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export function obterToken() {
  const url = pegarBaseURL() + '/login';

  const payload = JSON.stringify (postLogin);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
    console.log('Login status:', res.status);
    console.log('Login body:', res.body);

  return res.json('token');
};
