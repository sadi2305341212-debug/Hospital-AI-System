import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Body */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">
            Welcome Admin 👋
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-gray-500">Doctors</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">25</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-gray-500">Patients</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">320</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-gray-500">Appointments</h3>
              <p className="text-3xl font-bold text-orange-500 mt-2">48</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-gray-500">Revenue</h3>
              <p className="text-3xl font-bold text-red-500 mt-2">$15,400</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;