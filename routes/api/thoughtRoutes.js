const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtControllers');

// enpoint: /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// enpoint: /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

// enpoint /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;