const router = require('express').Router();
const UserInfo = require('../models/user.model');



//ALL USERS DATA
router.route('/').get((req, res) => {
  UserInfo.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


// GET DATA FOR EACH USER
router.route('/:id').get((req, res) => {
  UserInfo.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});


//REGISTER USERS
router.route('/register').post(async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password =req.body.password;

  const user = await UserInfo.findOne({username:username});
  const useremail = await UserInfo.findOne({email:email});
  if(user || useremail)
  {
    res.json("fail");
  }
  else
  {
    const newUser = new UserInfo({
      username,
      email,
      password,
    });
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.json("error"));
  }

});


//LOGIN USER
router.route('/login').post(async (req, res) => {
  const username = req.body.username;
  const password =req.body.password;
  
const user = await UserInfo.findOne({username:username});

  if(user)
  {
    if(password==user.password)
    {
      console.log("success");
      res.status(200).json(user); // 200 means success status
    }
    else{
      console.log("fail");
      res.json("fail");
    }
  }
  else
  {
    res.json("fail");
  }
 
});

module.exports = router;