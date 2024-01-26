// Initialize express router
// we dont need to use app.get, app.post, app.put, app.delete
const router = require("express").Router();

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


// Export API routes
module.exports = router;
