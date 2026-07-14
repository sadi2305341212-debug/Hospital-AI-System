import { useState } from "react";
import AddDoctor from "./AddDoctor";
import DoctorTable from "./DoctorTable";
import type { Doctor } from "./Doctor";

function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: 1,
      name: "Dr. John Smith",
      email: "john@gmail.com",
      department: "Cardiology",
      phone: "01700000000",
    },
  ]);

  const addDoctor = (doctor: Doctor) => {
    setDoctors((prevDoctors) => [...prevDoctors, doctor]);
  };

  const deleteDoctor = (id: number) => {
    setDoctors((prevDoctors) =>
      prevDoctors.filter((doctor) => doctor.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        Doctors Management
      </h1>

      <AddDoctor addDoctor={addDoctor} />

      <DoctorTable
        doctors={doctors}
        deleteDoctor={deleteDoctor}
      />
    </div>
  );
}

export default DoctorsPage;