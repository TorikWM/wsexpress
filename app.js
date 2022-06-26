const express = require('express')
const app = express()

const logger = (req, res, next) => {
    console.table({ method: req.method, url: req.url })
    // next();
};

app.use(logger);
app.use(express.static("public"));
// app.get('/',logger, (req, res) => {
//     res.sendFile(__dirname + ('/public/index.html'));
// });
// app.get("/css/style.css", logger, (req, res) => {
//   res.sendFile(__dirname + "/public/css/style.css");
// });
// app.get('/about.html', logger, (req, res) => {
//     res.sendFile(__dirname + "/public/about.html");
// });
// app.get("/contact.html", logger, (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });

const port = 8080;
app.listen(port, (err) => err ? console.log(err) : console.log(`server started on port ${port}`));

