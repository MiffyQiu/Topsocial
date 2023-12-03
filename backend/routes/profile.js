const express = require('express');
const profileRouter = express.Router();
const axios = require('axios');
const {getProfile} = require('../controllers/profileControllers');

profileRouter.get('/',getProfile);
module.exports = profileRouter;