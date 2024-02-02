import React from "react";

function Avatar({ name, size }) {
  // Split the name into first name and last name
  const [firstName, lastName] = name.split(" ");
  
  return (
    <div className={`font-bold p-4 rounded-full flex aspect-square text-center items-center justify-center bg-gradient-to-br from-green-500 to-black text-white ${size}`}>
      {/* Display the first letters of both first name and last name */}
      <p>{firstName.charAt(0)}{lastName.charAt(0)}</p>
    </div>
  );
}

export default Avatar;
