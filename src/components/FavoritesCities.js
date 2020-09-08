import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class FavoritesCities extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteList: [],
            favoritesCityName: [],
            // newArray: []
        }

    }

    componentDidMount() {
        let userlogged = JSON.parse(localStorage.getItem('loggedInUser'))
        let userId = userlogged[0].id
        console.log(userId);
        fetch('http://localhost:5000/favoritelist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId })
        })
            .then(res => res.json())
            .then(res => {
                // console.log('from favoritescities server', res)
                this.setState({ favoriteList: res })
                console.log('this is after setState ', this.state)
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
                // console.log('from favoritescities server', res)
                this.setState({ favoritesCityName: res })
            })
            .catch(err => {
                console.log(err)
            })
        console.log(this.state.favoriteList)

        // this.setState({newArray:this.state.favoritesCityName})
    }


    render() {
        const { favoritesCityName, favoriteList } = this.state
        const removeFavorites = () => {
            let cityKey = item.city_key
            console.log(cityKey)
        }
        // let newArray = [favoritesCityName, favoriteList]
        // console.log(newArray)
        console.log(favoriteList)
        console.log(favoritesCityName)
        // const test = favoritesCityName.map(item => {
        //      return (<h2>{`${item.city_name} ${item.country_name}`}</h2>)
        // })
        // const test2 = favoriteList.map( item => {
        //     return (<h2>{`${item[0].Temperature.Metric.Value}${item[0].Temperature.Metric.Unit}°, Currently: ${item[0].WeatherText} `}</h2>)
        // })
        const test = favoritesCityName.map(item => {
            return (`${item.city_name} ${item.country_name} ${item.city_key}`)
        })
        const test2 = favoriteList.map(item => {
            return (`${item[0].Temperature.Metric.Value} ${item[0].Temperature.Metric.Unit}° Currently: ${item[0].WeatherText}`)
        })
        console.log(test)
        console.log(test2)

        const cardName = test.map((value, index) => {
            const cardCombined = test2[index]
            return (
                <div>
                    <Card border="dark" style={{ width: '10rem', textAlign: 'center' }}>
                        <Card.Header>{value}</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{cardCombined}</Card.Title>
                            <Button variant="primary" onClick={removeFavorites}>Remove from Favorites</Button>
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