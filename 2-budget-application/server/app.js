const express = require('express')
const app = express()
const cors = require('cors')
const MoneyController = require('./controllers/MoneyControllers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/balance', MoneyController.showBalance)
app.post('/balance', MoneyController.createBalance)
app.patch('/income', MoneyController.addIncome)
app.patch('/expenses', MoneyController.addExpense)

module.exports = app