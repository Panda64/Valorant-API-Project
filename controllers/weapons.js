const WeaponClass = require('../models/weapon_class');
const Weapon = require('../models/weapon');
const DamageRange = require('../models/damage_range');
const AltFireFeature = require('../models/alt_fire_feature');
const User = require('../models/user');

module.exports = (app) => {

    app.post("/weapon-class/new", (req, res) => {
        let weapon_class = new WeaponClass(req.body)

        weapon_class
                        .save()
                        .then(weapon_class => {
                            res.send("Weapon Class added successfully")
                        })
                        .catch(err => {
                            console.log(err)
                        })
    })

    app.get('/weapon-class/:name', function (req, res) {
        WeaponClass.find({ name: req.params.name }).lean()
            .then(weapon_class => {
                res.send(weapon_class)
            })
            .catch(err => {
                console.log(err);
            })
    })
}