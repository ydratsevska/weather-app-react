import React from "react";

const WeatherCard = ({ weather }) => {
    return (
        <div>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>test text</p>
        </div>
    );
};

export default WeatherCard;
