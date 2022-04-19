import { useState } from "react"

export const useForm = (initialState = {}) => {

  const [form, setForm] = useState(initialState)

  const handleChangeInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const cleanInputs = () => {
    setForm(initialState)
  }

  return [form, handleChangeInput, cleanInputs];
}
