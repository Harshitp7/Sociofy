import React , {useState} from 'react';
import "./ResetPassword.css";
import { Typography, Button } from '@mui/material';

const ResetPassword = () => {
    
    const [newPassword, setNewPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="resetPassword">
            <form className="resetPasswordForm" onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>
                    Social App
                </Typography>

                <input
                    type="password"
                    placeholder="New Password"
                    required
                    className="resetPasswordInputs"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <Button type="submit">
                    Reset Password
                </Button>
            </form>
        </div>
    )
}

export default ResetPassword