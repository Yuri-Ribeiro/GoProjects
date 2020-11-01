# :rocket: GoProjects

#### Aplicação back-end para armazenar projetos e tarefas com Express.

#### Requesitos:
- Node.js
- Yarn ou NPM

#### Executar com Yarn:
    yarn
    yarn start

#### Executar com NPM:
    npm install
    npm start

### Rotas

- `POST /projects`: a rota cadastra um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Deve receber `id` e `title` no body da requisição; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: essa rota altera apenas o título do projeto com o `id` especificado na rota; Deve receber `title` no corpo da requisição.

- `DELETE /projects/:id`: deleta o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: rota que recebe no body um campo `title` e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido por meio do `id` presente nos parâmetros da rota;

### Exemplo

Estando a lista de projetos vazia e chamando a rota `POST /projects` passando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, o retorno será:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Uma middleware é aplicada em todas as rotas que recebem o ID do projeto nos parâmetros da URL. Ela verifica se o projeto com aquele ID existe. Caso não exista, retorna um erro, do contrário, permite a prosseguimento normal da requisição;

- Uma middleware global é chamada em todas requisições, imprimindo no console do servidor uma contagem de quantas requisições foram feitas na aplicação até então;
