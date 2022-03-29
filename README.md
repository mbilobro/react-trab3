# Trabalho 3 - Frontend - DW
  <br />

Lucas Tadra Mainginski - RA: 17504926 <br />
Luis Guilherme Molotto - RA: 18016126 <br />
Matheus Bilobrovec - RA: 18011426

## Sobre o projeto
Trabalho realizado para a disciplina de Desenvolvimento Web da UEPG, que consiste em desenvolver um sistema simples utilizando React para o front-end e qualquer framework da escolha do grupo para o backend.
Optamos por utilizar Laravel e realizamos um CRUD de estudantes.

## Requisitos
- NodeJS
- NPM ou Yarn
- Axios
- React-Router-Dom
- Git
- Bootstrap 5

## Como criar o projeto React
Depois de criar uma pasta para o projeto dentro do seu computador, abri o Git Bash da pasta e utilizamos o comando npx create-react-app (nome do app): após isso o projeto foi criado automaticamente para nós e se utilizar o comando cd (nome do app) e npm run, o projeto está funcionando no localhost:3000.
Já devem ser instaladas as dependências que serão utilizadas: react-router-dom (npm install react-router-dom@5.2.0) foi utilizada esta versão, pois estávamos com dificuldades com a versão 6 e o axios (npm install axios).

## Packages desenvolvidos

### Public
- Index.html <br />
Nesta página foi adicionado o Bootstrap para utilização em todas as páginas a serem desenvolvidas: link de estilos e o script.
- "<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">"
- "<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>"

### src
- App.js <br />
Na app.js estão todas as rotas para redirecionamento dos componentes que temos em nosso projeto.

### src/pages
Nas pages temos os componentes de cada uma das páginas do CRUD, as funções para que o haja a conexão com o backend, utilizando o Axios e funções para manipular a DOM do nosso Front.
- AddStudent.js 
- EditStudent.js
- Student.js

## Materiais complementares
- [Como instalar e utilizar React - Celke] (https://www.youtube.com/watch?v=tPdoxF0kunU) <br />
- [React JS & Laravel 8- ReactJS CRUD with Laravel REST API from Scratch - Funda Coder] (https://www.youtube.com/watch?v=NidmTs2xZaE)

