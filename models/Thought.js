const { Schema, model } = require('mongoose');
const { format_date } = require('../utils/helpers');

const reactionSchema = new Schema(
    {
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
            default: Date.now,
            get: v => format_date(v)
        }
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: v => format_date(v)
        },
        username: {
            type: String,
            require: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;