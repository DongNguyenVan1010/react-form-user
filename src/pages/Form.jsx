import { useState } from "react";
import FormInput from "../components/FormInput";
import ListUser from "../components/ListUser";

export default function Form() {
  const [users, setUsers] = useState([])
  return (
    <>
      <h1>Form Register</h1>
      <FormInput users={users} setUsers={setUsers} />
      <h1>List User</h1>
      <ListUser users={users} />
    </>
  )
}