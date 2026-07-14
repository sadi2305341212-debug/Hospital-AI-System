function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          AI Hospital Management System
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;