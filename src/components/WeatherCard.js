import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import CityCard from './CityCard';


const WeatherCard = ({ forecastCity, cityData }) => {
    console.log('This is forecastCity from WeatherCard ', forecastCity)
    console.log('this is cityData from weatherCard ', cityData)
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
        // <div>
            // <Card style={{ width: '18rem' }}>
            //     <Card.Img variant="top" src="holder.js/100px180" />
            //     <Card.Body>
            //         <Card.Title>Card Title</Card.Title>
            //         <Card.Text>
            //             Some quick example text to build on the card title and make up the bulk of
            //             the card's content.
            //         </Card.Text>
            //         <Button variant="primary">Go somewhere</Button>
            //     </Card.Body>
            // </Card>
        //     <CardDeck>
        //         <Card>
        //             <Card.Img variant="top" src="holder.js/100px160" />
        //             <Card.Body>
        //                 <Card.Title>Card title</Card.Title>
        //                 <Card.Text>
        //                     This is a wider card with supporting text below as a natural lead-in to
        //                     additional content. This content is a little bit longer.
        //                 </Card.Text>
        //             </Card.Body>
        //             <Card.Footer>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //             </Card.Footer>
        //         </Card>
        //         <Card>
        //             <Card.Img variant="top" src="holder.js/100px160" />
        //             <Card.Body>
        //                 <Card.Title>Card title</Card.Title>
        //                 <Card.Text>
        //                     This card has supporting text below as a natural lead-in to additional
        //                     content.{' '}
        //                 </Card.Text>
        //             </Card.Body>
        //             <Card.Footer>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //             </Card.Footer>
        //         </Card>
        //         <Card>
        //             <Card.Img variant="top" src="holder.js/100px160" />
        //             <Card.Body>
        //                 <Card.Title>Card title</Card.Title>
        //                 <Card.Text>
        //                     This is a wider card with supporting text below as a natural lead-in to
        //                     additional content. This card has even longer content than the first to
        //                     show that equal height action.
        //                 </Card.Text>
        //             </Card.Body>
        //             <Card.Footer>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //             </Card.Footer>
        //         </Card>
        //         <Card>
        //             <Card.Img variant="top" src="holder.js/100px160" />
        //             <Card.Body>
        //                 <Card.Title>Card title</Card.Title>
        //                 <Card.Text>
        //                     This is a wider card with supporting text below as a natural lead-in to
        //                     additional content. This card has even longer content than the first to
        //                     show that equal height action.
        //                 </Card.Text>
        //             </Card.Body>
        //             <Card.Footer>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //             </Card.Footer>
        //         </Card>
        //     </CardDeck>
        // </div>