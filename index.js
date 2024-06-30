import ollama from "ollama";
import express from "express";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const question = req.query.q;
    // console.log(req);
    if (!question) {
        res.status(200).send("Ask something via the `?q=` parameter");
    } else {
        const response = await ollama.chat({
            model: 'llama3',
            messages: [{ role: 'user', content: question}],
        });
        // console.log(question);
        res.status(200).send(response.message.content);
        console.log(response);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});