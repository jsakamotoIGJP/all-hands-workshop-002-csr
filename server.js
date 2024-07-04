import express from 'express';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <link rel="stylesheet" href="css/water.css">
        </head>
        <body>
            <div id="app">
                Loading...
            </div>
            <script src="client.js" type="module"></script>
        </body>
        </html>`);
});

app.listen(3002, () => {
    console.log(`Server is running on http://localhost:3002/`);
});