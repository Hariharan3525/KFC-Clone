import React from 'react'
import ClassicGinger from '../images/ClassicGinger.jpg'
import ChickenBoxMeal from '../images/ChickenBoxMeal.jpg'
import TandooriGinger from '../images/TandooriGingerBoxMeal.jpg'

const BoxMeals = [
    {
        id: 39,
        title: "Classic Zinger Box Meal",
        category: "Non Veg",
        img: ClassicGinger,
        price: "₹299.05",
        desc: "Try the Amercian Classic Zinger Meal during our Burger Fest!",
        quantity: 1
    },
    {
        id: 40,
        title: "All Chicken Box Meal",
        category: "Non Veg",
        img: ChickenBoxMeal,
        price: "₹179.05",
        desc: "All in one meal box with 1pc Hot & Crispy,2 Peri Peri Strips & Pepsi.",
        quantity: 1
    },
    {
        id: 41,
        title: "Tandoori Zinger Box Meal",
        category: "Non Veg",
        img: TandooriGinger,
        price: "₹319.05",
        desc: "Flavorful Box Meal with Tandoori Zinger ,2 Hot Wings , Fries & Pepsi",
        quantity: 1
    },
]
export default BoxMeals