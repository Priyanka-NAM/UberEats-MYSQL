const express = require("express");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const db = require("../dbPoolConnection");

const router = express.Router();
const restoList = [
  {
    title: "Apna Bazar",
    imageurl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3800&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "both",
    foodtype: "vegan",
    isFavorite: "true",
    isNationalBrand: "true",
    restaurant_id: "1",
  },
  {
    title: "Mc Donalds",
    imageurl:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "delivery",
    foodtype: "vegan",
    isFavorite: "false",
    isNationalBrand: "false",
    restaurant_id: "2",
  },
  {
    title: "Pizza Hut",
    imageurl:
      "https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "delivery",
    foodtype: "veg",
    isFavorite: "true",
    isNationalBrand: "true",
    restaurant_id: "3",
  },
  {
    title: "Grill House",
    imageurl:
      "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "both",
    foodtype: "vegan",
    isFavorite: "false",
    isNationalBrand: "true",
    restaurant_id: "4",
  },
  {
    title: "Texas BBQ",
    imageurl:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "both",
    foodtype: "nonveg",
    isFavorite: "true",
    isNationalBrand: "false",
    restaurant_id: "5",
  },
  {
    title: "Cakes and Bakes",
    imageurl:
      "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "delivery",
    foodtype: "nonveg",
    isFavorite: "false",
    isNationalBrand: "true",
    restaurant_id: "6",
  },
  {
    title: "Paradise",
    imageurl:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "both",
    foodtype: "veg",
    isFavorite: "true",
    isNationalBrand: "false",
    restaurant_id: "7",
  },
  {
    title: "StarBird",
    imageurl:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    address: "246 ",
    description: "Unique ac, led by a world of hosts.",
    location: "sunnyvale",
    deliveryType: "pickup",
    foodtype: "nonveg",
    isFavorite: "false",
    isNationalBrand: "true",
    restaurant_id: "8",
  },
];

const dishesList = [
  {
    name: "Fried Rice",
    imageurl:
      "https://images.unsplash.com/photo-1519624213695-6819a985fb0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 10.99,
    dishType: "Salads",
    dish_id: "1",
  },
  {
    name: "Noodles",
    imageurl:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 15.99,
    dishType: "Main course",
    dish_id: "2",
  },
  {
    name: "Salsa",
    imageurl:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 120.99,
    dishType: "Appetizers",
    dish_id: "3",
  },
  {
    name: "Chicken Bowl",
    imageurl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 70.99,
    dishType: "Bowl",
    dish_id: "4",
  },
  {
    name: "Coke",
    imageurl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    price: 10.99,
    dishType: "Drinks",
    dish_id: "5",
  },
  {
    name: "Bigger Plate",
    imageurl:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 60.99,
    dishType: "Bigger Plate",
    dish_id: "6",
  },
  {
    name: "Biriyani",
    imageurl:
      "https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 60.9,
    dishType: "Bigger Plate",
    dish_id: "9",
  },
  {
    name: "Wine",
    imageurl:
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 100.99,
    dishType: "Drinks",
    dish_id: "7",
  },
  {
    name: "Bazar",
    imageurl:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",

    description: "Unique ac, led by a world of hosts.",
    price: 10.99,
    dishType: "Family Meal",
    dish_id: "8",
  },
  {
    name: "Bazar",
    imageurl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",

    description: "Unique ac, led by a world of hosts.",
    price: 10.99,
    dishType: "Family Meal",
    dish_id: "10",
  },
  {
    name: "Apna Bazar",
    imageurl:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 6.9,
    dishType: "Kid's Meal",
    dish_id: "11",
  },
];
router.get("/restaurantsearch/:search_input", (req, res) => {
  console.log("Search input: ", req.params.search_input);
  const restaurantList = {
    restaurants: restoList,
  };

  if (req.params.search_input === "_") {
    res.send({
      status: "Sending All Restaurants",
      restaurentsinfo: restaurantList,
    });
  } else {
    res.send({
      status: "Sending Filtered Resaturants",
      restaurentsinfo: restaurantList,
    });
  }
});

// router.get("/restaurantsearch/:search_input", (req, res) => {
//   console.log("Search input: ", req.params.search_input);
//   const sql = `CALL get_all_restaurants();`;
//   console.log("Get All restaurants SQL ", sql);

//   db.query(sql, (err, result) => {
//     if (err) {
//       res.writeHead(500, {
//         "Content-Type": "text/plain",
//       });
//       res.end("Error in Db");
//     }
//     if (result && result.length > 0 && result[0][0]) {
//       const concatAddress = (item) =>
//         "".concat(
//           item.restaurant_address_line_one,
//           ",",
//           item.restaurant_city,
//           ",",
//           item.restaurant_state,
//           ",",
//           item.restaurant_country,
//           ",",
//           item.restaurant_zipcode
//         );
//       let allRestaurnats = result[0];
//       allRestaurnats = allRestaurnats.map((item) => {
//         const foodType = {
//           ContainsNonVegeterian: item.is_non_vegeterian,
//           ContainsVegeterian: item.is_vegeterian,
//           ContainsVegan: item.is_vegan,
//         };

//         return {
//           title: item.name,
//           imageurl: item.image_file_path,
//           description: item.description,
//           deliveryType: item.delivery_type,
//           isNationalBrand: item.national_brand,
//           restaurant_id: item.restaurant_id,
//           restaurantAddressDescription: concatAddress(item),
//           restaurantAddressLineOne: item.restaurant_address_line_one,
//           restaurantCity: item.restaurant_city,
//           restaurantState: item.restaurant_state,
//           restaurantCountry: item.restaurant_country,
//           restaurantZipcode: item.restaurant_zipcode,
//           foodtype: foodType,
//         };
//       });

//       res.send({
//         status: "Sending All Restaurants",
//         restaurentsinfo: allRestaurnats,
//       });
//     }
//   });
// });

router.get("/restaurantdetails/:restaurent_id", (req, res) => {
  const restaurentDetails = restoList.filter(
    (restaurant) => restaurant.restaurant_id === req.params.restaurent_id
  );
  res.send({
    status: "Request Successful",
    restaurentDetails,
  });
});

router.get("/dishdetails/:restaurent_id", (req, res) => {
  res.send({
    status: "Request Successful",
    dishesList,
  });
});

router.get("/restaurantsearch/:search_input", (req, res) => {
  const sql = `CALL restaurant_get('${req.params.search_input}');`;
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error in Data");
    }
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get("/restaurantdetails/:restaurent_id", (req, res) => {
  const restaurentDetails = restoList.filter(
    (restaurant) => restaurant.restaurant_id === req.params.restaurent_id
  );
  res.send({
    status: "Request Successful",
    restaurentDetails,
  });
});

router.get("/dishdetails/:restaurent_id", (req, res) => {
  res.send({
    status: "Request Successful",
    dishesList,
  });
});

module.exports = router;
