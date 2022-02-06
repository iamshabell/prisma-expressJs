import {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
  getAddresses,
  createAddress,
  updateAuthor,
} from "./user.controller";
import { Router } from "express";

export const router = Router();

router.post("/", createUser);

router.post("/address", createAddress);

router.get("/address", getAddresses);

router.get("/", getUsers);

router.get("/:id", getOneUser);

router.put("/:id", updateUser);

router.put("/authors/:id", updateAuthor);

router.delete("/:id", deleteUser);
