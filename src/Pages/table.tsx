
export const Table = ({ search = "" }) => {
  const transactions = [
    {
      id: 1,
      name: "Jessica Brown",
      activeWork: 12,
      overdue: 10,
      status: "Successful",
    },
    {
      id: 2,
      name: "Michael Smith",
      activeWork: 15,
      status: "on Track",
      overdue: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      activeWork: 10,
      status: "Failed",
      overdue: 2,
    },
    {
      id: 4,
      name: "David Wilson",
      activeWork: 8,
      status: "Successful",
      overdue: 0,

    },
    {
      id: 5,
      name: "Sarah Johnson",
      activeWork: 20,
      status: "overloaded",
      overdue: 7,
    }
  ];

  const filteredTransactions = transactions.filter(
    (tx) =>
      tx.name.toLowerCase().includes(search.toLowerCase()) ||
      tx.activeWork.toString().includes(search.toLowerCase()) ||
      tx.status.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-white p-5">
      <p className="text-lg  font-extrabold mb-2">Team Workload</p>

      <table className="w-full table-auto border-collapse bg-white rounded-lg  p-6">
        <thead>
          <tr className="text-left text-sm  ">
            <th className="p-3  ">Name</th>
            <th className="p-  ">Active Work</th>
            <th className="p-3  ">Overdue</th>
            <th className="p-3  ">Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="border-none">
          {filteredTransactions.length === 0 ? (
            <tr>
              <td  className="text-center py-6 text-gray-400">
                No transactions found
              </td>
            </tr>
          ) : (
            filteredTransactions.map((tx) => (
              <tr key={tx.id} className=" text-sm">
                <td className="p-4 ">{tx.name}</td>
                <td className="">{tx.activeWork}</td>
                <td className="">{tx.overdue}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        tx.status === "Successful"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "on Track"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td>
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
