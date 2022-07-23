import React, { useEffect, useState } from "react"

function Form() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    const { id, value } = e.target
    setDetails({ ...details, [id]: value })
  }

  const cancelSubmit = () => {}
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <div>
        <input
          onChange={(e) => {
            handleChange(e)
          }}
          value={details.name}
          type="text"
          name="userName"
          placeholder="fullName"
        />
        <input
          onChange={(e) => {
            handleChange(e)
          }}
          value={details.email}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={(e) => {
            handleChange(e)
          }}
          value={details.Mobile_Number}
          type="number"
          name="Mobile_Number"
          placeholder="Mobile_Number"
        />
      </div>
      <div>
        <button
          onSubmit={(e) => {
            handleSubmit(e)
          }}
          type="submit"
        >
          Submit
        </button>
        <button onClick={cancelSubmit}>Cancel</button>
      </div>
    </form>
  )
}

export default Form
