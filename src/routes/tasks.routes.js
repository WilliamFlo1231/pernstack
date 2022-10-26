const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    console.log(result);
    res.json('executed');
})

router.get('/tasks/10', (req, res) => {
    res.send('retrieving a task');
})

router.post('/tasks', (req, res) => {
    res.send('creating a task');
})

router.delete('/tasks', (req, res) => {
    res.send('deleting a task');
})

router.put('/tasks', (req, res) => {
    res.send('updating a task');
})

module.exports = router;