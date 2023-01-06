import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function Navigator() {
    return (
        <div id="nav">
            <div></div>
            <div>
                <Link to={'/setting'}>
                    <FontAwesomeIcon className="setting" icon={faGear} />
                </Link>
            </div>
        </div>
    );
}

export default Navigator;
