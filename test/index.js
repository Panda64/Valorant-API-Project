require('dotenv').config()
const app = require('../server.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert

const WeaponClass = require('../models/weapon_class');
const Weapon = require('../models/weapon');
const DamageRange = require('../models/damage_range');
const AltFireFeature = require('../models/alt_fire_feature');

chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {}
  mongoose.modelSchemas = {}
  mongoose.connection.close()
  done()
})


describe("API Tests", function() {
    beforeEach((done) => {
  
        const sampleDmg1 = new DamageRange({
            range : "10m",
            head : "105",
            body : "90",
            legs : "50",
        })
        sampleDmg1.save()

        const sampleDmg2 = new DamageRange({
            range : "50m",
            head : "53",
            body : "46",
            legs : "14",
        })
        sampleDmg2.save()

        const sampleDmg3 = new DamageRange({
            range : "70m",
            head : "24",
            body : "10",
            legs : "8",
        })
        sampleDmg3.save()

        const sampleAltFire = new AltFireFeature({
            type : "silenced",
            attributes : [
                  "attrtest1", "attrtest2", "attrtest3"
              ],
        })
        sampleAltFire.save()

          const sampleFeature = new AltFireFeature({
              type : "pretty cool",
              attributes : [
                    "feattest1", "feattest2", "feattest3"
                ],
          })
          sampleFeature.save()

        const sampleWeapon = new Weapon({
            name : "testweapon1",
            cost : "300",
            spread : "image link here",
            fire_type : "full auto",
            penetration : "large",
            fire_rate : "17",
            run_speed : "75%",
            equip_speed : "1 sec",
            first_shot_spread : "3 APS",
            reload_speed : "2 sec",
            magazine : "30 rounds",
            damage : [sampleDmg1, sampleDmg2, sampleDmg3],
            alt_fire : sampleAltFire,
            feature : sampleFeature,
        })
        sampleWeapon.save()

          const sampleWeaponClass = new WeaponClass({
              name: 'testclass1'
          })
          sampleWeaponClass.save()
          .then(() => {
              done()
          })
      })

    afterEach((done) => {
        WeaponClass.deleteMany({ name: ['testclass1', 'testclass2'] })
        .then(() => {
          return Weapon.deleteMany({ name: ['testweapon1', 'testweapon2'] }) 
        })
        .then(() => {
          return DamageRange.deleteMany({ range: ['10m', '50m', '70m'] })
        })
        .then(() => {
          return AltFireFeature.deleteMany({ type: ['silenced', 'pretty cool'] })
        })
        .then(() => {
          done()
        })
    })

    it('should create a new weapon class', (done) => {
        chai.request(app)
        .post('/weapon-class')
        .set('X-RapidAPI-Proxy-Secret', process.env.RAPIDAPI_PROXY_SECRET)
        .send({name: 'testclass2'})
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.message).to.equal('The testclass2 class has been successfully added to the database!')

            // check that weapon class is actually inserted into database
            WeaponClass.findOne({name: 'testclass2'}).then(weapon_class => {
                expect(weapon_class).to.be.an('object')
                done()
            })
        })
    })

    it('should create a new weapon', (done) => {
        const damage = [
            {
                "range" : "10m",
                "head" : "105",
                "body" : "90",
                "legs" : "50"
            },
            {
                "range" : "50m",
                "head" : "53",
                "body" : "46",
                "legs" : "14"
            },
            {
                "range" : "70m",
                "head" : "24",
                "body" : "10",
                "legs" : "8"
            }
        ]
        
        const alt_fire = {
            "type" : "silenced",
            "attributes" : [
                "test1", "test2", "test3"
            ]
        }

        const feature =  {
            "type" : "pretty cool",
            "attributes" : [
                "test1", "test2", "test3"
            ]
        }


        chai.request(app)
        .post('/testclass1')
        .set('X-RapidAPI-Proxy-Secret', process.env.RAPIDAPI_PROXY_SECRET)
        .send({
            name : "testweapon2",
            cost : "900",
            spread : "image link here",
            fire_type : "semi auto",
            penetration : "medium",
            fire_rate : "10",
            run_speed : "50%",
            equip_speed : "0.5 sec",
            first_shot_spread : "7 APS",
            reload_speed : "1 sec",
            magazine : "25 rounds",
            damage : damage,
            alt_fire : alt_fire,
            feature : feature
          })
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.message).to.equal(
              'The testweapon2 has been successfully created and added to the testclass1 class!'
              )
              console.log("test1")
            // check that weapon is actually inserted into the proper class
            WeaponClass.findOne({name: 'testclass1'}).then(weapon_class => {
                expect(weapon_class.weapons).to.be.an('array')
                expect(weapon_class.weapons[0]).to.be.an('object')
                expect(weapon_class.weapons[0].name).to.equal('testweapon2')
                expect(weapon_class.weapons[0].damage[0]).to.include(damage[0])
                expect(weapon_class.weapons[0].damage[1]).to.include(damage[1])
                expect(weapon_class.weapons[0].damage[2]).to.include(damage[2])
                expect(weapon_class.weapons[0].alt_fire).to.deep.include(alt_fire)
                expect(weapon_class.weapons[0].feature).to.deep.include(feature)
                done()
            })
        })
    })

    it('should get one specific weapon class', (done) => {
        chai.request(app)
        .get('/testclass1')
        .set('X-RapidAPI-Proxy-Secret', process.env.RAPIDAPI_PROXY_SECRET)
        .end((err, res) => {
            if (err) { done(err) }
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.equal('testclass1')
            done()
        })
    })

    it('should get one specific weapon from a class', (done) => {
        chai.request(app)
        .get('/weapon/testweapon1')
        .set('X-RapidAPI-Proxy-Secret', process.env.RAPIDAPI_PROXY_SECRET)
        .end((err, res) => {
            if (err) { done(err) }
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.equal('testweapon1')
            done()
        })
    })

    it('should rename weapon class', (done) => {
        chai.request(app)
        .put('/testclass1')
        .set('X-RapidAPI-Proxy-Secret', process.env.RAPIDAPI_PROXY_SECRET)
        .send({name: 'testclass3'})
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.message).to.equal('Weapon class testclass1 successfully renamed to testclass3')

            // check that weapon class is properly in the database under its new name
            WeaponClass.findOne({name: 'testclass3'}).then(weapon_class => {
                expect(weapon_class).to.be.an('object')
                done()
            })
        })
    })

    it('should delete a specific weapon class', (done) => {
        chai.request(app)
        .delete('/testclass1')
        .set('X-RapidAPI-Proxy-Secret', process.env.RAPIDAPI_PROXY_SECRET)
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.message).to.equal('The testclass1 class has been successfully removed from the database')

            // check that weapon class is actually deleted from the database
            WeaponClass.findOne({name: 'testclass1'}).then(weapon_class => {
                expect(weapon_class).to.equal(null)
                done()
            })
        })
    })

    it('should delete a specific weapon class', (done) => {
        chai.request(app)
        .delete('/weapon/testweapon1')
        .set('X-RapidAPI-Proxy-Secret', process.env.RAPIDAPI_PROXY_SECRET)
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.message).to.equal('The testweapon1 has been successfully removed from the database')

            // check that weapon is actually deleted from the database
            Weapon.findOne({name: 'testweapon1'}).then(weapon_class => {
                expect(weapon_class).to.equal(null)
                done()
            })
        })
    })

    it('should deny access to an endpoint without the proper proxy secret header', (done) => {
        chai.request(app)
        .get('/testclass1')
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body).to.be.an('object')
            expect(res.body.message).to.equal('You do not have access to this endpoint')
            done()
        })
    })
})