import { useReducer, createContext, Dispatch } from "react"
import { budgetReducer, initialState, BudgetState, BudgetActions} from "../reducers/budget-reducers"


type BudgetContextProps = {
    state: BudgetState,
    dispatch: Dispatch<BudgetActions>
}

export const BudgetContext = createContext<BudgetContextProps>(null!)



export const BudgetProvider = () => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)
 


    return (

    )
}