import express from "express";
import fs from "node:fs";

const app = express();

app.get('/', (req, res) => {
	res.json({ "msg": "Hello World!" });
})

const PORT = 9000;

app.listen(PORT, () => {
	console.log(`Your app is listening on port ${PORT}`);
})
