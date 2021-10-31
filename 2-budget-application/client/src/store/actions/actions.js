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
        // console.log(data[0])
        dispatch({
            type: 'FETCH_DATA',
            payload: data[0]
        })
    })
    .catch(err => console.log(err))
}


export const addIncome = ({income, id}) => (dispatch) => {
    // console.log(income)
    axios({
        method: 'PATCH',
        url: 'http://localhost:4000/income',
        data: {
            id,
            income
        }
    })
}

export const addExpenses = ({expenses, id}) => (dispatch) => {
    axios({
        method: 'PATCH',
        url: 'http://localhost:4000/expenses',
        data: {
            id,
            expenses
        }
    })
  
}