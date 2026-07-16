import { useState } from "react";
import type { Patient } from "./Patient";

type Props = {
  patient: Patient;
  updatePatient: (patient: Patient) => void;
};

function EditPatient({ patient, updatePatient }: Props) {
  const [name, setName] = useState(patient.name);
  const [age, setAge] = useState(patient.age);
  const [gender, setGender] = useState(patient.gender);
  const [phone, setPhone] = useState(patient.phone);
  const [disease, setDisease] = useState(patient.disease);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPatient: Patient = {
      id: patient.id,
      name,
      age,
      gender,
      phone,
      disease,
    };

    updatePatient(updatedPatient);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Edit Patient
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          className="border p-3 rounded-lg col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg col-span-2"
        >
          Update Patient
        </button>

      </form>
    </div>
  );
}

export default EditPatient;