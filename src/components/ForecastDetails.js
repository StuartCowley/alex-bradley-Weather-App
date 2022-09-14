import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { date, temperature, wind, humidity } = props;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">Date: {formattedDate}</div>
      <div className="forecast-details__minTemperature">
        Min Temp: {temperature.min}
      </div>
      <div className="forecast-details__maxTemperature">
        Max Temp: {temperature.max}
      </div>
      <div className="forecast-details__windSpeed">
        Wind Speed: {wind.speed}mph
      </div>
      <div className="forecast-details__windDirection">
        Wind Direction: {wind.direction}
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
};
