const express = require('express');
const router = express.Router();
const LeaveApplication = require('../models/LeaveApplication');

router.post('/apply-leave', async (req, res) => {
    const { user_id, leave_type, leave_date, remark } = req.body;
    const leave = await LeaveApplication.create({ user_id, leave_type, leave_date, remark });
    res.json(leave);
});

router.get('/leave-status/:user_id', async (req, res) => {
    const leaves = await LeaveApplication.findAll({ where: { user_id: req.params.user_id } });
    res.json(leaves);
});

module.exports = router;
