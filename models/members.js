const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

// Defined Schema
const memberSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

// Schema Methods
userSchema.methods = {
    checkPassword = function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Pre-hook to do before saving information
userSchema.pre("save", function(next) {
    if (!this.password) {
        console.log("models/user.js =====NO PASSWORD====")
        next()
    } else {
        console.log('models/user.js hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next()
    }
})

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;