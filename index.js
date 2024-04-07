import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/posts", (req, res) => {
    res.send([{name: 'Agbar', description: 'lorem'}, {name: 'Abras', description: 'ispum'}]);
});

app.listen(3333);