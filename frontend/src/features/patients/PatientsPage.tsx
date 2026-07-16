import { useEffect, useState } from "react";
import AddPatient from "./AddPatient";
import PatientTable from "./PatientTable";
import type { Patient } from "./Patient";

function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(() => {
    const savedPatients = localStorage.getItem("patients");

    if (savedPatients) {
      return JSON.parse(savedPatients);
    }

    return [
      {
        id: 1,
        name: "Rahim",
        age: "35",
        gender: "Male",
        phone: "01700000000",
        disease: "Fever",
      },
    ];
  });

  // Add Patient
  const addPatient = (patient: Patient) => {
    setPatients((prevPatients) => [...prevPatients, patient]);
  };

  // Update Patient
  const updatePatient = (updatedPatient: Patient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  // Delete Patient
  const deletePatient = (id: number) => {
    setPatients((prevPatients) =>
      prevPatients.filter((patient) => patient.id !== id)
    );
  };

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        Patients Management
      </h1>

      <AddPatient addPatient={addPatient} />

      <PatientTable
        patients={patients}
        deletePatient={deletePatient}
        updatePatient={updatePatient}
      />
    </div>
  );
}

export default PatientsPage;