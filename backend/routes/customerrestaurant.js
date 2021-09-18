const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();
const restoList = [
  {
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
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
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
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
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
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
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
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
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM=",
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
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
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
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM=",
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
    title: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
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
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
    description: "Unique ac, led by a world of hosts.",
    price: "10.99",
    dishType: "Salads",
    dish_id: "1",
  },
  {
    name: "Noodles",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
    description: "Unique ac, led by a world of hosts.",
    price: "15.99",
    dishType: "Main course",
    dish_id: "2",
  },
  {
    name: "Salsa",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
    description: "Unique ac, led by a world of hosts.",
    price: "120.99",
    dishType: "Appetizers",
    dish_id: "3",
  },
  {
    name: "Chicken Bowl",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
    description: "Unique ac, led by a world of hosts.",
    price: "70.99",
    dishType: "Bowl",
    dish_id: "4",
  },
  {
    name: "Coke",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM=",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    price: "10.99",
    dishType: "Drinks",
    dish_id: "5",
  },
  {
    name: "Bigger Plate",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
    description: "Unique ac, led by a world of hosts.",
    price: "60.99",
    dishType: "Bigger Plate",
    dish_id: "6",
  },
  {
    name: "Biriyani",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
    description: "Unique ac, led by a world of hosts.",
    price: "60.99",
    dishType: "Bigger Plate",
    dish_id: "9",
  },
  {
    name: "Wine",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM=",
    description: "Unique ac, led by a world of hosts.",
    price: "100.99",
    dishType: "Drinks",
    dish_id: "7",
  },
  {
    name: "Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",

    description: "Unique ac, led by a world of hosts.",
    price: "10.99",
    dishType: "Family Meal",
    dish_id: "8",
  },
  {
    name: "Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",

    description: "Unique ac, led by a world of hosts.",
    price: "10.99",
    dishType: "Family Meal",
    dish_id: "10",
  },
  {
    name: "Apna Bazar",
    imageurl:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
    description: "Unique ac, led by a world of hosts.",
    price: "6.9",
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
