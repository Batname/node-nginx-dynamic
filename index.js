import koa from 'koa';
import router from 'koa-route';
import views from 'co-views';

let app = koa();

let render = views(__dirname + "/templates", { map: { html: 'jade' }});

app.use(router.get('/', function* () {
  this.status = 200;
  this.body = yield render('home.jade', {});
}));

app.listen(3000, 'node-nginx-static.dev');
console.log('Server run on http://node-nginx-static.dev/');