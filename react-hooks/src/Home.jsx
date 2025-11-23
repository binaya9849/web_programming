import { useState, useEffect } from "react";
import { fetchData } from "./lib/fetchData"; // make sure lib/fetchData.js exists

export default function Home() {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const json = await fetchData("test.json"); // test.json should be in /public
      setMediaArray(json);
    } catch (err) {
      console.error("Error fetching media:", err);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div>
      <h1>Media Items</h1>
      {mediaArray.map((item) => (
        <p key={item.media_id}>{item.title}</p>
      ))}
    </div>
  );
}
