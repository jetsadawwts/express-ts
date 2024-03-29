import express from 'express';
import morgan from 'morgan';
import routers from './root-routes';
const app = express();
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', routers);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
