const router = require('express').Router();
const {
    getThoughts
} = require('../../controllers/thoughtControllers');

// enpoint: /api/thoughts
router.route('/').get(getThoughts);

module.exports = router;