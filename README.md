# Banco API Performance Tests

## 📌 Introdução
Este repositório contém testes de **performance** desenvolvidos em **JavaScript** utilizando o **K6**.  
O objetivo é validar a performance da **Banco API**, garantindo estabilidade, escalabilidade e identificação de gargalos em diferentes cenários de carga.

---

## ⚙️ Tecnologias utilizadas
- [K6](https://k6.io/) – Ferramenta de testes de performance  
- JavaScript (ES6) – Linguagem para os scripts de teste  
- Node.js – Gerenciamento de dependências e execução local  
- Variáveis de ambiente (para maior flexibilidade nas execuções)  

---

## 📂 Estrutura do repositório
```
banco-api-performance/
│── tests/              # Scripts principais de testes.
│── utils/              # Funções utilitárias reutilizáveis.
│── fixtures/           # Dados de entrada para os testes (ex: usuários, payloads).
│── helpers/            # Funções utilitárias reutilizáveis para interação com a API.
│── config/             # Arquivo de configuração de variáveis de ambiente.
│── README.md           # Documentação do projeto.
```

---

## 🗂️ Objetivo de cada grupo de arquivos
- **tests/** → Contém os cenários de teste automatizados organizados por tipo (ex.: `login.test.js`, `transferencias.test.js` e `token.test.js`).  
- **utils/** →  Contém as funções utilitárias reutilizáveis.
- **fixtures/** → Contém os dados de entrada para os testes (ex: usuários, payloads).  
- **helpers/** → Abriga as funções utilitárias reutilizáveis para interação com a API.
- **config/** → Armazena os arquivos de configuração de variáveis de ambiente.

---

## 🔧 Modo de instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/vickymance/banco-api-performance.git
   cd banco-api-performance
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente: 
   Altere o arquivo `config\config.local.json` e defina a URL base da API pr ser testada:
   ```json
{
    "baseUrl": "http://localhost:3000"
}
```
   Essas variáveis serão usadas dinamicamente nos testes para montar as requisições.   
---

## ▶️ Modo de execução
### Execução básica
Para rodar um teste específico:
```bash
k6 run tests/login.test.js
```

### Passando a variável de ambiente `BASE_URL`
```bash
k6 run tests/autenticacao/login.test.js e-
BASE_URL=http://localhost:3000
```

### Relatório em tempo real no navegador
O K6 possui dashboard web nativo. Para habilitar:
```bash
K6_WEB_DASHBOARD=true k6 /
K6_WEB_DASHBOARD_EXPORT=html-report.html /
-e BASE_URL=http://localhost:3000  /
k6 run tests/autenticacao/login.test.js
```
Acesse em: [http://localhost:5665](http://localhost:5665)  

### Exportando relatório em HTML
```bash
BASE_URL=https://sua-api.com K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/autenticacao/login.test.js
```
Após a execução, o relatório será salvo como `html-report.html` dentro da pasta raiz do projeto.
