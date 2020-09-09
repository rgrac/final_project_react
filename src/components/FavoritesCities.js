import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class FavoritesCities extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteList: [],
            favoritesCityName: [],
            message: ''
        }

    }

    componentDidMount() {
        let userlogged = JSON.parse(localStorage.getItem('loggedInUser'))
        let userId = userlogged[0].id
        fetch('http://localhost:5000/favoritelist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ favoriteList: res })
            })
            .catch(err => {
                console.log(err)
            })

        fetch('http://localhost:5000/favoritecitylist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ favoritesCityName: res })
            })
            .catch(err => {
                console.log(err)
            })
    }

    removeFavorites = (cityKey) => {
        let userlogged = JSON.parse(localStorage.getItem('loggedInUser'))
        let userId = userlogged[0].id
        fetch('http://localhost:5000/removefavorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId, cityKey
            })
        })
        .then(res => res.json())
        .then(res => {
            alert('City removed from your list')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const { favoritesCityName, favoriteList } = this.state
        const temperatures = favoriteList.map(item => {
            return (`${item[0].Temperature.Metric.Value} ${item[0].Temperature.Metric.Unit}° Currently: ${item[0].WeatherText}`)
        })

        const cardName = favoritesCityName.map((value, index) => {
            const cardCombined = temperatures[index]
            return (
                <div key={index}>
                    <Card border="dark" style={{ width: '10rem', textAlign: 'center' }}>
                        <Card.Header>{value.city_name} {value.country_name}</Card.Header>
                        <Card.Body>
                            <Card.Title style= {{textAlign: 'center'}}>{cardCombined}</Card.Title>
                            <Button variant="primary" onClick={()=>this.removeFavorites(value.city_key)}>Remove from Favorites</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                {
                    cardName
                }
            </div>
        )
    }
}

export default FavoritesCities