import { useEffect, useState } from "react";
import AddDoctor from "./AddDoctor";
import DoctorTable from "./DoctorTable";
import type { Doctor } from "./Doctor";


function DoctorsPage() {

  const [search, setSearch] = useState("");

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

    setDoctors((prevDoctors) => [
      ...prevDoctors,
      doctor
    ]);

  };



  // Delete Doctor
  const deleteDoctor = (id: number) => {

    setDoctors((prevDoctors) =>
      prevDoctors.filter((doctor) => doctor.id !== id)
    );

  };



  // Update Doctor
  const updateDoctor = (updatedDoctor: Doctor) => {

    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor.id === updatedDoctor.id
          ? updatedDoctor
          : doctor
      )
    );

  };



  // Search Doctor
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );



  // Save Local Storage
  useEffect(() => {

    localStorage.setItem(
      "doctors",
      JSON.stringify(doctors)
    );

  }, [doctors]);



  return (

    <div className="min-h-screen bg-gray-100 p-8">


      <h1 className="text-3xl font-bold mb-6">
        Doctors Management
      </h1>



      <AddDoctor addDoctor={addDoctor} />



      <input
        type="text"
        placeholder="Search Doctor..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="bg-white border p-3 rounded-lg mt-6 w-full"
      />



      <DoctorTable

        doctors={filteredDoctors}

        deleteDoctor={deleteDoctor}

        updateDoctor={updateDoctor}

      />



    </div>

  );

}


export default DoctorsPage;