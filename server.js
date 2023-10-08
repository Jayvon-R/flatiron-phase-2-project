const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

const router = jsonServer.router('db.json');
server.use('/api', router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
