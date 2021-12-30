const mongoose = require("mongoose");
const notiSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Notification = mongoose.model("Notifications", notiSchema);
module.exports = Notification;