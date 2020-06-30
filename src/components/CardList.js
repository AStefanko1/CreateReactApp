import React from 'react';
import Card from './Card';

const CardList = ({ Robots }) => {
    
    return(
        Robots.map((user,i) => {
            return (
            <Card 
                key = {i} 
                id= {Robots[i].id} 
                name = {Robots[i].name} 
                email = {Robots[i].email} 
            />
            )
        })
    );
}

export default CardList;