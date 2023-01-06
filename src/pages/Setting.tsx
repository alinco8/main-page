import React from 'react';
import Switch from '../components/Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Setting() {
    return (
        <div>
            <form
                method="GET"
                action="/setting"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const q = form.querySelector('[name=q]') as HTMLInputElement;
                }}
            >
                <div>
                    <FontAwesomeIcon icon={faSearch} />
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
