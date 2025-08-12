import { useState } from "react";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

// A more descriptive name for our component
export default function BirthdayPartyGuestUI() {
  // State for the form inputs
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Read: Get all guest entries from the contract
  // We assume the contract is now named "BirthdayPartyGuest" and has a "getAllGuests" function
  const { data: guests } = useScaffoldContractRead({
    contractName: "BirthdayPartyGuest",
    functionName: "getAllGuests",
  });

  // Write: Add a new guest to the list
  const { writeAsync: addGuest, isLoading } = useScaffoldContractWrite({
    contractName: "BirthdayPartyGuest",
    functionName: "addGuest",
    args: [name, message], // Pass the guest's name and message
  });

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name || !message) {
      console.error("Please fill all fields");
      return;
    }
    try {
      // Call the contract's addGuest function
      await addGuest();
      // Clear the form fields on successful submission
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding guest:", error);
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center rounded-xl">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-700">🎉 It&quot;s a Birthday Party! 🎉</h1>
          <p className="text-gray-600 mt-2">Sign the guest list to let us know you&quot;re coming.</p>
        </div>

        {/* Form to add a new guest */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="Leave a birthday message!"
            rows={3}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
          >
            {isLoading ? "Adding to the list..." : "RSVP"}
          </button>
        </form>

        {/* Guest List Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Guest List</h2>
          {guests && guests.length > 0 ? (
            <div className="space-y-4">
              {/* We reverse the array to show the newest guests first */}
              {[...guests].reverse().map((guest: any, index: number) => (
                <div key={index} className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-purple-800">{guest.name}</p>
                      <p className="text-gray-700 mt-1">&quot;{guest.message}&quot;</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(Number(guest.timestamp) * 1000).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-purple-400 mt-2 truncate">Signer: {guest.signer}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No one has RSVP yet. Be the first!</p>
          )}
        </div>
      </div>
    </div>
  );
}
