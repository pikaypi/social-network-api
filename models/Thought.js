const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Schema.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280
    },
    username: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        require: true
    },
    reactions: [reactionSchema]
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;