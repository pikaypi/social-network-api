const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.status(200).json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // Create new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => User.findOneAndUpdate(
                { username: thought.username },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            ))
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.status(200).json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Get a single thought
    getThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then(async (thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.status(200).json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Update a single thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.status(200).json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a single thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.status(200).json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }
}