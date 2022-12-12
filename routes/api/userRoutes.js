const router = require('express').Router();
const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('../../controllers/userControllers');

// endpoint: /api/users
router.route('/').get(getUsers).post(createUser);

// endpoint /api/users/:userId
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;