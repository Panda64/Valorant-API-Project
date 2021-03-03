const WeaponClass = require('../models/weapon_class')


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
                    res.status(500).send({ message: "Error!", error_info: err})
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
                    res.status(500).send({ message: "Error!", error_info: err})
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
                    res.status(500).send({ message: "Error!", error_info: err})
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
                    res.status(500).send({ message: "Error!", error_info: err})
                })
        } else {
            res.send({ message: "You do not have access to this endpoint"})
        }
    })

}