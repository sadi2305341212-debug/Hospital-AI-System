import { useState } from "react";
import type { Doctor } from "./Doctor";


type Props = {
  addDoctor: (doctor: Doctor) => void;
};


function AddDoctor({ addDoctor }: Props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();


    const newDoctor: Doctor = {

      id: Date.now(),

      name,
      email,
      department,
      phone,

    };


    addDoctor(newDoctor);


    setName("");
    setEmail("");
    setDepartment("");
    setPhone("");

  };


  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-6">
        Add New Doctor
      </h2>


      <form 
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4">


        <input
          type="text"
          placeholder="Doctor Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e)=>setDepartment(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <button
  type="submit"
  className="bg-blue-600 text-white p-3 rounded-lg col-span-2"
>
  Save Doctor
</button>


      </form>

    </div>
  );
}


export default AddDoctor;