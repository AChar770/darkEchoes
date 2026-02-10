import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);


const listItems = episodeList.map(episode =>
return <ul>{#epTitle}</ul>

function EpisodeList() {
  return (
    <section className="episodes">
        <h2>List of Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li>
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}{episode.epTitle}
            </li>
          ))}
        </ol>
      </section>
    );
  } 

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
