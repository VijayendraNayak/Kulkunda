"use client"
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Loader from "@/app/Components/Loader";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Next.js router

  const handleChange = (e, field) => {
    switch (field) {
      case "currentPassword":
        setCurrentPassword(e.target.value);
        break;
      case "newPassword":
        setNewPassword(e.target.value);
        break;
      case "confirmNewPassword":
        setConfirmNewPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password fields
    if (newPassword !== confirmNewPassword) {
      // Handle password mismatch error
      return;
    }

    // Add your logic here for changing the password
    try {
      setLoading(true);

      // Your password change API call or logic goes here

      setLoading(false);

      // Redirect to a success page or handle accordingly
      router.push("/password-change-success");
    } catch (error) {
      // Handle error, e.g., show error message
      console.error("Password change failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-orange-300 hover:scale-105">
      {loading && <Loader />}
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Change Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-black-600"
            >
              Current Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="currentPassword"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 hover:scale-105"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => handleChange(e, "currentPassword")}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-black-600"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 hover:scale-105"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => handleChange(e, "newPassword")}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmNewPassword"
              className="block text-sm font-medium text-black-600"
            >
              Confirm New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmNewPassword"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 hover:scale-105"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => handleChange(e, "confirmNewPassword")}
              required
            />
            
          </div>
          <div className="text-center">
            <button 
                type="submit"
                className="bg-gradient-to-r from-yellow-300 to-orange-300 text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-md"
            >
                Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
