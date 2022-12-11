const router = require('express').Router();
const {
    getThoughts,
    createThought
} = require('../../controllers/thoughtControllers');

// enpoint: /api/thoughts
router.route('/').get(getThoughts).post(createThought);

module.exports = router;