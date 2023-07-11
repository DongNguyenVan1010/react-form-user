import { useState } from "react";
import FormInput from "../components/FormInput";
import ListUser from "../components/ListUser";

export default function Form() {
  const [users, setUsers] = useState([])
  return (
    <div>

      <FormInput users={users} setUsers={setUsers} />
      <div style={{ borderTop: " 0.5px solid gray", marginLeft: 10, marginRight: 10, marginTop: 40 }}></div>
      <ListUser users={users} />
    </div>
  )
}