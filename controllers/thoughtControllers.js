const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.status(200).json(thoughts))
            .catch((err) =>  res.status(500).json(err));
    },
    // Create new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err));
    }
}