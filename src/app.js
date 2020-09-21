const Koa = require('koa');
const app = new Koa();

const adjie = [];

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';

  if(ctx.url === '/loop') {
    // simulate alocate memory with array push
    while (true) {
      //your code
      adjie.push([[1,1,1,1,1,2,3,2,2,3,4,3,3,], '33', 90]);
    }
  }

});

app.listen(3000);