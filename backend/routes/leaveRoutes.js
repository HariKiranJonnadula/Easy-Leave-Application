const express = require('express');
const LeaveApplication = require('../database/models/LeaveApplication');
const User = require('../database/models/User');
const router = express.Router();

// Submit Leave Application
router.post('/apply', async (req, res) => {
    const { user_id, leave_type, leave_date, remark } = req.body;

    try {
        const leave = await LeaveApplication.create({ user_id, leave_type, leave_date, remark });
        res.status(201).json({ message: 'Leave application submitted', leave });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting leave', error: err });
    }
});

// Get Leave Applications for Admin
router.get('/admin/leaves', async (req, res) => {
    try {
        const leaves = await LeaveApplication.findAll({ include: [User] });
        res.json(leaves);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching leaves', error: err });
    }
});

// Update Leave Status by Admin
router.put('/admin/leave/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const leave = await LeaveApplication.findByPk(id);
        if (!leave) return res.status(404).json({ message: 'Leave not found' });

        leave.status = status;
        await leave.save();

        res.json({ message: 'Leave status updated', leave });
    } catch (err) {
        res.status(500).json({ message: 'Error updating leave status', error: err });
    }
});

module.exports = router;
