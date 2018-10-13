const Koa = require("koa");
const path = require("path");
const views = require("koa-views");
const serve = require("koa-static");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

app.use(serve("./public/styles"));
app.use(views(path.join(__dirname, "public/views"), { extention: "html" }));
app.use(router.routes()).use(router.allowedMethods());

router.get("/", (ctx, next) => {
  return ctx.render("index");
});

app.listen(3000);
