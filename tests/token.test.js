import { obterToken } from '../helpers/autenticacao.js';

export default function () {
  const token = obterToken();
  console.log('Token retornado:', token);
}
