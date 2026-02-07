import { useState } from "react";
import { episodeList } from "./data";

// export default function App() {
//   const [episode, setEpisodes] = useState(data); // data array stored in state
const listItems = episodeList.map(episode => 
return <ul>{#title}</ul>


function EpisodeList() {
    return (
      <section className="episodes">
        <h2>List of Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }