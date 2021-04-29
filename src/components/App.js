import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideo";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo("building");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      我有 {videos.length}个白敬亭的视频.
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
