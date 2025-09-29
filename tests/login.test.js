import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
  iterations: 1,
  thresholds: {
    http_req_duration: ['p(90)<10']
  }
};

export default function () {
    const url = 'http://localhost:3000/login';

    const payload = JSON.stringify({
        usarname: 'julio.lima',
        senha: '123456',
    });

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check (res, {
        'Validar que o Status é 200': (r) => r.status === 200,
        'Validar que o token é string': (r) => typeof(r.json().token) == 'string'
    })  

    sleep(1)
}