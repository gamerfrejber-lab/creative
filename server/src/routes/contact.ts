import { Router } from "express";
import { body } from "express-validator";
import { submitContact, getContacts } from "../controllers/contactController";
import auth from "../middleware/auth";

const router = Router();

router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").trim().notEmpty().withMessage("Message is required"),
  ],
  submitContact
);

router.get("/", auth, getContacts);

export default router;
