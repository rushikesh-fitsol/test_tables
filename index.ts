// setup express

import express from 'express';
import router from './routes';
import { populate } from './populate';
// body parser
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', router);

app.get("/populate", async (req: any, res: any) => {
    await populate();
    res.send('Data populated');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});