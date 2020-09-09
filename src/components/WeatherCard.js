import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import CityCard from './CityCard';


const WeatherCard = ({ forecastCity, cityData }) => {
    return (
        
        <div>
        {
            
            forecastCity.DailyForecasts ?
            <div>
            <CityCard cityData={forecastCity.DailyForecasts[0]} firstCard={true} cityFullName={cityData}/> 
            <CardDeck>
            {
                forecastCity.DailyForecasts.map((item,i) => {
                    if(i>0){
                        return <CityCard cityData={item} key={i} cityFullName={cityData} />

                    }
                })
            }
            </CardDeck>
            </div>
            : 'Please search for a city' 
        }
        </div>
    )
}

export default WeatherCard
