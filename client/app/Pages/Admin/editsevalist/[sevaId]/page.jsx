// Import necessary styles if required
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditSevaPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [sevaId, setSevaId] = useState("");
  const [sevaData, setSevaData] = useState({
    sevanamee: "",
    sevanamek: "",
    sevanameh: "",
    price: "",
  });

  useEffect(() => {
    const initializeSevaId = () => {
      // Check if we are on the client side before accessing window
      const currentRouterLink = typeof window !== 'undefined' ? window.location.href : '';
      const initialSevaId = currentRouterLink.split("/").pop();
      setSevaId(initialSevaId);
    };

    initializeSevaId();
  }, []);

  useEffect(() => {
    const fetchSevaData = async () => {
      try {
        if (sevaId === undefined) {
          console.warn("sevaId is undefined");
          return;
        }

        const res = await fetch(`/api/sevalist/singleseva/${sevaId}`);
        const data = await res.json();

        if (data.success) {
          setSevaData(data.seva);
        } else {
          console.error("Error fetching seva data:", data.message);
        }
      } catch (error) {
        console.error("Error during data fetch:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Check if we are on the client side before accessing window
    if (typeof window !== 'undefined' && sevaId !== undefined) {
      console.log("Current router link:", window.location.href);
      fetchSevaData();
    }
  }, [sevaId]);

  const handleUpdate = async () => {
    try {
      if (!sevaId) {
        console.error("sevaId is undefined");
        return;
      }

      const res = await fetch(`/api/sevalist/admin/updateseva/${sevaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sevaData),
      });

      const data = await res.json();

      if (data.success) {
        console.log(`Seva ID ${sevaId} updated successfully`);
        router.push("/Pages/Admin/findsevalist");
      } else {
        console.error("Update failed:", data.message);
      }
    } catch (error) {
      console.error("Error during update:", error);
    }
  };

  const handleChange = (e) => {
    setSevaData({
      ...sevaData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Edit Seva</h1>

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name (English):
          </label>
          <input
            type="text"
            name="sevanamee"
            value={sevaData.sevanamee}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name (Kannada):
          </label>
          <input
            type="text"
            name="sevanamek"
            value={sevaData.sevanamek}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name (Hindi):
          </label>
          <input
            type="text"
            name="sevanameh"
            value={sevaData.sevanameh}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            type="text"
            name="price"
            value={sevaData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Update Seva
        </button>
      </form>
      )}
    </div>
  );
};

export default EditSevaPage;
