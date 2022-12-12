const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtControllers');

// enpoint: /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// enpoint: /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

module.exports = router;