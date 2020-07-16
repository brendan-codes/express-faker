const Fake = require('../Fake');

module.exports = function(app) {
    app.all("*", (req, res, next) => {
        console.log(`incoming ${req.method} at ${req.originalUrl}`);
        next();
    })

    app.get("/fake", (req, res) => {
        res.json(new Fake());
    })

    app.get("/fake/:id", (req, res) => {
        res.json({"response": `Your id is ${req.params.id}`});
    })

    app.post("/fake", (req, res) => {
        console.log(req.body);
        res.json({"response": "Your data was passed successfully!"});
    })
};