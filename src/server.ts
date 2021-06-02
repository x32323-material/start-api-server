import express, { Application, Request, Response } from 'express';
import env from './loadEnv';
import example from './routers/example';

// Create a new Express application.
const app: Application = express();

app.listen(env.SERVER_PORT, () => {
    console.log(`process ${process.pid} Listening on port ${env.SERVER_PORT}!`);
});

app.all('/', async(_: Request, res: Response): Promise<Response> => {
    return res.status(200).json({
        status: 'success',
        message: 'Connected successfully!',
    })}
);

app.use('/example', example);


