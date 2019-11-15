import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();
const port = 3031;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }

    return console.log(`server is listening on port ${port}`);
});