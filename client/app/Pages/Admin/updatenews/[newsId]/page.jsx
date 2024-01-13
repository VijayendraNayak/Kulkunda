// Import necessary styles if required
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditNewsPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [newsId, setNewsId] = useState("");
  const [newsData, setNewsData] = useState({
    headline: "",
    description: "",
    avatar: [], // Array of image links
    reffernces: "", // String for reffernces
  });

  useEffect(() => {
    const initializeNewsId = () => {
      const currentRouterLink =
        typeof window !== "undefined" ? window.location.href : "";
      const initialNewsId = currentRouterLink.split("/").pop();
      setNewsId(initialNewsId);
    };

    initializeNewsId();
  }, []);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        if (newsId === undefined) {
          console.warn("newsId is undefined");
          return;
        }

        const res = await fetch(`/api/newsupdate/singlenews/${newsId}`);
        const data = await res.json();
        console.log(data);

        if (data.news) {
          setNewsData((prevNewsData) => ({
            ...prevNewsData,
            headline: data.news.headline,
            description: data.news.description,
            avatar: data.news.avatar || [], // Ensure avatar is an array
            reffernces: data.news.reffernces || "", // Ensure reffernces is a string
          }));
        } else {
          console.error("Error fetching news data:", data.message);
        }
      } catch (error) {
        console.error("Error during data fetch:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (typeof window !== "undefined" && newsId !== undefined) {
      console.log("Current router link:", window.location.href);
      fetchNewsData();
    }
  }, [newsId]);

  const handleUpdate = async () => {
    try {
      if (!newsId) {
        console.error("newsId is undefined");
        return;
      }

      const res = await fetch(`/api/newsupdate/updatenews/${newsId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsData),
      });

      const data = await res.json();

      if (data.success) {
        console.log(`News ID ${newsId} updated successfully`);
        router.push("/Pages/Admin/findnewsupdate");
      } else {
        console.error("Update failed:", data.message);
      }
    } catch (error) {
      console.error("Error during update:", error);
    }
  };

  const handleChange = (e) => {
    setNewsData({
      ...newsData,
      [e.target.name]: e.target.value,
    });
  };

  console.log("Rendered newsData:", newsData); // Log newsData during rendering

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Edit News</h1>

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Headline:
            </label>
            <input
              type="text"
              name="headline"
              value={newsData.headline}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              value={newsData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Avatar (Image Links):
            </label>
            <input
              type="text"
              name="avatar"
              value={newsData.avatar.join(", ")} // Join array elements with a comma
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              reffernces:
            </label>
            <textarea
              name="reffernces"
              value={newsData.reffernces}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Update News
          </button>
        </form>
      )}
    </div>
  );
};

export default EditNewsPage;
