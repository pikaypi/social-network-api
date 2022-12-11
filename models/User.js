const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            require: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })
    .set(function () {
        return this.friends.length;
    })

const User = model('user', userSchema);

module.exports = User;