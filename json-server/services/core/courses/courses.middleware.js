const lodash = require('lodash');
const { get, toLower, omit } = lodash;
const express = require('express');
const router = express.Router();
const url = require('url');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(__dirname + '/courses.db.json');
const db = low(adapter);

const mapDataFromFrontendToBackendModel = data => {
  return {
    id: data.id,
    name: data.title,
    description: data.description,
    date: data.creationDate,
    length: data.duration,

    // TODO isTopRated: data.isTopRated,
    // TODO authors: data.authors,
  };
};

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
    const newCourse = mapDataFromFrontendToBackendModel(
      JSON.parse(get(req, 'body.params', {})),
    );
    const isParamsValid = [
      'id',
      'name',
      'description',
      'date',
      // TODO uncomment later 'isTopRated',
      // TODO uncomment later 'authors',
      'length',
    ].every(param => param in newCourse);

    if (isParamsValid) {
      const courses = get(db.getState(), 'courses');
      const id = courses.length;

      db.get('courses')
        .push({
          ...omit(newCourse, 'id'),
          id,
          isTopRated: false,
          authors: [{
            "id": 1,
            "firstName": "Nariko",
            "lastName": "Curgenven"
          }],
        })
        .write();

      res.status(200).jsonp({
        status: 'ok',
      });
    } else {
      res.status(501).jsonp({
        error: 'sent params is not valid',
        params: JSON.stringify(newCourse),
      });
    }
  });

  router.post('/removeCourse', (req, res, next) => {
    const courseId = get(req, 'body.params.id');

    if (courseId) {
      db.get('courses')
        .remove({ id: courseId })
        .write();

      res.status(200).jsonp({
        status: 'ok',
      });
    } else {
      res.status(501).jsonp({
        error: 'sent id is not valid',
        params: JSON.stringify(courseId),
      });
    }
  });

  router.post('/updateCourse', (req, res, next) => {
    const courseId = get(req, 'body.params.id');
    const courseData = get(req, 'body.params.data', {});

    if (courseId) {
      db.get('courses')
        .find({ id: courseId })
        .assign({ ...courseData })
        .write();

      res.status(200).jsonp({
        status: 'ok',
      });
    } else {
      res.status(501).jsonp({
        error: 'sent id is not valid',
        params: JSON.stringify(courseId),
      });
    }
  });

  return router;
};
