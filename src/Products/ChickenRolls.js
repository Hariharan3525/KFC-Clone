import React from 'react'
import SpicyChickenRoll from '../images/Spicy Chicken Roll.jpg'
import TangyChickenRoll from '../images/Tangy Chicken Roll.jpg'
import TandooriChickenRoll from '../images/Tandoori Chicken Roll.jpg'
import DoubleChickenRollMeal from '../images/DoubleChickenRollMeal.jpg'
import DoubleChickenRoll from '../images/DoubleChickenRoll.jpg'
import ClassicChickenRoll from '../images/ClassicChickenRoll.jpg'

const ChickenRolls = [
    {
        id: 1,
        title: "Thai Spicy Chicken Roll",
        category: "Non Veg",
        img: SpicyChickenRoll,
        price: "₹99.05",
        desc: "Fresh burst of Thai flavours and sauces in a flaky paratha, chicken strips and vegetables",
        quantity: 1
    },
    {
        id: 2,
        title: "Korean Tangy Chicken Roll",
        category: "Non Veg",
        img: TangyChickenRoll,
        price: "₹99.05",
        desc: "Delicious new roll featuring tangy Korean kimchi, vegetables, chicken stripes",
        quantity: 1
    },
    {
        id:3,
        title:"Indian Tandoori Chicken Roll",
        category: "Non Veg",
        img: TandooriChickenRoll,
        price: "₹99.05",
        desc: "Flavorful roll made with flaky lachha paratha, perfectly fried chicken strips in rich...",
        quantity: 1
    },
    {
        id:4,
        title:"Double Chicken Roll Meal",
        category: "Non Veg",
        img: DoubleChickenRollMeal,
        price: "₹247.62",
        desc: "The KFC Double Chicken Roll with Regular Fries & Pepsi. 889 Kcal",
        quantity: 1
    },
    {
        id:5,
        title:"Double Chicken Roll",
        category: "Non Veg",
        img: DoubleChickenRoll,
        price: "₹148.57",
        desc: "Double fun with double chicken strip filling, layerful onions",
        quantity: 1
    },
    {
        id:6,
        title:"Classic Chicken Roll",
        category: "Non Veg",
        img: ClassicChickenRoll,
        price: "₹99.05",
        desc: "Street style roll with single chicken strip, onions and two spicy sauce",
        quantity: 1
    }
]

export default ChickenRolls