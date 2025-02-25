const express = require("express");
const router = express.Router();
const ensureAuthenticated = require('../Middlewares/Auth.js');


router.get("/", ensureAuthenticated, (req, res) => {
    console.log('---- logged in user : ',req.user);
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "laptop",
      price: 55000,
    },
  ])
});

module.exports = router;