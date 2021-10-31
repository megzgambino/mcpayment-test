import React, { useEffect } from 'react'
import './HomePage.css'
import Swal from  'sweetalert2'
import { fetchData, addIncome, addExpenses } from '../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function HomePage() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    

    function handleAddIncome (id) {
        console.log(id)
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
              dispatch(addIncome({income: result.value.income, id}))
            // Swal.fire(`
            //   income: ${result.value.income}
            // `.trim())
          })
    }

    function handleAddExpenses (id) {
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
                dispatch(addExpenses({expenses: result.value.expenses, id}))
          })
    }

    useEffect(() => {
        dispatch(fetchData())
        // eslint-disable-next-line
    }, [data])

    return (
        <table id="users">
            <tr>
                <th>Income</th>
                <th>Expenses</th>
                <th>Balance</th>
            </tr>
            <tr>
                <td>
                    {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.income)}
                    <button id="button" type="submit" onClick={() => handleAddIncome(data.id)}>Add Income</button>
                </td>
                <td>
                    {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.expenses)}
                    <button id="button" type="button" onClick={() => handleAddExpenses(data.id)}>Add Expenses</button>
                </td>
                <td>
                    {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.balance)}
                </td>
            </tr>
        </table>
    )
}
