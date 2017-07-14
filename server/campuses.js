// 'use strict';

// const express = require('express');
// const router = express.Router();
// const models = require('./../db/models');
// const Campuses = models.Campuses

// router.get('/', function (req, res, next) {
//   Campuses.findAll()
//   .then(campus => res.json(campus))
//   .catch(next);
// });

// router.get('/:id', function (req, res, next) {
//   const campusId = req.params.id
//   Campuses.findAll({
//     where: {
//       id: campusId
//     }
//   })
//   .then(campus => res.json(campus))
//   .catch(next)
// })

// router.post('/', function (req, res, next) {
//   Campuses.create(req.body)
//   .then(campus => res.status(201).json(campus))
//   .catch(next)
// })

// router.put('/:id', function (req, res, next) {
//   const campusId = req.params.id
//   Campuses.update(req.body, {
//     where: {
//       id: campusId
//     }
//   })
//   .then(campus => res.json(campus))
//   .catch(next)
// })

// router.delete('/:id', function (req, res, next) {
//   const campusId = req.params.id
//   Campuses.destroy({
//       where: {
//           id: campusId
//       }
//   })
//   .then(() => res.status(204).end())
//   .catch(next)
// });

const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Campuses = models.Campuses;
module.exports = router;

router.get('/', function (req, res, next) {
  Campuses.findAll({ where: req.query })
  .then(campus => res.json(campus))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Campuses.create({name: req.body.name.inputName, image: req.body.name.inputImage})
  .then(campus => res.status(201).json(campus))
  .catch(next);
});

router.param('campusId', function (req, res, next, id) {
  Campuses.findById(id)
  .then(campus => {
    if (!campus) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err
    }
    req.campus = campus;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

router.get('/:campusId', function (req, res) {
  res.json(req.campus);
});

router.put('/:campusId', function (req, res, next) {
  req.campus.update(req.body)
  .then(campus => res.status(200).json(campus))
  .catch(next);
});

router.delete('/:campusId', function (req, res, next) {
  req.campus.destroy()
  .then(() => res.status(204).end())
  .catch(next);
})