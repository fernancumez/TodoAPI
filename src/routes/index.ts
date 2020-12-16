import { Router } from "express";
import {
  getTodo,
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router: Router = Router();

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;
