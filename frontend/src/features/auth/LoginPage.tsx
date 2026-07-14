function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          AI Hospital
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Hospital Management System
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;