import React from 'react'
import './HomePage.css'

export default function HomePage() {
    return (
        <table id="users">
            <tr>
                <th>Income</th>
                <th>Expenses</th>
                <th>Balance</th>
            </tr>
            <tr>
                <td>500000</td>
                <td>100000</td>
                <td>1000000</td>
            </tr>
        </table>
    )
}
