import { getOrderByID } from "./Api";

export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const Option=[
	{
		id:"1",
		name :"Add monney"
	},
	{
		id:"2",
		name :"Add monney"
	},{
		id:"3",
		name :"Add monney"
	},{
		id:"4",
		name :"Add monney"
	},
]

export const order = [{
	id: "01",
	sessionmeal: "02",
	orderid: "02",
	totalamount: "30,000",
	quantity: 1
}]

export const user=[{
	id:"1",
	name:"Phương Đại Ka",
	image: require("../assets/images/avatar.jpg"),
	wallet:"150.000"

}]

const listProducts = [
	{
		id: 1,
		name: 'Chinese Fresh Cabbage',
		type: 1,
		pricePerKg: '$5.66',
	},
	{
		id: 2,
		name: 'Fresh Red Tomato',
		type: 1,
		pricePerKg: '$5.66',
	},
	{
		id: 3,
		name: 'Purple Sweet Potato',
		type: 2,
		pricePerKg: '$5.66',
	},
	{
		id: 4,
		name: 'Green Beans',
		type: 2,
		pricePerKg: '$5.66',
	},
	{
		id: 5,
		name: 'Fresh Broccoli',
		type: 1,
		pricePerKg: '$5.66',
	},
	{
		id: 6,
		name: 'Potato',
		type: 3,
		pricePerKg: '$5.66',
	},
];


export const categories = [
	{
		id: "01",
		category: "Sky 9",
	},
	{
		id: "02",
		category: "VinHome",
	},
	{
		id: "03",
		category: "Grand Park"
	},
	{
		id: "04",
		category: "Home Meal"
	}
	, {
		id: "05",
		category: "Manchester"
	}
];

const orderamount = [
	{
		totalamount: '50'
	}
]
const foods = [
	{
		id: '1',
		name: 'Mâm Salad',
		ingredients: 'Mixed Pizza',
		quantity:"5",
		price: '30000',
		image: require("../assets/images/tuna.png"),
	},
	

];
export default foods;
export const session =[
	{
		id: '1',
		sessionname:'Lunch'
	},
	{
		id: '2',
		sessionname:'Dinner'
	}
]


export const recipeList = [
	{
		id: "01",
		name: "Mâm Salad",
		session:"Lunch",
		image: require("../assets/images/pizza.png"),
		rating: "4.2",
		price: "2 point",
		area: "sky9",
		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "02",
		name: "Mâm Phô Mai",
		image: require("../assets/images/pizza.png"),
		rating: "3.6",
		price: "2 point",
		area: "Home Meal",
		session:"Dinner",
		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]
	},
	{
		id: "03",
		name: "Hot Dog Xúc Xích",
		image: require("../assets/images/hotdog.png"),
		rating: "4.6",
		price: "2 point",
		area: "sky9",
		session:"Lunch",

		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "04",
		name: "Mâm Gà",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		price: "2 point",
		area: "Grand Park",
		session:"Lunch",

		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "05",
		name: "Mâm gà luộc",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		price: "2 point",
		area: "Grand Park",
		session:"Dinner",

		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]

	},
	{
		id: "06",
		name: "Mâm Cakes",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		price: "2 point",
		area: "sky9",
		session:"Lunch",

		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]
	},
	{
		id: "07",
		name: "Lẩu Nướng",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		price: "2 point",
		area: "sky9",
		session:"Dinner",
		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]
	},
	{
		id: "08",
		name: "Mì Ramen Hảo Hảo",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		price: "2 point",
		area: "sky9",
		session:"Dinner",
		dishes: [
			{
			   id: 1,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 2,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
			{
			   id: 3,
			   name: 'pizza',
			   description: 'cheezy garlic pizza',
			   price: 10,
			   image:  require('../assets/images/pizzaDish.png')
			},
		]
	},

	// getOrderByID()


];

