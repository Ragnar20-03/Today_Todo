export default function Card({ todo, todoHandler, deleteTodo }) {
  const { id, title, status, description, date } = todo;
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-gray-500">
            Task #{id}
          </span>
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              status === "Completed"
                ? "bg-gray-200 text-green-800"
                : "bg-gray-200 text-red-800"
            }`}
          >
            {status}
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-xs text-gray-500">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {date}
        </div>
      </div>
      <div className="px-4 py-3 sm:px-6 bg-gray-50 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
        {todo.status == "completed" ? (
          <button
            className="w-full sm:w-auto px-4 py-2 bg-white text-green-500 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            onClick={() => {
              todoHandler(id); // Pass the todo item to the handler
            }}
          >
            Done
          </button>
        ) : (
          <button
            className="w-full sm:w-auto px-4 py-2 bg-white text-green-500 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            onClick={() => {
              todoHandler(id); // Pass the todo item to the handler
            }}
          >
            UnDone
          </button>
        )}
        <button
          className="w-full sm:w-auto px-4 py-2 bg-white text-red-500 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
