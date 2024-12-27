import { useContext } from "react"
import { BudgeContext } from "../contex/BudgetContext"

export const useBudget = () => {
    const contex = useContext(BudgeContext)
    if (!contex) {
        throw new Error('useBudget must be used within a BudgetProvider')
    }
    return contex
}