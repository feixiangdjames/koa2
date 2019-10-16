
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router({
    prefix:'/james'//创建router实例时，可以传递一个参数，让禅师的路由增加一个默认层级
});
router.get('/', function (ctx, next) {
    ctx.body="Hello JSPang";
})
    .get('/todo',(ctx,next)=>{
        ctx.body="Todo page"
    });
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('starting at port 3000');
});