const express = require("express");
const router = express.Router();

const { skillGap } = require("../controllers/skillGapController");
const { roadmap } = require("../controllers/roadmapController");
const { getTopNews } = require("../utils/hackerNews");

router.post("/skill-gap", skillGap);
router.post("/roadmap", roadmap);

router.get("/news", async (req, res) => {
  try {
    const news = await getTopNews();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = router;
