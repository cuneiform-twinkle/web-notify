const express = require("express");
const {
  getTokensFromDB,
  storeTokenToDB,
} = require('../controllers/token.controller');


const router = express.Router();

// this route is GET /get-tokens
router.get('/', getTokensFromDB);

// this route is POST /store-token
router.post('/', storeTokenToDB);




module.exports=router;