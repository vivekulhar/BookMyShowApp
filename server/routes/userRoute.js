// Initialize express router
// we dont need to use app.get, app.post, app.put, app.delete
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// Set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});

// Create new user
router.post("/register", async (req, res) => {
  try {
    // check if email already exists
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;



    // create new user
    const newUser = new User(req.body);
    await newUser.save();

    res.send({
        success: true,
        message: "User created successfully",
        user: newUser,
        });
  } catch (err) {
    console.log(err);
  }
});

// login routes
router.post('/login', async (req, res)=>{
    const user = await User.findOne({email: req.body.email})
    // check if user exists
    if(!user){
        return res.send({
            success: false,
            message: 'User does not exist'
        })
    }
    // check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword){
        return res.send({
            success: false,
            message: 'Email or password is incorrect'
        })
    }
    // send response
    res.send({
        success: true,
        message: 'Login successful',
        user: user
    })
})


// Export API routes
module.exports = router;
