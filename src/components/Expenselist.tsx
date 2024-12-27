import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function Expenselist() {

    const { state } = useBudget()
    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>
                : (
                    <>
                        <p className="text-gray-600 text-2xl font-boldS my-5">Listado de Gastos</p>
                        {filteredExpenses.map(expense => (
                            <ExpenseDetail
                                key={expense.id}
                                expense={expense}
                            />
                        ))}
                    </>
                )}
        </div>
    )
}
