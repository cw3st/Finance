const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  emailAddress: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  },
  ssn: {
    type: String
  },
  tin: {
    type: String
  },
  username: {
    type: String
  },
  password:{
    type: String
  },
  confirmPassword:{
    type: String
  }
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;