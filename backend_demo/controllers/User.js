const db = require("../database/index");
const bycrpt = require("bcryptjs");
const User = db.user;


class Authcontroller {

    //create User

     async CreateUser(req, res){
     const salt = await bycrpt.genSalt(10);
     
     const hash = await bycrpt.hash(req.body.password, salt);

        try {
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password:hash
              })
              const savedUser = await user.save();
              
             res.status(200).json(savedUser); 
        } catch (error) {
           console.log(error); 
        }

    }

    //find users
    async findUsers(req,res) {
      try {
        const users = await User.findAll();
        res.status(200).json(users);
      } catch (error) {
        console.log(error);
      }
    }
  //finding one User 
   async findOneUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      res.status(200).json(user);  
    } catch (error) {
       console.log(error); 
    }
  }

}

module.exports = new Authcontroller();

