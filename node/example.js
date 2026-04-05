/**
 * Node.js example — FreeMusicLab.ai free music API
 * Docs: https://freemusiclab.ai/docs
 */
const API_BASE = 'https://freemusiclab.ai/api';

async function listTracks(genre = 'lofi', limit = 10) {
  const res = await fetch(`${API_BASE}/tracks?genre=${genre}&limit=${limit}`);
  const data = await res.json();
  return data.tracks || [];
}

async function search(query) {
  const res = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
  return res.json();
}

(async () => {
  const tracks = await listTracks('cafe', 5);
  tracks.forEach((t) => console.log(`${t.title} → ${t.downloadUrl}`));
})();
