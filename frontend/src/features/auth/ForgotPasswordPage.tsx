function ForgotPasswordPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Enter your email to reset password
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mt-6 rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4">
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;