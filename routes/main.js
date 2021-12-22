const express = require('express');
const router = express.Router();
const { getAll, getbyCategory, getbyRating} = require('../controllers/hotel.controllers');

router.route('/').get(getAll)
router.route('/category/:category').get(getbyCategory)
router.route('/raiting/:raiting').get(getbyRating)
router.route('/price/:order').get(getbyRating)

// router.route('/getnames/:count').get(names)
// router.route('/find/:string').get(string)





module.exports = router;