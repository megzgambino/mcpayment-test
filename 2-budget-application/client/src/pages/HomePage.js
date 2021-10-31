import React from 'react'
import './HomePage.css'
import Swal from  'sweetalert2'

export default function HomePage() {

    function handleAddIncome () {
        // console.log('masuk')
        Swal.fire({
            title: 'Add Income',
            html: `<input type="income" id="income" class="swal2-input" placeholder="Income">`,
            confirmButtonText: 'Add Income',
            focusConfirm: false,
            preConfirm: () => {
              const income = Swal.getPopup().querySelector('#income').value
              if (!income) {
                Swal.showValidationMessage(`Please enter your desired income`)
              }
              return { income }
            }
          }).then((result) => {
            Swal.fire(`
              income: ${result.value.income}
            `.trim())
          })
    }

    function handleAddExpenses () {
        Swal.fire({
            title: 'Add Expenses',
            html: `<input type="expenses" id="expenses" class="swal2-input" placeholder="Expenses">`,
            confirmButtonText: 'Add Expenses',
            focusConfirm: false,
            preConfirm: () => {
              const expenses = Swal.getPopup().querySelector('#expenses').value
              if (!expenses) {
                Swal.showValidationMessage(`Please enter your desired expenses`)
              }
              return { expenses }
            }
          }).then((result) => {
            Swal.fire(`
              expenses: ${result.value.expenses}
            `.trim())
          })
    }


    return (
        <table id="users">
            <tr>
                <th>Income</th>
                <th>Expenses</th>
                <th>Balance</th>
            </tr>
            <tr>
                <td>
                    500000
                    <button id="button" type="submit" onClick={handleAddIncome}>Add Income</button>
                </td>
                <td>
                    100000
                    <button id="button" type="button" onClick={handleAddExpenses}>Add Expenses</button>
                </td>
                <td>
                    1000000
                    <button id="button">Add Balance</button>
                </td>
            </tr>
        </table>
    )
}
