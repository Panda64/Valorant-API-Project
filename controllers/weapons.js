const WeaponClass = require('../models/weapon_class')
const Weapon = require('../models/weapon')
const DamageRange = require('../models/damage_range')
const AltFireFeature = require('../models/alt_fire_feature')

module.exports = (app) => {

    // Creating a new weapon class
    app.post("/weapon-class", (req, res) => {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            let weapon_class = new WeaponClass(req.body)

            weapon_class
                            .save()
                            .then(weapon_class => {
                                res.send({ message: `The ${weapon_class.name} class has been successfully added to the database!` })
                            })
                            .catch(err => {
                                console.log(err)
                            })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })

    // Creating a new weapon to add to a weapon class
    app.post("/:weapon_class_name", (req, res) => {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            let data = req.body

            let dmg1 = new DamageRange(data.damage[0])
            let dmg2 = new DamageRange(data.damage[1])
            let dmg3 = new DamageRange(data.damage[2])
            dmg1.save()
            dmg2.save()
            dmg3.save()

            let alt_fire = new AltFireFeature(data.alt_fire)
            let feature = new AltFireFeature(data.feature)
            alt_fire.save()
            feature.save()

            let weapon = new Weapon({
                name : data.name,
                cost : data.cost,
                spread : data.spread,
                fire_type : data.fire_type,
                penetration : data.penetration,
                fire_rate : data.fire_rate,
                run_speed : data.run_speed,
                equip_speed : data.equip_speed,
                first_shot_spread : data.first_shot_spread,
                reload_speed : data.reload_speed,
                magazine : data.magazine,
                damage : [dmg1, dmg2, dmg3],
                alt_fire : alt_fire,
                feature : feature
            })

            weapon
                    .save()
                    .then(weapon => {
                        return WeaponClass.findOne({ name: req.params.weapon_class_name })
                    })
                    .then(weapon_class => {
                        weapon_class.weapons.push(weapon)
                        weapon_class.save()
                        res.send({ 
                            message: `The ${weapon.name} has been successfully created and added to the ${weapon_class.name} class!`
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })

    // Getting a specific weapon class
    app.get('/:weapon_class_name', function (req, res) {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            WeaponClass.findOne({ name: req.params.weapon_class_name })
                .then(weapon_class => {
                    res.send(weapon_class)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })

     // Getting a specific weapon 
     app.get('/weapon/:weapon_name', function (req, res) {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            Weapon.findOne({ name: req.params.weapon_name })
                .then(weapon => {
                    res.send(weapon)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })

    // Updating weapon class name
    app.put("/:weapon_class_name", function(req, res) {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            let data = req.body

            WeaponClass.findOne({ name: req.params.weapon_class_name })
                .then(weapon_class => {
                    let old_name = weapon_class.name

                    weapon_class.name = data.name
                    weapon_class.save()

                    res.send({ 
                        message: `Weapon class ${old_name} successfully renamed to ${weapon_class.name}`
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })

    // Deleting a specific weapon class
    app.delete('/:weapon_class_name', function (req, res) {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            WeaponClass.findOneAndDelete({ name: req.params.weapon_class_name })
                .then(weapon_class => {
                    res.send({ 
                        message: `The ${weapon_class.name} class has been successfully removed from the database`
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })

    // Deleting a specific weapon
    app.delete('/weapon/:weapon_name', function (req, res) {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            Weapon.findOneAndDelete({ name: req.params.weapon_name })
                .then(weapon => {
                    res.send({ 
                        message: `The ${weapon.name} has been successfully removed from the database`
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })
}