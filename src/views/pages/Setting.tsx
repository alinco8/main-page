import React from 'react';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import { Search } from '@mui/icons-material';

function Setting() {
    return (
        <div>
            <form
                method="GET"
                action="/setting"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const q = form.querySelector(
                        '[name=q]'
                    ) as HTMLInputElement;
                }}
            >
                <div>
                    <Search />
                    <input type="text" name="q" />
                </div>
            </form>
            <div id="output">
                <table id="visual">
                    <tbody>
                        <tr>
                            <td>
                                <span>Dark Mode</span>
                            </td>
                            <td>
                                <Switch />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table id="accounts">
                    <thead>
                        <tr>
                            <td colSpan={2}>アカウント</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span>Dark Mode</span>
                            </td>
                            <td>
                                <Switch />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Setting;
