# VALORANT Weapons API

The VALORANT Weapons API is a simple, easy to use API that provides users with every available stat for each weapon in the game.

**Attention:** The structure of this API has seen major changes since *10/8/2021*. If you have been using the API before this date, make sure to go through the docs and familarize yourself with the new build.

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

``` json

{
    "weapons": [
        {
            "damage": [
                {
                    "_id": "615ea2d4ffbc7300043f21c0",
                    "range": {
                        "_id": "615ea2d4ffbc7300043f21bf",
                        "low": 0,
                        "high": 20
                    },
                    "head": 67,
                    "body": 27,
                    "legs": 22
                },
                {
                    "_id": "615ea2d4ffbc7300043f21c2",
                    "range": {
                        "_id": "615ea2d4ffbc7300043f21c1",
                        "low": 20,
                        "high": 50
                    },
                    "head": 62,
                    "body": 25,
                    "legs": 21
                }
            ],
            "_id": "615ea2d4ffbc7300043f21c5",
            "name": "Stinger",
            "cost": 950,
            "spread": "https://valorant-api-project.herokuapp.com/images/stinger",
            "fire_type": "Auto",
            "penetration": "Low",
            "fire_rate": 16,
            "run_speed": 5.73,
            "equip_speed": 0.75,
            "first_shot_spread": {
                "_id": "615ea2d4ffbc7300043f21be",
                "hip": 0.65,
                "ads": 0.5
            },
            "reload_speed": 2.25,
            "magazine": 20,
            "alt_fire": {
                "_id": "615ea2d4ffbc7300043f21c4",
                "type": "Aim Down Sights",
                "attributes": {
                    "_id": "615ea2d4ffbc7300043f21c3",
                    "zoom": 1.15,
                    "fire_rate": [
                        "52%",
                        8.471
                    ],
                    "move_speed": [
                        "76%",
                        4.361
                    ],
                    "rounds_per_burst": 4,
                    "special": [
                        "Slight spread and recoil reduction",
                        "Crosshair follows recoil"
                    ]
                }
            },
            "feature": null
        },
        {
            "damage": [
                {
                    "_id": "615ea3c7ffbc7300043f21c9",
                    "range": {
                        "_id": "615ea3c7ffbc7300043f21c8",
                        "low": 0,
                        "high": 20
                    },
                    "head": 78,
                    "body": 26,
                    "legs": 22
                },
                {
                    "_id": "615ea3c7ffbc7300043f21cb",
                    "range": {
                        "_id": "615ea3c7ffbc7300043f21ca",
                        "low": 20,
                        "high": 50
                    },
                    "head": 66,
                    "body": 22,
                    "legs": 18
                }
            ],
            "_id": "615ea3c7ffbc7300043f21cf",
            "name": "Spectre",
            "cost": 1600,
            "spread": "https://valorant-api-project.herokuapp.com/images/spectre",
            "fire_type": "Auto",
            "penetration": "Low",
            "fire_rate": 13.33,
            "run_speed": 5.73,
            "equip_speed": 0.75,
            "first_shot_spread": {
                "_id": "615ea3c7ffbc7300043f21c7",
                "hip": 0.4,
                "ads": 0.25
            },
            "reload_speed": 2.25,
            "magazine": 30,
            "alt_fire": {
                "_id": "615ea3c7ffbc7300043f21cd",
                "type": "Aim Down Sights",
                "attributes": {
                    "_id": "615ea3c7ffbc7300043f21cc",
                    "zoom": 1.15,
                    "fire_rate": [
                        "90%",
                        12
                    ],
                    "move_speed": [
                        "76%",
                        4.361
                    ],
                    "special": [
                        "Slight spread and recoil reduction",
                        "Crosshair follows recoil"
                    ]
                }
            },
            "feature": {
                "attributes": [
                    "Tracers not visible to enemies",
                    "Firing sound can't be heard at distances of 40m+ except in direction of fire"
                ],
                "_id": "615ea3c7ffbc7300043f21ce",
                "type": "Silenced"
            }
        }
    ],
    "_id": "615d418b4b126600042c3a69",
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

``` json

{
    "damage": [
        {
            "_id": "615ea05bffbc7300043f21b2",
            "range": {
                "_id": "615ea05bffbc7300043f21b1",
                "low": 0,
                "high": 30
            },
            "head": 105,
            "body": 30,
            "legs": 25
        },
        {
            "_id": "615ea05bffbc7300043f21b4",
            "range": {
                "_id": "615ea05bffbc7300043f21b3",
                "low": 30,
                "high": 50
            },
            "head": 87,
            "body": 25,
            "legs": 21
        }
    ],
    "_id": "615ea05bffbc7300043f21b5",
    "name": "Ghost",
    "cost": 500,
    "spread": "https://valorant-api-project.herokuapp.com/images/ghost",
    "fire_type": "Semi",
    "penetration": "Medium",
    "fire_rate": 6.75,
    "run_speed": 5.73,
    "equip_speed": 0.75,
    "first_shot_spread": {
        "_id": "615ea05bffbc7300043f21b0",
        "hip": 0.3
    },
    "reload_speed": 1.5,
    "magazine": 15,
    "alt_fire": null,
    "feature": null
}

```

### Units

Most of the information returned is just numbers. Refer to the reference below for the units/explanation of each ambiguous value.

``` json

{
    "damage": [
        {
            "range": {
                "low": "meters",
                "high": "meters",
                "special": "special modifier"
            },
            "head": "damage points",
            "body": "damage points",
            "legs": "damage points"
        }
    ],
    "name": "",
    "cost": "credits",
    "spread": "",
    "fire_type": "",
    "penetration": "",
    "fire_rate": "rounds per second",
    "run_speed": "meters per second",
    "equip_speed": "seconds",
    "first_shot_spread": {
        "hip": "degrees",
        "ads": "degrees"
    },
    "reload_speed": "seconds",
    "magazine": "rounds",
    "alt_fire": {
        "type": "",
        "attributes": {
            "zoom": "multiplier",
            "fire_rate": [
                "percentage of original",
                "rounds per second"
            ],
            "move_speed": [
                "percentage of original",
                "meters per second"
            ],
            "pellet_count": "",
            "burst_rate": "bursts per second",
            "rounds_per_burst": "",
            "canister_detonation_distance": "meters",
            "special": [
                ""
            ]
        }
    },
    "feature": {
        "attributes": [
            ""
        ],
        "type": ""
    }
}

```

## Issues

If you find any problems with this API, feel free to open up a discussion at the [RapidAPI](https://rapidapi.com/Panda64/api/valorant-weapons) page, or open an issue on [Github](https://github.com/Panda64/Valorant-API-Project).

*The weapon stats in this API are current as of patch 3.07*

*The VALORANT Weapons API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.*
