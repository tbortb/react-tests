import React from 'react'

const Expense = ({expense, expenseNumber}) => (
  <div class="expense">
    { expenseNumber }: { expense.date } - ${ expense.amount }
  </div>
)

const Expenses = ({expenses}) => (
  <div className="expenses">
    <p>The first expense's amount is { expenses[0]?.amount }</p>
    { expenses.map( (expense, i) => <Expense expense={expense} />) }
  </div>
)

export default Expenses