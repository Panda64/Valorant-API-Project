# Developer Documentation

If you have access to the `CREATE`, `UPDATE`, and `DELETE` routes of this API, here is the documentation for it.

## Creating weapons and weapon classes

Adding either a weapon or weapon class is basically just the `GET` requests in reverse. For example, to create a new weapon class, make a `POST` request (with required [RapidAPI](https://rapidapi.com/Panda64/api/valorant-weapons) headers) to https://valorant-weapons.p.rapidapi.com/weapon-class, with the body containing a JSON object of what the name of the weapon class should be, like this:

``` JSON

{
    "name": "classnamehere"
}

```

Now the weapon class is available to be retreived through the `/classnamehere` endpoint. As of now, there are no weapons in this class yet, so let's add one.

Using the same `/classnamehere` endpoint, make a `POST` request with the body containing the name and stats of the weapon, like of what is seen in the `/weapon/weapon_name` `GET` endpoint:

``` JSON

{
    "damage": [
        {
            "range": "0-15m",
            "head": "156",
            "body": "39",
            "legs": "33"
        },
        {
            "range": "15-30m",
            "head": "140",
            "body": "35",
            "legs": "29"
        },
        {
            "range": "30-50m",
            "head": "124",
            "body": "31",
            "legs": "26"
        }
    ],
    "name": "Phantom",
    "cost": "2900",
    "spread": "https://valorant-api-project.herokuapp.com/images/phantom",
    "fire_type": "Full-Auto",
    "penetration": "Medium",
    "fire_rate": "11 Rds/Sec",
    "run_speed": "5.4 M/Sec",
    "equip_speed": "1 Sec",
    "first_shot_spread": "0.2/0.11 Deg (Hip/ADS)",
    "reload_speed": "2.5 Sec",
    "magazine": "30 rounds",
    "alt_fire": {
        "attributes": [
            "Zoom: 1.25x",
            "Fire Rate: 90% (9.9 rounds/sec)",
            "Move Speed: 76% (4.104 m/sec)",
            "Slight spread and recoil reduction",
            "Crosshair follows recoil"
        ],
        "type": "Aim Down Sights"
    },
    "feature": {
        "attributes": [
            "Tracers not visible to enemies",
            "Firing sound can't be heard at distances of 40m+ except in direction of fire"
        ],
        "type": "Silenced"
    }
}

```

## Deleting weapons and weapon classes

Deleting a weapon or weapon class is simply just a `DELETE` request to the `/weapon/weapon_name` endpoint if a weapon is to be deleted, or to the `/weapon_class_name` endpoint for deleting an entire weapon class.

## Updating weapon class name

To update a weapon class name, make a `PUT` request to the `/weapon_class_name` endpoint with the body containing a JSON object with the new name like this:

``` JSON

{
    "name": "renamedclass"
}

```

As of now, this is the only updating option for objects in the database. There are future plans to allow things like updating specific stats of a weapon without having to delete and remake the entire weapon object.
