const WeaponClass = require('../models/weapon_class')
const Weapon = require('../models/weapon')
const DamageRange = require('../models/damage_range')
const AltFire = require('../models/alt_fire')
const Feature = require('../models/feature')
const AltFireAttribute = require('../models/alt_fire_attributes')
const RangeValue = require('../models/damage_range_values')

module.exports = (app) => {

    // Creating a new weapon to add to a weapon class
    app.post("/:weapon_class_name", (req, res) => {
        if (req.header('X-RapidAPI-Proxy-Secret') === process.env.RAPIDAPI_PROXY_SECRET) {
            let data = req.body
            let dmgs = []

            // Creating Damage Models
            for (let i = 0; i < 3; i++) {
                if (data.damage[i]) {
                    let rng = new RangeValue(data.damage[i].range)
                    rng.save()
                        .catch(err => {
                            console.log(err)
                            res.status(500).send({ message: "Error!", error_info: err})
                        })

                    let dmg = new DamageRange({
                        range : rng,
                        head : data.damage[i].head,
                        body : data.damage[i].body,
                        legs : data.damage[i].legs
                    })

                    dmg.save()
                        .catch(err => {
                            console.log(err)
                            res.status(500).send({ message: "Error!", error_info: err})
                        })
                    
                    dmgs.push(dmg)
                }
            }

            // Creating Alt-Fire and the Associated Attributes Model
            if (data.alt_fire) {
                let alt_fire_attributes = new AltFireAttribute(data.alt_fire.attributes)

                alt_fire_attributes.save()
                    .catch(err => {
                        console.log(err)
                        res.status(500).send({ message: "Error!", error_info: err})
                    })

                let alt_fire = new AltFire({
                    type : data.alt_fire.type,
                    attributes : alt_fire_attributes
                })

                alt_fire.save()
                    .catch(err => {
                        console.log(err)
                        res.status(500).send({ message: "Error!", error_info: err})
                    })
            }
            
            // Creating Feature Model
            if (data.feature) {
                let feature = new Feature(data.feature)
                
                feature.save()
                    .catch(err => {
                        console.log(err)
                        res.status(500).send({ message: "Error!", error_info: err})
                    })
            }

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
                damage : [dmgs[0], dmgs[1], dmgs[2]],
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
                    res.status(500).send({ message: "Error!", error_info: err})
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
                    res.status(500).send({ message: "Error!", error_info: err})
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
                    res.status(500).send({ message: "Error!", error_info: err})
                })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })
}