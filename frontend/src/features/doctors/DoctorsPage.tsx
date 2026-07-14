import { useEffect, useState } from "react";
import AddDoctor from "./AddDoctor";
import DoctorTable from "./DoctorTable";
import type { Doctor } from "./Doctor";

function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    const savedDoctors = localStorage.getItem("doctors");

    if (savedDoctors) {
      return JSON.parse(savedDoctors);
    }

    return [
      {
        id: 1,
        name: "Dr. John Smith",
        email: "john@gmail.com",
        department: "Cardiology",
        phone: "01700000000",
      },
    ];
  });

  // Add Doctor
  const addDoctor = (doctor: Doctor) => {
    setDoctors((prevDoctors) => [...prevDoctors, doctor]);
  };

  // Delete Doctor
  const deleteDoctor = (id: number) => {
    setDoctors((prevDoctors) =>
      prevDoctors.filter((doctor) => doctor.id !== id)
    );
  };

  // Save doctors to Local Storage
  useEffect(() => {
  console.log("Saving doctors...", doctors);

  localStorage.setItem("doctors", JSON.stringify(doctors));
}, [doctors]);

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