// 'use strict';

// const express = require('express');
// const router = express.Router();
// const models = require('./../db/models');
// const Students = models.Students

// router.get('/', function (req, res, next) {
//   Students.findAll()
//   .then(campus => res.json(campus))
//   .catch(next);
// });
// router.get('/:id', function (req, res, next) {
//   const studentId = req.params.id
//   Students.findAll({
//     where: {
//       id: studentId
//     }
//   })
//   .then(student => res.json(student))
//   .catch(next);
// })
// router.post('/', function (req, res, next) {
//   Students.create(req.body)
//   .then(student => res.status(201).json(student))
//   .catch(next);
// });

// router.put('/:id', function (req, res, next) {
//   const studentId = req.params.id
//   Students.update(req.body, {
//     where: {
//       id: studentId
//     }
//   })
//   .then(campus => res.json(campus))
//   .catch(next)
// })
// router.delete('/:id', function (req, res, next) {
//   const studentId = req.params.id
//   Students.destroy({
//       where: {
//           id: studentId
//       }
//   })
//   .then(() => res.status(204).end())
//   .catch(next)
// });

const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Students = models.Students;
module.exports = router;

router.get('/', function (req, res, next) {
  Students.findAll({ where: req.query })
  .then(student => res.json(student))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Students.create({name: req.body.name.inputName, email: req.body.name.inputEmail})
  .then(student => res.status(201).json(student))
  .catch(next);
});

router.param('studentId', function (req, res, next, id) {
  Students.findById(id)
  .then(student => {
    if (!student) {
      const err = Error('Student not found');
      err.status = 404;
      throw err
    }
    req.student = student;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

router.get('/:studentId', function (req, res) {
  res.json(req.student);
});

router.put('/:studentId', function (req, res, next) {
  req.student.update(req.body)
  .then(campus => res.status(200).json(campus))
  .catch(next);
});

router.delete('/:studentId', function (req, res, next) {
  req.student.destroy()
  .then(() => res.status(204).end())
  .catch(next);
})
module.exports = router
