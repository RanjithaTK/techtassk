import React from "react"
import { useForm } from "react-hook-form"
function MyForm() {
  return (
    <form
      className="max-w-xl m-auto py-10 mt-10 px-12 border"
      onSubmit="{handleSubmit(onSubmit)}"
    >
      <label className="text-gray-600 font-medium">Name</label>
      <input
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded
  text-gray-700"
        name="title"
        placeholder="FullName"
      />
      <label className="text-gray-600 font-medium block mt-4">Email</label>
      <input
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded
  text-gray-700"
        name="email"
        type="text"
        placeholder="enter your email"
        ref={{ required: "Please enter your email" }}
      />
      <label className="text-gray-600 font-medium block mt-4">
        Mobile_Number
      </label>
      <input
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded
  text-gray-700"
        name="mobile-number"
        type="text"
        placeholder="enter your mobile-number"
        ref={{ required: "Please enter your mobile-number" }}
      />

      <button
        className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
        // className=""
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default MyForm
