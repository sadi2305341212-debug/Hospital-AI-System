import { useState } from "react";
import type { Patient } from "./Patient";

type Props = {
  addPatient: (patient: Patient) => void;
};

function AddPatient({ addPatient }: Props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPatient: Patient = {
      id: Date.now(),
      name,
      age,
      gender,
      phone,
      disease,
    };

    addPatient(newPatient);

    setName("");
    setAge("");
    setGender("");
    setPhone("");
    setDisease("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Add New Patient
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4"
      >
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Disease"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          className="border p-3 rounded-lg col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg col-span-2"
        >
          Save Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatient;