import { Response, Request } from "express";
import { ITodo } from "../types/todo";
import Todo from "../models/todo.models";

// Find todo
const getTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const todoId = req.params.id;

    // Sentence to search the item in the database
    const todo = await Todo.findById(todoId);

    // If the resource does not exisit
    if (!todo) return res.status(404).json({ error: "Resource not found" });

    // If the resource exist
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Get all todos
const getTodos = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Sentence to search all the item in the database
    const todos: ITodo[] = await Todo.find();

    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Create new todo
const addTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, description, status } = req.body as Pick<
      ITodo,
      "name" | "description" | "status"
    >;

    const body = { name, description, status };
    const todo: ITodo = new Todo(body);

    // Save the new item
    const newTodo: ITodo = await todo.save();

    return res.status(201).json({ message: "Todo added", todo: newTodo });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Update todo
const updateTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const todoId = req.params.id;

    // Sentence to update the todo
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      todoId,
      req.body
    );

    // If the resource does not exisit
    if (!updateTodo)
      return res.status(404).json({ error: "Resource not found" });

    // If the resource exist
    const todoUpdated: ITodo | null = await Todo.findById(todoId);

    return res.status(200).json({
      message: "Todo Updated",
      todo: todoUpdated,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Delete todo
const deleteTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const todoId = req.params.id;

    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(todoId);

    return res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { getTodo, getTodos, addTodo, updateTodo, deleteTodo };
