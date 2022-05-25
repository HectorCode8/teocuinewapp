import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Ven y recorre los mejores lugares!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/iglesia2.jpg"
                        text='Explora la iconica arquitectura
                        del pintoresco pueblo'
                        label="Arte"
                        path="/services"
                        />
                        <CardItem 
                        src="images/img-9.jpg"
                        text='Cascada Salto Chico Citala'
                        label="Paisajes"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src="images/plaza1.jpg"
                        text='Una plaza central UNICA!'
                        label="Social"
                        path="/services"
                        />
                        <CardItem 
                        src="images/presa1.jpg"
                        text='Atrevete a visitar la famosa
                        presa de Huejotitlán (Alameda)'
                        label="Aventura"
                        path="/services"
                        />
                        <CardItem 
                        src="images/img-7.jpg"
                        text='Ven y atrevete a soñar'
                        label="Aventura"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
