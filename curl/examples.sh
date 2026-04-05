# FreeMusicLab.ai API — curl examples

# List tracks by genre
curl "https://freemusiclab.ai/api/tracks?genre=lofi&limit=10"

# Get a single track
curl "https://freemusiclab.ai/api/tracks/TRACK_ID"

# Search
curl "https://freemusiclab.ai/api/search?q=study+focus"

# Download an mp3 directly (replace downloadUrl from list endpoint)
curl -L -o track.mp3 "https://cdn.freemusiclab.ai/tracks/TRACK_ID.mp3"

# Docs: https://freemusiclab.ai/docs
# Upload your own AI music: https://freemusiclab.ai/upload
