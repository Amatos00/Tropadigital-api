import express from "express";
import UserController from "./controllers/UserController";
import AdressController from "./controllers/AdressController";

const router = express.Router();

router.post("/users", UserController.create);
router.get("/users", UserController.findAll);
router.put("/users/:id", UserController.findOne);
router.delete("/users/:id", UserController.destroy);

router.post("/adress", AdressController.create);
router.get("/adress", AdressController.findAll);
router.put("/adress/:id", AdressController.findOne);
router.delete("/adress/:id", AdressController.destroy);

export { router };
