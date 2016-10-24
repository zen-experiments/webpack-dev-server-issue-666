const PATH = require('path');

const express = require('express');
const app = express();

const pageRouter = express.Router();

pageRouter.get('*', (req, res) => {
    res.write('SERVER');
    res.end();
});

app.use('/', pageRouter);

app.listen(4000, () => {
    console.log(`Listening on 4000`);
});
