import React, { useState } from 'react';
import api from '../services/api';

const EmployeePage = () => {
    const [leaveType, setLeaveType] = useState('');
    const [leaveDate, setLeaveDate] = useState('');
    const [remark, setRemark] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user_id = 1; // Replace with actual user ID from token
            await api.post('/leaves/apply', {
                user_id,
                leave_type: leaveType,
                leave_date: leaveDate,
                remark,
            });
            setMessage('Leave application submitted successfully.');
        } catch (err) {
            setMessage('Error submitting leave application.');
        }
    };

    return (
        <div className="container">
            <h2>Apply for Leave</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                            <option value="">Select Leave Type</option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Casual Leave">Casual Leave</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            value={leaveDate}
                            onChange={(e) => setLeaveDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default EmployeePage;
