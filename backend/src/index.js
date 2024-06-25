require('dotenv').config();
const config = require('config');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

router.get('/', (ctx) => {
  ctx.body = { message: 'Hello from Koa!', env: process.env.NODE_ENV };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = config.get('server.port');
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});