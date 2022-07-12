//http://api.weatherapi.com/v1/current.json?key=31007ad2806d41cb8c5194325221107&q=San%20Francisco&aqi=yes
import React from 'react';
export default function Weather(req, res) {

    const url = 'http://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
        key: "31007ad2806d41cb8c5194325221107",
        q: req.query.location,
        aqi: 'yes'
    });

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const location = req.query;
            res.status(200).json({
                location: { location },
                temp_f: data.current.temp_f,
                humidity: data.current.humidity,

            });
        })
}