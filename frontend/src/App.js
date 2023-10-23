import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StoryCard from "./components/StoryCard";

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/topstories`);
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    }
    fetchStories();
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Top Stories from New York Times</h2>
      </header>
      <div className="stories">
        {stories.map((story, index) => (
          <StoryCard data={story} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
