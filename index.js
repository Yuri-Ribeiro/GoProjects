const express = require('express');
const server = express();
const port = 3000;

const projects = [];

function checkIfProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(project => project.id == id);

    if(!project)
        return res.status(400).json({ error: "Projeto não encontrado" });

    return next();
}

function logRequestsQuantity(_, _, next) {
    console.count("Quantidade de requisições");

    return next();
}

function checkIfIDExists(req, res, next) {
    const { id } = req.body;
    const project = projects.find(project => project.id == id);

    if(project)
        return res.status(400).json({ error: "ID não disponível" });

    return next();
}

server.use(express.json());
server.use(logRequestsQuantity);

server.get('/projects', (_, res) => {
    return res.json(projects);
})

server.post('/projects', checkIfIDExists, (req, res) => {
    const { id, title } = req.body;
    const newProject = { id, title, tasks: [] };

    projects.push(newProject);

    return res.json(newProject);
})

server.put('/projects/:id', checkIfProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(project => project.id == id);

    project.title = title;

    return res.json(project);
})

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex(project => project.id == id);

    projects.splice(projectIndex, 1);

    return res.sendStatus(204);
})

server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(project => project.id == id);

    project.tasks.push(title)

    return res.json(project);
})

server.listen(3000, () => console.log(`Server listening on port ${port}`));
