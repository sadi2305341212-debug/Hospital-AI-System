import { useState } from "react";
import type { Doctor } from "./Doctor";


type Props = {
  doctor: Doctor;
  updateDoctor: (doctor: Doctor) => void;
};


function EditDoctor({ doctor, updateDoctor }: Props) {

  const [name, setName] = useState(doctor.name);
  const [email, setEmail] = useState(doctor.email);
  const [department, setDepartment] = useState(doctor.department);
  const [phone, setPhone] = useState(doctor.phone);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const updatedDoctor: Doctor = {
      id: doctor.id,
      name,
      email,
      department,
      phone,
    };


    updateDoctor(updatedDoctor);
  };


  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-bold mb-4">
        Edit Doctor
      </h2>


      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">


        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 rounded-lg"
        />


        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg col-span-2"
        >
          Update Doctor
        </button>


      </form>

    </div>
  );
}


export default EditDoctor;