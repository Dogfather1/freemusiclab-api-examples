/**
 * React audio player using FreeMusicLab.ai free API.
 *
 * Docs: https://freemusiclab.ai/docs
 * Browse: https://freemusiclab.ai/browse
 * Upload your own: https://freemusiclab.ai/upload
 */
import { useEffect, useState } from 'react';

export function FreeMusicPlayer({ genre = 'lofi', limit = 10 }) {
  const [tracks, setTracks] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://freemusiclab.ai/api/tracks?genre=${genre}&limit=${limit}`)
      .then((r) => r.json())
      .then((data) => {
        setTracks(data.tracks || []);
        setLoading(false);
      });
  }, [genre, limit]);

  if (loading) return <div>Loading free AI music…</div>;
  if (!tracks.length) return <div>No tracks found.</div>;

  const track = tracks[current];

  return (
    <div className="fml-player">
      <h3>{track.title}</h3>
      <audio key={track.id} controls src={track.downloadUrl} />
      <div>
        <button onClick={() => setCurrent((i) => Math.max(0, i - 1))}>Prev</button>
        <button onClick={() => setCurrent((i) => Math.min(tracks.length - 1, i + 1))}>Next</button>
      </div>
      <p>
        {current + 1} / {tracks.length} · <a href="https://freemusiclab.ai/browse">Browse all free music</a>
      </p>
    </div>
  );
}
