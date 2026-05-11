import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error when call all tasks", error);
    res.status(500).json({ message: "System error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error when create task", error);
    res.status(500).json({ message: "System error" });
  }
};

export const updateTask = async (req, res) => {
  const { title, status, completedAt } = req.body;

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id, // find id to update
    {
      title,
      status,
      completedAt,
    },
    { new: true }, // if dont have this line, res will return value before update
  );

  if (!updatedTask) {
    // if task not exist, return error
    return res.status(400).json({ message: "Task not exist" });
  }
  res.status(200).json(updatedTask);
  try {
  } catch (error) {
    console.error("Error when update task", error);
    res.status(500).json({ message: "System error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(400).json({ message: "Task not exist" });
    }
    res.status(200).json(deleteTask);
  } catch (error) {
    console.error("Error when delete task", error);
    res.status(500).json({ message: "System error" });
  }
};
