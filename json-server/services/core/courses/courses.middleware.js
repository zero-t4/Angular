const lodash = require('lodash');
const { get, toLower } = lodash;
const express = require('express');
const router = express.Router();
const url = require('url');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(__dirname + '/courses.db.json');
const db = low(adapter);

module.exports = server => {
  router.get('/courses', (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true);
    let query = get(url_parts, 'query', {});

    let from = get(query, 'start', 0);
    let to = Number(query.start) + Number(query.count);

    let textFragment = get(query, 'textFragment', null);

    let sort = query.sort;
    let queryStr = query.query;
    let courses = db.get('courses');
    if (textFragment) {
      courses = courses.filter(course =>
        toLower(course.name.concat(course.description)).includes(
          toLower(textFragment),
        ),
      );
    }

    if (courses.length < to || !to) {
      to = courses.length;
    }
    courses = courses.slice(from, to);

    res.json(courses);
  });

  router.post('/newCourse', (req, res, next) => {
    const newCourse = get(req, 'params', {});
    console.log(newCourse);
    const isParamsValid = [
      'id',
      'name',
      'description',
      'isTopRated',
      'date',
      'authors',
      'length',
    ].every(param => param in newCourse);

    if (isParamsValid) {
      db.get('courses')
        .push(newCourse)
        .write();
      res.status(200).jsonp({
        status: 'ok',
      })
    } else {
      res.status(501).jsonp({
        error: 'sent params is not valid',
        params: JSON.stringify(newCourse),
      })
    }

  });

  return router;
};
