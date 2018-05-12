var express = require('express');
var router = express.Router();
var sectionService = require("../services/section.service");
var helperService = require("../services/helper.service");


router.post("/", (req, res) => {
    sectionService.saveSection(req, (err, data) => {
        helperService.createResponse(req, res, err, data);
    })
});

router.get("/:id", (req, res) => {
    sectionService.getSectionById(req, (err, data) => {
        helperService.createResponse(req, res, err, data);
    })
});
  
module.exports.section = router;