import express from "express";


const app = express();
app.use('favicon.ico', express.static('favicon.ico'));
app.use(express.static("public"));


const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});