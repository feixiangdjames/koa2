const Koa = require('koa'),
    path = require('path'),
    static = require('koa-static'),
    app = new Koa(),
    staticPath = './static';
app.use(static(path.join(__dirname, staticPath)));
app.use(async (ctx) => {
    ctx.body = 'hello world'
});
app.listen(3000, () => {
    console.log('static-middleware istaarting at port 3000');
});