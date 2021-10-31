import axios from 'axios'

export const createBalance = (balance) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'http://localhost:4000/balance',
        data: balance
    })
    .then(({data}) => {
        dispatch({
            type: 'CREATE_BALANCE',
            payload: data
        })
    })
}

export const fetchData = () => (dispatch) => {
    axios({
        method: 'GET',
        url: 'http://localhost:4000/balance'
    })
    .then(({data}) => {
        dispatch({
            type: 'FETCH_DATA',
            payload: data
        })
    })
    .catch(err => console.log(err))
}


export const addIncome = (income) => (dispatch) => {
    axios({
        method: 'PATCH',
        url: 'http://localhost:4000/income',
        data: income
    })
    .then(({data}) => {
        // dispatch({
        //     type: 'FETCH_DATA'
        // })
    })
}

export const addExpenses = (expenses) => (dispatch) => {
    axios({
        method: 'PATCH',
        url: 'http://localhost:4000/expenses',
        data: expenses
    })
    .then(({data}) => {
        // dispatch({
        //     type: 'FETCH_DATA'
        // })
    })
}