import React, { useEffect, useRef, useState } from 'react';
import Switch from '../components/Switch';

function Top() {
    const [s, setS] = '';
    return (
        <div>
            <div>{}</div>
            <div>{}</div>
        </div>
    );
}

function add2Storage(data: string, type: 'session' | 'local') {
    if (!getStorage(type)) {
        window[type + 'Storage'].setItem('test', '[]');
    }
    const storage = getStorage(type);

    storage.push(data);
    window[type + 'Storage'].setItem('test', JSON.stringify(storage));
}
function getStorage(type?: 'session' | 'local'): string[] {
    return JSON.parse(window[type + 'Storage'].getItem('test')) || [];
}

export default Top;
