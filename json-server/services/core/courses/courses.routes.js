// REWRITE EXAMPLE
const express = require('express');
const jsonServer = require('json-server');
const router = express.Router();

router.use(jsonServer.rewriter({
	'/courses': '/courses',
	'/courses/:id': '/courses/:id',
	'/newCourse': '/newCourse',
}));

module.exports = router;
