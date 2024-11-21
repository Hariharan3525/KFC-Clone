import React from 'react'
import LegPieceBucketMeal from '../images/LegPieceBucketMeal.jpg'
import LegPieceBucket from '../images/LegPieceBucket.jpg'
import HotandCrispy from '../images/4pc Hot&Crispy.jpg'
import MinglesMeal from '../images/MinglesMeal.jpg'
import WedOffer from '../images/WedOffer.jpg'
import WedSpl from '../images/WedSpl.jpg' 
import HotandCrispy8pc from '../images/Hot&CrispyChicken8pc.jpg'
import SavingsBucket from '../images/UltimateSavings.jpg'
import BigwithPep from '../images/Big8with2Pep.jpg'
import Big8ChickenBucket from '../images/Big8ChickenBucket.jpg'
import DipsBucket from '../images/DipsBucket.jpg'
import SmokyRed5pcwithPep from '../images/5pcSmokyRed.jpg'
import Big8withPepsi from '../images/Big8&Pepsi.jpg'
import SmokyRed5pc from '../images/SmokyRed5pc.jpg'
import HotandCrispy4pc from '../images/Hot&CrispyChicken4pc.jpg'
import  MinglesBucketMeal from '../images/MinglesBucketMeal.jpg'
import WedSplPeriPeri from '../images/WedSplPeriPeri.jpg'
import WedChickenBucket from '../images/WedChickenBucket.jpg'
import AllinOneBucket from '../images/AllinOneBucket.jpg'
import WedHotandCrispy from '../images/WedHot&Crispy.jpg'

const ChickenBuckets = [
    {
        id: 19,
        title: "Leg Piece Bucket Meal",
        category: "Non Veg",
        img: LegPieceBucketMeal,
        price: "₹548.57",
        desc: "Exciting Price drop for 5 Peri Peri Leg Pieces & 2 Dips & 2 Pepsi. Bestseller in segment",
        quantity: 1
    },
    {
        id: 20,
        title: "Leg Piece Bucket",
        category: "Non Veg",
        img: LegPieceBucket,
        price: "₹459.05",
        desc: "Exciting Price drop for 5 Peri Peri Leg Pieces & 2 Dips ( Serves 2-3)-Limited Time Offer!",
        quantity: 1
    },
    {
        id: 21,
        title: "4pc Hot & Crispy with 2 Pepsi",
        category: "Non Veg",
        img: HotandCrispy,
        price: "₹516.19",
        desc: "4 pieces of crispy, juicy chicken in a bucket served with 2 Pepsi (serves 2)",
        quantity: 1
    },
    {
        id: 22,
        title: "Mingles Meal",
        category: "Non Veg",
        img: MinglesMeal,
        price: "₹479.05",
        desc: "4 Wings, 2 Peri Peri Strips, Reg Popcorn,Med Fries & 2 Reg Pepsi.",
        quantity: 1
    },
    {
        id: 23,
        title: "New Wednesday Offer 20 Pcs for 499 Meal",
        category: "Non Veg",
        img: WedOffer,
        price: "₹679.05",
        desc: "New Wednesday Offer 20 Pcs for 499 Meal",
        quantity: 1
    },
    {
        id: 24,
        title: "Wednesday Special 12 pc PeriPeri Strips & 4 dips",
        category: "Non Veg",
        img: WedSpl,
        price: "₹369.00",
        desc: "Save 46% on 12 pc Peri Peri Strips & 4 dips. 1730 Kcal per serving",
        quantity: 1
    },
    {
        id: 25,
        title: "Hot & Crispy Chicken - 8 pcs",
        category: "Non Veg",
        img: HotandCrispy8pc,
        price: "₹648.57",
        desc: "Save Rs. 123 & get 8pc signature Hot & crispy chicken [serves 3-4]",
        quantity: 1
    },
    {
        id: 26,
        title: "Ultimate Savings Bucket",
        category: "Non Veg",
        img: SavingsBucket,
        price: "₹659.05",
        desc: "Save 40% on USB -variety bucket with Peri Peri Strips.",
        quantity: 1
    },
    {
        id: 27,
        title: "Big 8 with 2 Pepsi",
        category: "Non Veg",
        img: BigwithPep,
        price: "₹679.05",
        desc: "4 Hot & Cripsy + 4 Smoky Red + 2 Pepsi. 2018 Kcal per serving",
        quantity: 1
    },
    {
        id: 28,
        title: "Big 8 - Chicken Bucket",
        category: "Non Veg",
        img: Big8ChickenBucket,
        price: "₹599.05",
        desc: "Save 24% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]",
        quantity: 1
    },
    {
        id: 29,
        title: "Dips Bucket",
        category: "Non Veg",
        img: DipsBucket,
        price: "₹379.05",
        desc: "8 Peri Peri Strips with 2 Dips. 1115 Kcal per serving",
        quantity: 1
    },
    {
        id: 30,
        title: "5pc Smoky Red with 2 Pepsi",
        category: "Non Veg",
        img: SmokyRed5pcwithPep,
        price: "₹528.57",
        desc: "Grab 5 pc Smoky Red Chicken with Pepsi. 1003 Kcal per serving",
        quantity: 1
    },
    {
        id: 31,
        title: "Big 8 & Pepsi Black Meal",
        category: "Non Veg",
        img: Big8withPepsi,
        price: "₹679.05",
        desc: "4 Hot & Cripsy + 4 Smoky Red + 2 Pepsi Black. 1758 Kcal per serving",
        quantity: 1
    },
    {
        id: 32,
        title: "Smoky Red Grilled Chicken - 5 pc",
        category: "Non Veg",
        img: SmokyRed5pc,
        price: "₹428.57",
        desc: "Save Rs. 85 on 5pc Smoky red grilled chicken [serves 2]",
        quantity: 1
    },
    {
        id: 33,
        title: "Hot & Crispy Chicken-4pc",
        category: "Non Veg",
        img: HotandCrispy4pc,
        price: "₹379.05",
        desc: "Save Rs. 24 on 4 pc of signature Hot & Crispy Chicken at a deal price",
        quantity: 1
    },
    {
        id: 34,
        title: "Mingles Bucket Meal",
        category: "Non Veg",
        img: MinglesBucketMeal,
        price: "₹479.05",
        desc: "Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi",
        quantity: 1
    },
    {
        id: 35,
        title: "Wednesday Special Peri Peri BS",
        category: "Non Veg",
        img: WedSplPeriPeri,
        price: "₹608.57",
        desc: "Save 39%. 10 Strips, 4 Wings, 2 Reg Fries, 2 Reg Pepsi & 3 Dips. 2684 Kcal per serving",
        quantity: 1
    },
    {
        id: 36,
        title: "Wednesday Chicken Bucket",
        category: "Non Veg",
        img: WedChickenBucket,
        price: "₹648.57",
        desc: "Save 34% on 10 pieces of Hot & Crispy. 2647 Kcal per serving",
        quantity: 1
    },
    {
        id: 37,
        title: "All in One Bucket",
        category: "Non Veg",
        img: AllinOneBucket,
        price: "₹519.05",
        desc: "2 Wings+2Strip+1 HC+1 Leg pc/HC+1 Zinger Fillet+3 Dips+2Pepsi. 1966 Kcal per serving",
        quantity: 1
    },
    {
        id: 38,
        title: "Wednesday Hot & Crispy bucket meal",
        category: "Non Veg",
        img: WedHotandCrispy,
        price: "₹779.05",
        desc: "9 pc Hot & Crispy ,4 Peri Peri Strips,2 Reg Fries & 2 Reg Pepsi. 3327 Kcal per serving",
        quantity: 1
    },
]

export default ChickenBuckets