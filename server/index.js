'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
module.exports = router;

router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));
// router.use('/campuses/:id', require('./singleCampus'))
// router.use('/students/:id', require('./singleStudent'))

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});