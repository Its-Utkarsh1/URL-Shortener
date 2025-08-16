const express = require("express");
const {handleGenerateNewShortURL, handleGenerateAnalytics} = require("../contorllers/url");
const router =express.Router();

router.post("/",handleGenerateNewShortURL);


router.get('/analytics/:shortId',handleGenerateAnalytics)

module.exports = router;

