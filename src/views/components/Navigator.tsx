import React from 'react';
import { Link } from 'react-router-dom';
// import  from '@mui/material';
import { SettingsApplications } from '@mui/icons-material';

function Navigator() {
    return (
        <div id="nav">
            <div></div>
            <div>
                <Link to={'/setting'}>
                    <SettingsApplications />
                </Link>
            </div>
        </div>
    );
}

export default Navigator;
