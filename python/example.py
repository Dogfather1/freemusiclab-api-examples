"""
FreeMusicLab.ai free music API — Python example.

Docs: https://freemusiclab.ai/docs
Browse: https://freemusiclab.ai/browse
Upload your own AI music: https://freemusiclab.ai/upload
"""
import requests

API_BASE = "https://freemusiclab.ai/api"


def list_tracks(genre: str = "lofi", limit: int = 10):
    r = requests.get(f"{API_BASE}/tracks", params={"genre": genre, "limit": limit})
    r.raise_for_status()
    return r.json().get("tracks", [])


def search(query: str):
    r = requests.get(f"{API_BASE}/search", params={"q": query})
    r.raise_for_status()
    return r.json()


def download_track(track_id: str, output_path: str):
    track = requests.get(f"{API_BASE}/tracks/{track_id}").json()
    url = track["downloadUrl"]
    with requests.get(url, stream=True) as resp:
        resp.raise_for_status()
        with open(output_path, "wb") as f:
            for chunk in resp.iter_content(chunk_size=8192):
                f.write(chunk)
    return output_path


if __name__ == "__main__":
    tracks = list_tracks("cinematic", limit=5)
    for t in tracks:
        print(f"{t['title']} ({t.get('duration', '?')}s) — {t['downloadUrl']}")
