import React from 'react'
import ChickenKrisper from '../images/ChickenKrisper.jpg'
import MexicanZingerPro from '../images/MexicanGinger.jpg'
import ZingerProPepsi from '../images/ZingerProPepsi.jpg'
import SpicyChickenKrisper from '../images/SpicyChickenKrisper.jpg'
import ClassicChickenKrisper from '../images/ClassicChickenKrisper.jpg'
import ClassicChickenKrisperReg from '../images/ClassicChickenKrisper+Reg Popcorn.jpg'
import GingerProBurger from '../images/GingerProBurger.jpg'
import SpicyKrisperReg from '../images/SpicyChickenKrisperReg.jpg'
import PaneerZingerBurger from '../images/PaneerZingerBurger.jpg'
import SpicyChickenKrisperwithFries from '../images/SpicyChickenKrisperwithFries.jpg'
import SpicyChickenKrisperwithCheese from '../images/SpicyChickenKrisperwithCheese.jpg'
import IndianGingerMeal from '../images/IndianZingerMeal.jpg'
import SpicyZingerBurger from '../images/SpicyZingerBurger.jpg'
import ClassicChickenwithCheese from '../images/ClassicChickenKrisperwithCheese.jpg'
import CaribbeanGingerMeal from '../images/CaribbeanZingerMeal.jpg'
import ChickenZingerBurger from '../images/ChickenZingerBurger.jpg'
import ChickenTandooriBurger from '../images/ChickenTandooriBurger.jpg'
import ChickenTandooriBurgerwithCheese from '../images/ChickenTandooriwithCheese.jpg'
import ZingerWings from '../images/Zinger Wings.jpg'
import ClassicVegKrisper from '../images/ClassicVegKrisper.jpg'
import VegZingerBurgerwithCheese from '../images/VegZingerBurgerwithCheese.jpg'
import VegZingerBurger from '../images/VegZingerBurger.jpg'
import ChickenGingerBurger from '../images/ChickenGingerBurger.jpg'
import SpicyVegKrisper from '../images/SpicyVegKrisper.jpg'
import ZingerFriesPepCombo from '../images/ZingerFriesPepCombo.jpg'
import TandooriZinger from '../images/TandooriZinger.jpg'
import VegGingerFries from '../images/VegGingerFries.jpg'
import LongerChickenBurgerMeal from '../images/LongerChickenBurgerMeal.jpg'
import LongerVegBurgerMeal from '../images/LongerVegBurgerMeal.jpg'
import LongerVegBurger from '../images/LongerVegBurger.jpg'
import ClassicVegKrisperwithFries from '../images/ClassicVegKrisperwithFries.jpg'

const Burgers = [
    {
        id: 62,
        title: "Classic Chicken Krisper",
        category: "Non Veg",
        img: ChickenKrisper,
        price: "₹119.05",
        desc: "Enjoy this delicious value burger featuring delicious sauces and two chicken strips",
        quantity: 1
    },
    {
        id: 63,
        title: "Mexican Zinger Pro Meal ( Zinger Pro+ Reg Fries+Re",
        category: "Non Veg",
        img: MexicanZingerPro,
        price: "₹318.10",
        desc: "Try the Mexican Zinger Pro Meal during our Burger Fest!",
        quantity: 1
    },
    {
        id: 64,
        title: "Indian Paneer Zinger Meal (with Reg Fries + Pepsi",
        category: "Non Veg",
        img: ZingerProPepsi,
        price: "₹318.10",
        desc: "Try the premium cheese,lettuce,tomato filled Zinger burger with fries & pepsi black!",
        quantity: 1
    },
    {
        id: 65,
        title: "Spicy Chicken Krisper",
        category: "Non Veg",
        img: SpicyChickenKrisper,
        price: "₹119.05",
        desc: "Enjoy this delicious value burger featuring delicious spicy sauces and two chicken strips",
        quantity: 1
    },
    {
        id: 66,
        title: "Classic Chicken Krisper + Reg Fries + Reg Pepsi",
        category: "Non Veg",
        img: ClassicChickenKrisper,
        price: "₹218.10",
        desc: "Enjoy Classic Chicken Krisper with Reg Fries & Reg Pepsi",
        quantity: 1
    },
    {
        id: 67,
        title: "Classic Chicken Krisper + Reg Popcorn + Reg Pepsi",
        category: "Non Veg",
        img: ClassicChickenKrisperReg,
        price: "₹248.57",
        desc: "Enjoy Classic Chicken Krisper with Reg Popcorn & Reg Pepsi",
        quantity: 1
    },
    {
        id: 68,
        title: "Zinger Pro Burger",
        category: "Non Veg",
        img: GingerProBurger,
        price: "₹219.05",
        desc: "New premium zinger with crunchy zinger fillet,cheese,lettuce,tomatoes,sauce...",
        quantity: 1
    },
    {
        id: 69,
        title: "Spicy Chicken Krisper + Reg Popcorn + Reg Pepsi",
        category: "Non Veg",
        img: SpicyKrisperReg,
        price: "₹248.57",
        desc: "Enjoy Classic Chicken Krisper with Reg Popcorn & Reg Pepsi",
        quantity: 1
    },
    {
        id: 70,
        title: "Paneer Zinger Burger",
        category: "Veg",
        img: PaneerZingerBurger,
        price: "₹199.05",
        desc: "It's Back! Crunchy Indian Paneer Patty Burger with tangy sauce and Veggies",
        quantity: 1
    },
    {
        id: 71,
        title: "Spicy Chicken Krisper + Reg Fries + Reg Pepsi",
        category: "Non Veg",
        img: SpicyChickenKrisperwithFries,
        price: "₹218.10",
        desc: "Grab the Spicy Chicken Krisper with Fries & Pepsi. 760 Kcal per serving",
        quantity: 1
    },
    {
        id: 72,
        title: "Spicy Chicken Krisper - with Cheese",
        category: "Non Veg",
        img: SpicyChickenKrisperwithCheese,
        price: "₹143.81",
        desc: "Cheese slice filled Spicy Chicken Krisper. 433 Kcal per serving",
        quantity: 1
    },
    {
        id: 73,
        title: "Indian Paneer Zinger Meal (with Reg Fries + Pepsi",
        category: "Veg",
        img: IndianGingerMeal,
        price: "₹298.10",
        desc: "Paneer Zinger is back! Try the Indian Paneer Zinger Meal during our Burger Fest!",
        quantity: 1
    },
    {
        id: 74,
        title: "Spicy Zinger Burger",
        category: "Non Veg",
        img: SpicyZingerBurger,
        price: "₹188.57",
        desc: "New Caribbean Spicy Zinger Burger with Spicy Bun & Spicy chilli sauce with Zinger Fillet, Lettuce, Onion...",
        quantity: 1
    },
    {
        id: 75,
        title: "Classic Chicken Krisper - with Cheese",
        category: "Non Veg",
        img: ClassicChickenwithCheese,
        price: "₹143.81",
        desc: "Cheese slice filled Classic Chicken Krisper. 490 Kcal per serving",
        quantity: 1
    },
    {
        id: 76,
        title: "Caribbean Spicy Zinger Meal (Spicy Zinger+ Reg Fri)",
        category: "Non Veg",
        img: CaribbeanGingerMeal,
        price: "₹287.62",
        desc: "Try the Caribbean Spicy Zinger Meal during our Burger Fest!",
        quantity: 1
    },
    {
        id: 77,
        title: "Chicken Zinger Burger - Classic with Cheese",
        category: "Non Veg",
        img: ChickenZingerBurger,
        price: "₹203.81",
        desc: "Signature burger with a crunchy chicken fillet, cheese slice, veggies & a delicious mayo sauce",
        quantity: 1
    },
    {
        id: 78,
        title: "Chicken Zinger Burger - Tandoori",
        category: "Non Veg",
        img: ChickenTandooriBurger,
        price: "₹188.57",
        desc: "Chicken zinger with a delicious tandoori sauce",
        quantity: 1
    },
    {
        id: 79,
        title: "Chicken Zinger Burger - Tandoori with Cheese",
        category: "Non Veg",
        img: ChickenTandooriBurgerwithCheese,
        price: "₹213.57",
        desc: "Chicken zinger with delicious tandoori sauce & cheese slice",
        quantity: 1
    },
    {
        id: 80,
        title: "Zinger, Wings and Pepsi combo",
        category: "Non Veg",
        img: ZingerWings,
        price: "₹365.71",
        desc: "Relish the Classic Zinger with 4 pieces Hot Wings and Pepsi",
        quantity: 1
    },
    {
        id: 81,
        title: "Classic Veg Krisper",
        category: "Veg",
        img: ClassicVegKrisper,
        price: "₹99.05",
        desc: "Relish the Classic Veg Krisper!",
        quantity: 1
    },
    {
        id: 82,
        title: "Veg Zinger Burger with Cheese",
        category: "Veg",
        img: VegZingerBurgerwithCheese,
        price: "₹193.57",
        desc: "Signature veg burger with crispy patties, cheese slice, veggies & a tangy sauce",
        quantity: 1
    },
    {
        id: 83,
        title: "Veg Zinger Burger",
        category: "Veg",
        img: VegZingerBurger,
        price: "₹168.57",
        desc: "Signature veg burger with crispy patties, veggies & a tangy sauce",
        quantity: 1
    },
    {
        id: 84,
        title: "Chicken Zinger Burger - Classic",
        category: "Non Veg",
        img: ChickenGingerBurger,
        price: "₹179.05",
        desc: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
        quantity: 1
    },
    {
        id: 85,
        title: "Spicy Veg Krisper",
        category: "Veg",
        img: SpicyVegKrisper,
        price: "₹99.05",
        desc: "The spicy veg krisper is up for grabs!",
        quantity: 1
    },
    {
        id: 86,
        title: "Zinger, Fries & Pepsi combo",
        category: "Non Veg",
        img: ZingerFriesPepCombo,
        price: "₹278.10",
        desc: "The spicy veg krisper is up for grabs!",
        quantity: 1
    },
    {
        id: 87,
        title: "Tandoori Zinger & Popcorn combo",
        category: "Non Veg",
        img: TandooriZinger,
        price: "₹358.10",
        desc: "The spicy veg krisper is up for grabs!",
        quantity: 1
    },
    {
        id: 88,
        title: "Veg Zinger, Fries & Pepsi combo",
        category: "Veg",
        img: VegGingerFries,
        price: "₹278.10",
        desc: "The spicy veg krisper is up for grabs!",
        quantity: 1
    },
    {
        id: 89,
        title: "Longer Chicken Burger Meal",
        category: "Non Veg",
        img: LongerChickenBurgerMeal,
        price: "₹198.10",
        desc: "Longer Chicken Burger Meal",
        quantity: 1
    },
    {
        id: 90,
        title: "Longer Veg Burger Meal",
        category: "Veg",
        img: LongerVegBurgerMeal,
        price: "₹198.10",
        desc: "Longer Veg Burger Meal",
        quantity: 1
    },
    {
        id: 91,
        title: "Longer Veg Burger",
        category: "Veg",
        img: LongerVegBurger,
        price: "₹99.05",
        desc: "The really long burger filled with veg strip, onion and dynamite mayo sauce",
        quantity: 1
    },
    {
        id: 92,
        title: "Classic Veg Krisper, Fries & Pepsi combo",
        category: "Veg",
        img: ClassicVegKrisperwithFries,
        price: "₹189.52",
        desc: "Grab the Veg Krisper with Fries & Pepsi. 708 Kcal per serving",
        quantity: 1
    },
    {
        id: 93,
        title: "Spicy Veg Krisper, Fries & Pepsi combo",
        category: "Veg",
        img: ClassicVegKrisperwithFries,
        price: "₹189.52",
        desc: "Grab the Spicy Veg Krisper with Fries & Pepsi. 734 Kcal per serving",
        quantity: 1
    }
]

export default Burgers