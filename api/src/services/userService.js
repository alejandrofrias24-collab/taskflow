const User =
require("../models/user");

const getUsers =
async () => {

 return await User.findAll({
  attributes:{
   exclude:["password"]
  }
 });

};

module.exports = {
 getUsers
};