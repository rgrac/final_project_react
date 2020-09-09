import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CityCard = ({cityData, firstCard, cityFullName}) => {
    const {Day, Temperature} = cityData
    let iconNumber = Day.Icon < 10 ? '0'+ Day.Icon:Day.Icon
    let displayIcon = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`
    let cityInteger= parseInt(cityFullName.Key)
    let userlogged = JSON.parse(localStorage.getItem('loggedInUser'))
    const addFavorites = () => {
        console.log('test')
        let favoriteSelection = {
            userId: userlogged[0].id,
            cityKey: cityInteger,
            cityName: cityFullName.LocalizedName,
            countryName: cityFullName.Country.LocalizedName
        }
        fetch('http://localhost:5000/favorites', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(favoriteSelection)
        })
        .then(res => res.json())
        .then(res=>{
            alert('City added to your list of favorites successufully!')
        })
        .catch(err => {console.log(err)})
    } 

    return (
        <div>
                <Card style={{ width: '18rem' }}>
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
                      firstCard?  <Button variant="primary" onClick={addFavorites}>Add to your favorites</Button> : ''
                    }
                </Card.Body>
            </Card>
        </div>
    )
}
export default CityCard