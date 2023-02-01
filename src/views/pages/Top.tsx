import React, { useEffect, useRef, useState } from 'react';

function Top() {
    return (
        <div>
            <form method="POST" action="/login">
                <input type="text" name="id" placeholder="id" />
                <input type="text" name="password" placeholder="password" />
                <button type="submit">Submit</button>
            </form>
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
