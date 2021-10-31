const initialState = {
    // balance: 0,
    // income: 0,
    // expenses: 0
    data: []
}


function reducer(state = initialState, action) {
    if (action.type === 'FETCH_DATA') {
        const newState = {
            ...state, data: action.payload
        }
        return newState
    } else if (action.type === 'CREATE_BALANCE') {
        const newState = {
            ...state, data:action.payload
        }
        return newState
    }

    return initialState
}

export default reducer
