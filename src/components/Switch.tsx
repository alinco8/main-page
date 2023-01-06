import React, { useState } from 'react';

function Switch(props: { on?: boolean }) {
    return (
        <label className="switch">
            <div></div>
            <input type="checkbox" defaultChecked={props.on} />
        </label>
    );
}

export default Switch;
