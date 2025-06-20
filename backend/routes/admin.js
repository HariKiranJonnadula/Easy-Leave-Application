const express = require('express');
const router = express.Router();
const LeaveApplication = require('../models/LeaveApplication');

router.get('/all-leaves', async (req, res) => {
    const leaves = await LeaveApplication.findAll();
    res.json(leaves);
});

router.put('/update-leave/:id', async (req, res) => {
    const { status } = req.body;
    const leave = await LeaveApplication.findByPk(req.params.id);
    if (leave) {
        leave.status = status;
        await leave.save();
        res.json(leave);
    } else {
        res.status(404).json({ error: 'Leave not found' });
    }
});

module.exports = router;
