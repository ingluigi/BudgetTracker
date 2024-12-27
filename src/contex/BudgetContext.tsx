import { useReducer, useMemo, createContext, Dispatch, ReactNode } from "react"
import { budgetReducer, BudgetState, initialState, BudgetActions } from "../reducers/budget-reducer"

type BudgeContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
    totalExpenses: number;
    remainingBudget: number;
}

type BudgetProviderProps = {
    children: ReactNode;
}

export const BudgeContext = createContext<BudgeContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])

    const remainingBudget = state.budget - totalExpenses


    return (
        <BudgeContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        >
            {children}
        </BudgeContext.Provider>
    )
}