import {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "./user.controller";
import { Router } from "express";

export const router = Router();

router.post("/", createUser);

router.get("/", getUsers);

router.get("/:id", getOneUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);
