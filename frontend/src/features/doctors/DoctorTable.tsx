import type { Doctor } from "./Doctor";
import EditDoctor from "./EditDoctor";
import { useState } from "react";


type Props = {
  doctors: Doctor[];
  deleteDoctor: (id: number) => void;
  updateDoctor: (doctor: Doctor) => void;
};


function DoctorTable({ 
  doctors, 
  deleteDoctor,
  updateDoctor
}: Props) {


  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);


  return (
    <div className="bg-white mt-8 p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        Doctor List
      </h2>


      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Name</th>
            <th className="text-left">Department</th>
            <th className="text-left">Email</th>
            <th className="text-left">Phone</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>


        <tbody>

          {doctors.map((doctor) => (

            <tr key={doctor.id} className="border-b">

              <td className="py-4">
                {doctor.name}
              </td>

              <td>
                {doctor.department}
              </td>

              <td>
                {doctor.email}
              </td>

              <td>
                {doctor.phone}
              </td>


              <td>

                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>


                <button
                  onClick={() => deleteDoctor(doctor.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>


              </td>

            </tr>

          ))}

        </tbody>

      </table>


      {
        selectedDoctor && (
          <EditDoctor
            doctor={selectedDoctor}
            updateDoctor={(updatedDoctor) => {
              updateDoctor(updatedDoctor);
              setSelectedDoctor(null);
            }}
          />
        )
      }


    </div>
  );
}


export default DoctorTable;