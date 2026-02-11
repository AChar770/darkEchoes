import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>List of Episodes</h2>
        <ol>
          {episodeList.map((episode) => (
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

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <p><em>Select an episode for details to show</em></p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
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
