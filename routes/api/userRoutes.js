const router = require('express').Router();
const {
    getUsers,
    createUser,
    getUser
} = require('../../controllers/userControllers');

// endpoint: /api/users
router.route('/').get(getUsers).post(createUser);

// endpoint /api/users/:userId
router.route('/:userId').get(getUser);

module.exports = router;