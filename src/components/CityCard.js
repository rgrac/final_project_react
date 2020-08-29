import React from 'react';
import WeatherCard from './WeatherCard';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

const CityCard = ({cityData, firstCard,cityFullName}) => {
    const {Day, Temperature} = cityData
    let iconNumber = Day.Icon < 10 ? '0'+ Day.Icon:Day.Icon
    // let correctNumber = ''
    // if (Day.Icon < 10) {
    //     correctNumber = '0' + Day.Icon
    // } else {
    //     correctNumber = Day.Icon
    // } and then in the displayIcon replace instead of IconNumber
    let displayIcon = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`
    

    return (
        <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                    {
                        cityFullName ?
                        cityFullName.LocalizedName + " " + cityFullName.Country.LocalizedName
                            :
                            ''
                    }
                    </Card.Title>
                    <Card.Text>
                        <img src={displayIcon} />
                    </Card.Text>
                    <Card.Text>
                        {Day.IconPhrase}
                    </Card.Text>
                    <Card.Text>
                        Maximum {Temperature.Maximum.Value}°C
                    </Card.Text>
                    <Card.Text>
                        Minimun {Temperature.Minimum.Value}°C
                    </Card.Text>
                    {
                      firstCard?  <Button variant="primary">Add to your favorites</Button> : ''
                    }
                </Card.Body>
            </Card>
        </div>
    )
}
export default CityCard