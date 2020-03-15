var express = require('express');
var db = require('../model/db_wedding');
var wedding_router = express.Router();

wedding_router.route('/all')
  .get(function(req, res) {
    db.list().then(function(data) {
      res.status(200).send(data);
    }).catch(function(err) {
      res.status(404).send({});
    })
  })

wedding_router.route('/:id')
  .get(function(req, res) {
    db.listone(req.params.id).then(function(data) {
      res.status(201).send(data);
    }).catch(function(err) {
      res.status(400).send({});
    })
  })
  .put(function(req, res) {
    db.confirm(req.params.id).then(function(data) {
      res.status(201).send(data);
    }).catch(function(err) {
      res.status(400).send({});
    })
  })

module.exports = wedding_router;
