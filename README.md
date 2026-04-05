# FreeMusicLab API Examples

Code examples for integrating the free [FreeMusicLab.ai](https://freemusiclab.ai) music API into your apps.

## About the API

- **Free forever** — no auth required for read endpoints
- **2,000+ AI-generated tracks** — royalty-free, no Content ID claims
- **Generation source**: [Google Lyria](https://deepmind.google/technologies/lyria/) (Vertex AI / Gemini API). Commercial use permitted under Google's [Generative AI Terms](https://policies.google.com/terms/generative-ai).
- **Full docs**: https://freemusiclab.ai/docs
- **License**: https://freemusiclab.ai/license

## Examples in this repo

- [`react-player/`](./react-player) — React hooks + audio player
- [`python/`](./python) — Python requests examples
- [`node/`](./node) — Node.js fetch examples
- [`curl/`](./curl) — plain HTTP examples

## Quick start

```bash
curl "https://freemusiclab.ai/api/tracks?genre=lofi&limit=10"
```

```js
fetch('https://freemusiclab.ai/api/tracks?genre=lofi')
  .then(r => r.json())
  .then(({ tracks }) => console.log(tracks));
```

```python
import requests
tracks = requests.get('https://freemusiclab.ai/api/tracks', params={'genre': 'lofi'}).json()
print(tracks)
```

## Legal & compliance notes

- **AI disclosure**: when using tracks in monetized YouTube/TikTok/Meta content, enable the AI-generated content label on your platform.
- **SynthID**: every first-party track carries an inaudible watermark identifying it as AI-generated.
- **Commercial use**: permitted via Google's Generative AI Terms. See [license](https://freemusiclab.ai/license) for full details.

## Why a free music API?

Most music APIs charge $50-500/month and restrict commercial use. [FreeMusicLab.ai](https://freemusiclab.ai) uses Google Lyria (a licensed model with commercial-use output rights) to provide indie devs and creators a free alternative on solid legal footing.

- 🎵 [Download free music](https://freemusiclab.ai/browse)
- ⬆️ [Upload your own AI tracks](https://freemusiclab.ai/upload)
- 📖 [Read the blog](https://freemusiclab.ai/blog)
- 🔌 [API docs](https://freemusiclab.ai/docs)

## Contributing

PRs welcome! If you build something cool with the API, add an example to this repo.

## License

MIT.

---

Built by [@Dogfather1](https://github.com/Dogfather1) · Part of [FreeMusicLab.ai](https://freemusiclab.ai)
