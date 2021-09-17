const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

router.get("/restaurantsearch/:search_input", (req, res) => {
  console.log("Search input: ", req.params.search_input);
  const restaurantList = {
    restaurants: [
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "vegan",
      },
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "vegan",
      },
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "veg",
      },
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "vegan",
      },
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "nonveg",
      },
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "nonveg",
      },
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "veg",
      },
      {
        title: "Apna Bazar",
        imageurl:
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw==",
        address: "246 Drivers dr",
        description: "Unique ac, led by a world of hosts.",
        location: "sunnyvale",
        delivery: "True",
        foodtype: "nonveg",
      },
    ],
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

module.exports = router;
