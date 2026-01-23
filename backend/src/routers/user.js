import { Router } from "express";
import userController from "../controllers/userController.js";
import middlewareController from "../controllers/middlewareController.js";

const router = Router();

// =========================================================
// ADMIN ENDPOINTS
// =========================================================
router.get(
  "/",
  middlewareController.verifyTokenAndAdminAuth,
  userController.getAllUsers
);
router.post(
  "/",
  middlewareController.verifyTokenAndAdminAuth,
  userController.createUser
);
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

// =========================================================
// SELF ENDPOINTS
// =========================================================
router.get(
  "/me",
  middlewareController.verifySelfAuth,
  userController.getMe
);
router.post(
  "/me",
  middlewareController.verifySelfAuth,
  userController.updateMe
);

// =========================================================
// PUBLIC ENDPOINTS
// =========================================================
router.get("/ranking", userController.getRanking);
router.get("/:id", userController.getUserById);

export default router;