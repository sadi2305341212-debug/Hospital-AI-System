import { useState } from "react";
import type { Patient } from "./Patient";
import EditPatient from "./EditPatient";

type Props = {
  patients: Patient[];
  deletePatient: (id: number) => void;
  updatePatient: (patient: Patient) => void;
};

function PatientTable({
  patients,
  deletePatient,
  updatePatient,
}: Props) {
  const [selectedPatient, setSelectedPatient] =
    useState<Patient | null>(null);

  return (
    <div className="bg-white mt-8 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Patient List
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Name</th>
            <th className="text-left">Age</th>
            <th className="text-left">Gender</th>
            <th className="text-left">Phone</th>
            <th className="text-left">Disease</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-b">
              <td className="py-4">{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              <td>{patient.disease}</td>

              <td>
                <button
                  onClick={() => setSelectedPatient(patient)}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePatient(patient.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPatient && (
        <EditPatient
          patient={selectedPatient}
          updatePatient={(updatedPatient) => {
            updatePatient(updatedPatient);
            setSelectedPatient(null);
          }}
        />
      )}
    </div>
  );
}

export default PatientTable;