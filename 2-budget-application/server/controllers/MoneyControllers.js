const { Money } = require('../models')


class MoneyController {

    static showBalance(req,res) {
        Money.findAll()
        .then((money) => {
            res.status(200).json(money)
        })
        .catch(err => res.status(500).json(err))
    }
    static createBalance(req, res) {
        let balance = req.body.balance

        Money.create({
            balance
        })
        .then((money) => {
            res.status(201).json(money)
        })
        .catch(err => res.status(500).json(err))
    }

    static addIncome(req, res) {
        let id = req.body.id
        let balance = req.body.balance

        Money.increment({balance}, 
            {
                where: {
                    id
                }, 
                returning: true
            }
        )
        .then((money) => {
            res.status(200).json({
                message: `Balance has been incremented!`
            })
        })
        .catch(err => res.status(500).json(err))
    }

    static addExpense(req, res) {
        let id = req.body.id
        let balance = req.body.balance

        Money.decrement({balance}, 
            {
                where: {
                    id
                }, 
                returning: true
            }
        )
        .then((money) => {
            res.status(200).json({
                message: `Balance has been deducted!`
            })
        })
        .catch(err => res.status(500).json(err))
    }
}

module.exports = MoneyController