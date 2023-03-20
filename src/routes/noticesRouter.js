const express = require("express");
const { noticeController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.get("/user", authMiddleware, noticeController.getUserNotices);
router.get("/selected", authMiddleware, noticeController.getSelected);
router.get("/title", noticeController.searchByTitle);
router.get("/category", noticeController.getNoticesByCategory);
router.get("/:noticeId", noticeController.getNotice);
router.post("/user", authMiddleware, noticeController.addUserNotice);
router.post(
  "/selected/:noticeId",
  authMiddleware,
  noticeController.addSelected
);
router.delete(
  "/selected/:noticeId",
  authMiddleware,
  noticeController.deleteSelected
);
router.delete(
  "/user/:noticeId",
  authMiddleware,
  noticeController.deleteUserNotice
);

module.exports = router;
