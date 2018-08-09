const lodash = require('lodash');
const { get, toLower } = lodash;
const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = server => {
  router.get('/courses', (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true);
    let query = get(url_parts, 'query', {});

    let from = get(query, 'start', 0);
    let to = Number(query.start) + Number(query.count);

    let textFragment = get(query, 'textFragment', null);

    let sort = query.sort;
    let queryStr = query.query;

    let courses = server.db.getState().courses;

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

  return router;
};
