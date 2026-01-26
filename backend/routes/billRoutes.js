const express = require("express");
const multer = require("multer");
const { scanBillController } = require("../controllers/billController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Store file in RAM (not disk)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

router.post("/scan", upload.single("bill"), scanBillController);

module.exports = router;