module.exports = (app) => {

    app.get('/images/classic', (req, res) => {
        res.render('classic')
    });
}