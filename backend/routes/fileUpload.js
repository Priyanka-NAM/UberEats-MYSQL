const express = require("express");
const path = require("path");
const jimp = require("jimp");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();
console.log(
  "Dest file path: ",
  path.join(path.join(__dirname, ".."), "public")
  // path.join(path.join(__dirname, ".."), "public", "uploads")
);

const userstorage = multer.diskStorage({
  destination: path.join(path.join(__dirname, ".."), "public"),
  filename: (req, file, cb) => {
    cb(
      null,
      `user${req.params.user_id}-${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});

const useruploads = multer({
  storage: userstorage,
  limits: { fileSize: 100000000 },
}).single("image");

router.post("/profile_upload", (req, res) => {
  useruploads(req, res, (err) => {
    console.log("request of the ", req.file);
    if (!err) {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(req.file.filename);
    } else {
      console.log("Error!");
    }
  });
});

// router.post("/profile_upload", async (req, res) => {
//   // console.log(req);
//   const imageFile = req.files.file;
//   const filename = "cust_1";
//   jimp
//     .read(imageFile.data)
//     .then((img) => {
//       img
//         .resize(256, 128) // resize
//         .write(path.join(path.resolve("./"), "public", `${filename}.jpg`));
//       return res.json({ file: `public/${filename}.jpg` });
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).send(err);
//     });
// });

module.exports = router;
