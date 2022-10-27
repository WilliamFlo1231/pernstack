const pool = require('../db');

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await pool.query("SELECT * FROM tasks");
        res.json(allTasks.rows);
    } catch (error) {
        res.json(error.message);
    }
}

const getTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await pool.query("SELECT * FROM tasks WHERE tasks.id = $1", [id]);

        if (task.rows.length === 0) return res.status(404).json({
            message: "task not found"
        })

        res.json(task.rows[0]);
    } catch (error) {
        res.json(error.message);
    }
}

const createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query("INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *", [title, description]);
        console.log(result);
        res.json(result.rows[0]);
    } catch (error) {
        res.json(error.message);
    }
}

const deleteTask = (req, res) => {
    res.send('deleting a task');
}

const updateTask = (req, res) => {
    res.send('updating a task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}