import { ChangeEvent, FormEvent, useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BudgetForm() {
  const [budget, setBudget] = useState(NaN)
  const { dispatch } = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  }, [budget])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: "add-budget", payload: { budget } })
  }
  return (
    <>
      <form className=" space-y-5" onSubmit={handleSubmit}>
        <div className=" flex flex-col space-y-5">
          <label
            htmlFor="budget"
            className=" text-4xl text-blue-600 font-bold text-center"
          >
            Define budget
          </label>
        </div>
        <input
          id="budget"
          type="number"
          className=" w-full bg-white border border-gray-200 p-2"
          placeholder="Define your budget"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Define budget"
          className=" disabled:opacity-40 bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white font-black uppercase"
          disabled={isValid}
        />
      </form>
    </>
  )
}
