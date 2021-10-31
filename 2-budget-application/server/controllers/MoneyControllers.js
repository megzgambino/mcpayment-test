const { Money } = require('../models')

class MoneyController {
    static showBalance(req, res) {
        Money.findAll()
            .then((money) => {
                res.status(200).json(money)
            })
            .catch((err) => res.status(500).json(err))
    }
    static createBalance(req, res) {
        let balance = req.body.balance

        Money.create({
            balance,
            income: 0,
            expenses: 0
        })
            .then((money) => {
                res.status(201).json(money)
            })
            .catch((err) => res.status(500).json(err))
    }

    static addIncome(req, res) {
        let { id, income } = req.body
        // console.log(id, income)
        Money.increment(
            {income},
            {
                where: {
                    id,
                },
                returning: true,
            }
        )
            .then(() => {
                let balance = income
                Money.increment(
                    { balance },
                    {
                        where: {
                            id,
                        },
                        returning: true,
                    }
                )
            })
            .then((balance) => {
                res.status(200).json({
                    message: `Balance has been incremented!`,
                })
            })
            .catch((err) => res.status(500).json(err))
    }

    static addExpense(req, res) {
        let { id, expenses } = req.body
        // console.log(id, income)
        Money.increment(
            {expenses},
            {
                where: {
                    id,
                },
                returning: true,
            }
        )
            .then(() => {
                let balance = expenses
                Money.decrement(
                    { balance },
                    {
                        where: {
                            id,
                        },
                        returning: true,
                    }
                )
            })
            .then((balance) => {
                res.status(200).json({
                    message: `Balance has been deducted!`,
                })
            })
            .catch((err) => res.status(500).json(err))
    }
}

module.exports = MoneyController
