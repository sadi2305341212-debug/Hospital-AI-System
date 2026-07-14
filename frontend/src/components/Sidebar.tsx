import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaUserInjured,
  FaCalendarCheck,
  FaFlask,
  FaPills,
  FaFileInvoiceDollar,
  FaRobot,
  FaChartBar,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">
        Hospital AI
      </h2>

      <ul className="space-y-5">

        <li>
          <Link to="/dashboard" className="flex items-center gap-3 hover:text-blue-600">
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/doctors" className="flex items-center gap-3 hover:text-blue-600">
            <FaUserMd />
            Doctors
          </Link>
        </li>

        <li>
          <Link to="/patients" className="flex items-center gap-3 hover:text-blue-600">
            <FaUserInjured />
            Patients
          </Link>
        </li>

        <li>
          <Link to="/appointments" className="flex items-center gap-3 hover:text-blue-600">
            <FaCalendarCheck />
            Appointments
          </Link>
        </li>

        <li>
          <Link to="/laboratory" className="flex items-center gap-3 hover:text-blue-600">
            <FaFlask />
            Laboratory
          </Link>
        </li>

        <li>
          <Link to="/pharmacy" className="flex items-center gap-3 hover:text-blue-600">
            <FaPills />
            Pharmacy
          </Link>
        </li>

        <li>
          <Link to="/billing" className="flex items-center gap-3 hover:text-blue-600">
            <FaFileInvoiceDollar />
            Billing
          </Link>
        </li>

        <li>
          <Link to="/ai-assistant" className="flex items-center gap-3 hover:text-blue-600">
            <FaRobot />
            AI Assistant
          </Link>
        </li>

        <li>
          <Link to="/reports" className="flex items-center gap-3 hover:text-blue-600">
            <FaChartBar />
            Reports
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;