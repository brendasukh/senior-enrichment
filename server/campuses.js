'use strict';

const express = require('express');
const router = express.Router();
const models = require('./../db/models');
const Campuses = models.Campuses

router.get('/', function (req, res, next) {
  Campuses.findAll()
  .then(campus => res.json(campus))
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  const campusId = req.params.id
  Campuses.findAll({
    where: {
      id: campusId
    }
  })
  .then(campus => res.json(campus))
  .catch(next);
})
// router.param('albumId', function (req, res, next, id) {
//   Album.scope('defaultScope', 'populated').findById(id)
//   .then(function (album) {
//     if (!album) {
//       const err = Error('Album not found');
//       err.status = 404;
//       throw err
//     }
//     req.album = album;
//     next();
//     return null; // silences bluebird warning about promises inside of next
//   })
//   .catch(next);
// });

// router.get('/:albumId', function (req, res) {
//   res.json(req.album);
// });

// router.get('/:albumId/image', function (req, res, next) {
//   res.redirect(`/api/songs/${req.album.songs[0].id}/image`)
// });

// router.get('/:albumId/songs/', function (req, res) {
//   res.json(req.album.songs);
// });

// router.get('/:albumId/songs/:songId', function (req, res) {
//   const songToSend = req.album.songs.find(song => {
//     return song.id === Number(req.params.songId);
//   });
//   if (!songToSend) return res.sendStatus(404);
//   res.json(songToSend);
// });

module.exports = router