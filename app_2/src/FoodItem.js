import React from 'react';

export default function FoodItem ({foodItem}) {                 //destructure it from props
    return (
        <p>{foodItem}</p>
    )
}