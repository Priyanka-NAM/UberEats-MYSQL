const express = require("express");
const path = require("path");
const jimp = require("jimp");

const router = express.Router();

router.post("/profile_upload", async (req, res) => {
  console.log(req);
  const imageFile = req.files.file;

  const filename = "cust_1";
  // const filename = req.body.filename;
  jimp
    .read(imageFile.data)
    .then((img) => {
      img
        .resize(256, 128) // resize
        .write(path.join(path.resolve("./"), "public", `${filename}.jpg`));
      return res.json({ file: `public/${filename}.jpg` });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send(err);
    });

  // imageFile.mv(
  //   path.join(path.resolve("./"), "public", `${filename}.jpg`),
  //   (err) => {
  //     if (err) {
  //       return res.status(500).send(err);
  //     }
  //     return res.json({ file: `public/${filename}.jpg` });
  //   }
  // );
});

module.exports = router;
