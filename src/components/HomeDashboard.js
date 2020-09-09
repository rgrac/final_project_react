import React from 'react';
// import './home.css';
import WeatherCard from './WeatherCard';
import { APIKEY } from './APIKeys';


class HomeDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            citieslist: [],
            text: '',
            suggestions: [],
            selectedCity: [],
            forecastData: [],
            cityData: {},
            login_status: {}
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        const { citieslist } = this.state
        let suggestions = [];
        if (value.length > 3) {
            suggestions = citieslist.filter(val => {
                return val.city_name.toLowerCase().startsWith(value.toLowerCase())
            })
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${value}`)
                .then(res => res.json())
                .then(cities => {
                    ;
                    this.setState({ suggestions: cities })
                })
        }
    }

    renderSuggestion = () => {
        const { suggestions } = this.state;
        return (
            <ul>
                {
                    suggestions.map(item => {
                        return <li key={item.Key}
                            onClick={() => this.onTextClicked(item.Key, item)}>{item.LocalizedName} {item.Country.LocalizedName}</li>
                    })
                }
            </ul>
        )
    }

    onTextClicked = (key, name) => {
        this.setState({ cityData: name })
        // this.setState({forecastData:weatherDummy})
        // console.log(weatherDummy)
        this.setState({ selectedCity: key })
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${APIKEY}&language=en-us&metric=true`)
            .then(res => res.json())
            .then(cityForecast => {
                // console.log(cityForecast);
                this.setState({ forecastData: cityForecast })
            })
            .catch(err => {
                console.log('We got an error in the cityfetch ', err)
            })
    }

    render() {
        const { forecastData, cityData } = this.state;

        return (

            <div>
                <h1>Home Page</h1>
                <h2>Select a city</h2>
                <input type="text"
                    onChange={this.onTextChange} />
                {this.renderSuggestion()}
                <WeatherCard forecastCity={forecastData} cityData={cityData} />

            </div>

        )
    }
}

export default HomeDashboard;