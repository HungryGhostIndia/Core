var express = require('express');
var router = express.Router();
var restroService = require("../services/restro.service");
var helperService = require("../services/helper.service");


router.post("/", (req, res) => {
    restroService.saveRestro(req, (err, data) => {
      helperService.createResponse(req, res, err, data);
    })
});
  
module.exports.restro = router;