# Valorant Weapons API

The Valorant Weapons API is a simple, easy to use API that provides users with every available stat for each weapon in the game.

## How to use

The API is hosted over at [RapidAPI](https://rapidapi.com/Panda64/api/valorant-weapons). Simply Sign-Up/Login and subscribe to the API to get a key.

### Getting a weapon class

There are currently two `GET` request available to use, each returning a JSON object. The first one returns a weapon class with its associated weapons and their stats. Just make a request to https://valorant-weapons.p.rapidapi.com/weapon_class_name where `weapon_class_name` is the name of the class you wish to retreive the information from (make sure to include the proper header parameters that [RapidAPI](https://rapidapi.com/Panda64/api/valorant-weapons) requires in your request; for more in-depth information on consuming an API with RapidAPI, see the quick-start section of their docs [here](https://docs.rapidapi.com/docs/basics-creating-a-project)).

Here is the current list of weapon classes (valid *case sensitive* `weapon_class_name` inputs) that are currently in Valorant:

- Sidearms
- SMGS
- Shotguns
- Rifles
- Snipers
- LMGS

These endpoints can be tested at the [RapidAPI](https://rapidapi.com/Panda64/api/valorant-weapons) page, but here is an example response from the `SMGS` endpoint just for show:

``` JSON

{
    "weapons": [
        {
            "damage": [
                {
                    "_id": "6041d3c0823b840004e4de74",
                    "range": "0-20m",
                    "head": "67",
                    "body": "27",
                    "legs": "22"
                },
                {
                    "_id": "6041d3c0823b840004e4de75",
                    "range": "20-50m",
                    "head": "62",
                    "body": "25",
                    "legs": "21"
                }
            ],
            "_id": "6041d3c0823b840004e4de79",
            "name": "Stinger",
            "cost": "1100",
            "spread": "https://valorant-api-project.herokuapp.com/images/stinger",
            "fire_type": "Full-Auto",
            "penetration": "Low",
            "fire_rate": "16 Rds/Sec",
            "run_speed": "5.73 M/Sec",
            "equip_speed": "0.75 Sec",
            "first_shot_spread": "0.65/0.5 Deg (Hip/ADS)",
            "reload_speed": "2.25 Sec",
            "magazine": "20 rounds",
            "alt_fire": {
                "attributes": [
                    "Zoom: 1.15x",
                    "Fire Rate: 52% (8.471 rounds/sec)",
                    "Move Speed: 76% (4.361 m/sec)",
                    "Slight spread and recoil reduction",
                    "Crosshair follows recoil",
                    "Burst Fire: 4 round burst"
                ],
                "_id": "6041d3c0823b840004e4de77",
                "type": "Aim Down Sights"
            },
            "feature": null,
        },
        {
            "damage": [
                {
                    "_id": "6041d4a5823b840004e4de7b",
                    "range": "0-20m",
                    "head": "78",
                    "body": "26",
                    "legs": "22"
                },
                {
                    "_id": "6041d4a5823b840004e4de7c",
                    "range": "20-50m",
                    "head": "66",
                    "body": "22",
                    "legs": "18"
                }
            ],
            "_id": "6041d4a5823b840004e4de80",
            "name": "Spectre",
            "cost": "1600",
            "spread": "https://valorant-api-project.herokuapp.com/images/spectre",
            "fire_type": "Full-Auto",
            "penetration": "Low",
            "fire_rate": "13.33 Rds/Sec",
            "run_speed": "5.73 M/Sec",
            "equip_speed": "0.75 Sec",
            "first_shot_spread": "0.4/0.25 Deg (Hip/ADS)",
            "reload_speed": "2.25 Sec",
            "magazine": "30 rounds",
            "alt_fire": {
                "attributes": [
                    "Zoom: 1.15x",
                    "Fire Rate: 90% (12 rounds/sec)",
                    "Move Speed: 76% (4.361 m/sec)",
                    "Slight spread and recoil reduction",
                    "Crosshair follows recoil"
                ],
                "_id": "6041d4a5823b840004e4de7e",
                "type": "Aim Down Sights"
            },
            "feature": {
                "attributes": [
                    "Tracers not visible to enemies",
                    "Firing sound can't be heard at distances of 40m+ except in direction of fire"
                ],
                "_id": "6041d4a5823b840004e4de7f",
                "type": "Silenced"
            },
        }
    ],
    "_id": "6041cc63823b840004e4de4e",
    "name": "SMGS"
}

```

### Getting a weapon

The other `GET` request is very similar to the first, but this time, only a specific weapon is returned. Making a request to https://valorant-weapons.p.rapidapi.com/weapon/weapon_name where `weapon_name` is the desired weapon, will return all stats associated with that weapon.

Below is the current list (again, valid *case sensitive* `weapon_name` inputs) of weapons in Valorant:

- Classic
- Shorty
- Frenzy
- Ghost
- Sheriff
- Stinger
- Spectre
- Bucky
- Judge
- Bulldog
- Guardian
- Phantom
- Vandal
- Marshall
- Operator
- Ares
- Odin

Here is an example response from the `Ghost` endpoint:

``` JSON

{
    "damage": [
        {
            "_id": "6041d1f0823b840004e4de66",
            "range": "0-30m",
            "head": "105",
            "body": "30",
            "legs": "25"
        },
        {
            "_id": "6041d1f0823b840004e4de67",
            "range": "30-50m",
            "head": "87",
            "body": "25",
            "legs": "21"
        }
    ],
    "_id": "6041d1f0823b840004e4de6b",
    "name": "Ghost",
    "cost": "500",
    "spread": "https://valorant-api-project.herokuapp.com/images/ghost",
    "fire_type": "Semi-Auto",
    "penetration": "Medium",
    "fire_rate": "6.75 Rds/Sec",
    "run_speed": "5.73 M/Sec",
    "equip_speed": "0.75 Sec",
    "first_shot_spread": "0.3 Deg (Hip/ADS)",
    "reload_speed": "1.5 Sec",
    "magazine": "15 rounds",
    "alt_fire": null,
    "feature": {
        "attributes": [
            "Tracers not visible to enemies",
            "Firing sound can't be heard at distances of 40m+ except in direction of fire"
        ],
        "_id": "6041d1f0823b840004e4de6a",
        "type": "Silenced"
    }
}

```

### Issues

If you find any problems with this API, feel free to open up a discussion at the [RapidAPI](https://rapidapi.com/Panda64/api/valorant-weapons) page, or open an issue on [Github](https://github.com/Panda64/Valorant-API-Project).

*The weapon stats in this API are current as of patch 2.04*
