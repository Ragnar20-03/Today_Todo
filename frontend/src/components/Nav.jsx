export default function Nav() {
  return (
    <nav className="bg-black text-white p-4 m-3 rounded-md font-serif">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-xl font-bold">Today_Todo</h1>
        </div>
        <div className="flex space-x-4">
          <a
            href="/login"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
