const router = require("express").Router();
const Movie = require("../models/movieModel");
const authMiddleware = require("../middleware/authMiddleware");
const Theatre = require("../models/theatreModel");

// add theatre
router.post("/add-theatre", authMiddleware, async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "Theatre added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});




 // get all theatres by owner
 router.post("/get-all-theatres-by-owner", authMiddleware, async (req, res) => {
    try {
      const theatres = await Theatre.find({ owner: req.body.owner })
      res.send({
        success: true,
        message: "Theatres fetched successfully",
        data: theatres,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

// update a theatre
  router.post("/update-theatre", authMiddleware, async (req, res) => {
    try {
      await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
      res.send({
        success: true,
        message: "Theatre updated successfully",
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

  // delete a theatre
router.post("/delete-theatre", authMiddleware, async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.body.theatreId);
    res.send({
      success: true,
      message: "Theatre deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});



module.exports = router;
