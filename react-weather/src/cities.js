import React from "react";

const cities = {
    1: {
        id: 1,
        name: 'Kazan',
        country: 'Russia',
        wind: {
            speed: '24',
            direction: 'north'
        },
        temperature: {
            average_temperature: '2',
            temp_min: '-35',
            temp_max: '35'
        },
        is_favorites: false
    },
    2: {
        id: 2,
        name: 'Moscow',
        country: 'Russia',
        wind: {
            speed: '15',
            direction: 'north'
        },
        temperature: {
            average_temperature: '7',
            temp_min: '-25',
            temp_max: '30'
        },
        is_favorites: false
    },
    3: {
        id: 3,
        name: 'Boston',
        country: 'USA',
        wind: {
            speed: '16',
            direction: 'north'
        },
        temperature: {
            average_temperature: '18',
            temp_min: '5',
            temp_max: '20'
        },
        is_favorites: false
    },
    4: {
        id: 4,
        name: 'Paris',
        country: 'France',
        wind: {
            speed: '10',
            direction: 'west'
        },
        temperature: {
            average_temperature: '23',
            temp_min: '-5',
            temp_max: '40'
        },
        is_favorites: false
    }

}

export default cities
