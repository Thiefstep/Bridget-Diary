const { Router } = require("express");

const diaryController = require("../controllers/diary");
const diaryRouters = Router();

diaryRouters.get("/diary", diaryController.index);
diaryRouters.get("/diary/:id", diaryController.show);
diaryRouter.post("/", diaryController.create);
diaryRouter.patch("diary/:id", diaryController.update);
diaryRouter.delete("diary/:id", diaryController.destroy);

module.exports = diaryRouters;
