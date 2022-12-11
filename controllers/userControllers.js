const { Thought, User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Create new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .then(async (user) => 
                !user
                    ? res.status(404).json({ message: 'No user with that ID'})
                    : res.status(200).json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a single user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user with that ID'})
                    : Thought.deleteMany({ username: user.username })
            )
            .then((thoughts) => 
                !thoughts
                    ? res.status(200).json({ message: 'User deleted but there were no thoughts to delete' })
                    : res.status(200).json({ message: 'User and all user thoughts have been deleted' })
            )
            .catch((err) => res.status(500).json(err));
    }
};