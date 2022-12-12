const router = require('express').Router();
const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userControllers');

// endpoint: /api/users
router.route('/').get(getUsers).post(createUser);

// endpoint /api/users/:userId
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

// endpoint /api/user/:userID/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;