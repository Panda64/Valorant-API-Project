module.exports = (app) => {

    app.get('/images/classic', (req, res) => {
        res.render('classic')
    })

    app.get('/images/shorty', (req, res) => {
        res.render('shorty')
    })

    app.get('/images/frenzy', (req, res) => {
        res.render('frenzy')
    })

    app.get('/images/ghost', (req, res) => {
        res.render('ghost')
    })

    app.get('/images/sheriff', (req, res) => {
        res.render('sheriff')
    })

    app.get('/images/stinger', (req, res) => {
        res.render('stinger')
    })

    app.get('/images/spectre', (req, res) => {
        res.render('spectre')
    })

    app.get('/images/bucky', (req, res) => {
        res.render('bucky')
    })

    app.get('/images/judge', (req, res) => {
        res.render('judge')
    })

    app.get('/images/bulldog', (req, res) => {
        res.render('bulldog')
    })

    app.get('/images/guardian', (req, res) => {
        res.render('guardian')
    })

    app.get('/images/phantom', (req, res) => {
        res.render('phantom')
    })

    app.get('/images/vandal', (req, res) => {
        res.render('vandal')
    })

    app.get('/images/marshall', (req, res) => {
        res.render('marshall')
    })

    app.get('/images/operator', (req, res) => {
        res.render('operator')
    })

    app.get('/images/ares', (req, res) => {
        res.render('ares')
    })

    app.get('/images/odin', (req, res) => {
        res.render('odin')
    })

}