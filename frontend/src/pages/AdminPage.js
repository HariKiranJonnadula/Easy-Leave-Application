import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AdminPage = () => {
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        const fetchLeaves = async () => {
            const response = await api.get('/leaves/admin/leaves');
            setLeaves(response.data);
        };
        fetchLeaves();
    }, []);

    const handleUpdate = async (id, status) => {
        await api.put(`/leaves/admin/leave/${id}`, { status });
        setLeaves((prev) =>
            prev.map((leave) =>
                leave.id === id ? { ...leave, status } : leave
            )
        );
    };

    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            {leaves.map((leave) => (
                <div key={leave.id} className="leave-card">
                    <p>
                        <strong>{leave.User.username}</strong> requested{' '}
                        <strong>{leave.leave_type}</strong> on{' '}
                        <strong>{leave.leave_date}</strong>
                    </p>
                    <p>Status: {leave.status}</p>
                    <div>
                        <button onClick={() => handleUpdate(leave.id, 'Accepted')}>Accept</button>
                        <button onClick={() => handleUpdate(leave.id, 'Rejected')}>Reject</button>
                        <button onClick={() => handleUpdate(leave.id, 'On Hold')}>Hold</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
