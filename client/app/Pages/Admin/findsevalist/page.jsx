"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "react-modal";

const FindUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sevaList, setSevaList] = useState([]);
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);
  const [searchCategory, setSearchCategory] = useState("sevanamee");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    sevanamee: "",
    sevanamek: "",
    sevanameh: "",
    price: 0,
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const requestBody = {
        [searchCategory]: searchTerm,
        sevanamek: searchCategory === "sevanamek" ? searchTerm : undefined,
        sevanameh: searchCategory === "sevanameh" ? searchTerm : undefined,
        price: searchCategory === "price" ? searchTerm : undefined,
      };

      const res = await fetch("/api/sevalist/singleseva/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      if (data.success === false) {
        console.log(data.message);
        setFound(false);
        setSevaList([]);
        return;
      }

      setSevaList(data.seva);
      setFound(true);
      setRemove(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFound(false);
    setSevaList([]);
    setRemove(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEdit = (seva) => {
    setEditedData({
      sevanamee: seva.sevanamee || "",
      sevanamek: seva.sevanamek || "",
      sevanameh: seva.sevanameh || "",
      price: seva.price || 0,
      // Update with more fields as needed
    });
    openModal();
  };

  const handleUpdate = async (sevaId) => {
    try {
      const res = await fetch(`/api/sevalist/admin/updateseva/${sevaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const data = await res.json();

      if (data.success) {
        console.log(`Seva ID ${sevaId} updated successfully`);
        handleSearch();
        closeModal(); // Close the modal after successful update
      } else {
        console.error("Update failed:", data.message);
      }
    } catch (error) {
      console.error("Error during update:", error);
    }
  };

  return (
    <div className="pt-28 h-screen">
      <form className="flex items-center justify-between max-w-lg mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-full">
        <select
          value={searchCategory}
          onChange={handleCategoryChange}
          className="bg-transparent focus:outline-none text-white max-w-lg mx-auto"
        >
          <option value="sevanamee" className="text-black">
            Name (English)
          </option>
          <option value="sevanamek" className="text-black">
            Name (Kannada)
          </option>
          <option value="sevanameh" className="text-black">
            Name (Hindi)
          </option>
          <option value="price" className="text-black">
            Price
          </option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${searchCategory}`}
          className="bg-transparent focus:outline-none text-white max-w-lg mx-auto"
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} className="ml-2 focus:outline-none">
          <FaSearch className="text-white"></FaSearch>
        </button>
      </form>

      <div className="pt-4">
        {remove && !found && (
          <p className="text-red-500 font-semibold text-5xl text-center">
            Query deleted Successfully!!!!
          </p>
        )}
        {found && sevaList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sevaList.map((seva, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <div className="font-bold mb-2">Name (Hindi): {seva.sevanameh}</div>
                <div className="mb-2">Name (Kannada): {seva.sevanamek}</div>
                <div className="mb-2">Name (English): {seva.sevanamee}</div>
                <div>Price: {seva.price}</div>
                <div className="mt-4 flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleEdit(seva)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleDelete(seva._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for editing data */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Edit Seva</h2>
        <form>
          {/* Render a form with input fields for each property in editedData */}
          <label>
            Name (English):
            <input
              type="text"
              value={editedData.sevanamee}
              onChange={(e) =>
                setEditedData({ ...editedData, sevanamee: e.target.value })
              }
            />
          </label>
          {/* Add more fields as needed */}
          <button onClick={() => handleUpdate(editedData._id)}>Update</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default FindUser;
