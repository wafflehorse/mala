const Koa = require('koa');
const Router = require('koa-router');

const router = new Router();

const app = new Koa();

router.post('/email', () => {
  console.log('you posted an emaillllll');
});

app.use(router.routes());

app.listen(3000);
