const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;