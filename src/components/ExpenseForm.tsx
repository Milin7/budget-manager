import { useState } from "react";
import type { DraftExpense, Expense, Value } from "../types";
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseConcept: "",
    category: "",
    date: new Date(),
  });

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };
  return (
    <>
      {" "}
      <form className=" space-y-5">
        {" "}
        <legend className="uppercase text-center text-2xl font-black border-b-4 py-2 border-blue-500">
          New expense
        </legend>
        <div className=" flex flex-col gap-2">
          {" "}
          <label className=" text-xl" htmlFor="expenseConcept">
            Concept:
          </label>
          <input
            type="text"
            id="expenseConcept"
            placeholder="Add concept"
            className=" bg-slate-100 p-2 "
            name="expenseConcept"
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col gap-2">
          {" "}
          <label className=" text-xl" htmlFor="amount">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Add amount"
            className=" bg-slate-100 p-2 "
            name="amount"
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col gap-2">
          {" "}
          <label className=" text-xl" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className=" bg-slate-100 p-2 "
            name="category"
            onChange={handleChange}
          >
            {" "}
            <option value=""> -- Select -- </option>{" "}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex flex-col gap-2">
          {" "}
          <label className=" text-xl" htmlFor="date">
            Date:
          </label>
          <DatePicker
            className=" bg-slate-100 p-2 border-0"
            value={expense.date}
            onChange={handleChangeDate}
          />
        </div>
        <input
          type="submit"
          className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
          value={"Save"}
        />
      </form>
    </>
  );
}
