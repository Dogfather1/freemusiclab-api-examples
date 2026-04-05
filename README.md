# FreeMusicLab API Examples

Code examples for integrating the free [FreeMusicLab.ai](https://freemusiclab.ai) music API into your apps.

## About the API

- **Free forever** — no auth required for read endpoints
- **2,000+ AI-generated tracks** — royalty-free, commercial use OK
- **Full docs**: https://freemusiclab.ai/docs
- **Browse tracks**: https://freemusiclab.ai/browse
- **Upload your own AI music**: https://freemusiclab.ai/upload

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

## Why a free music API?

Most music APIs charge $50-500/month and restrict commercial use. We built [FreeMusicLab.ai](https://freemusiclab.ai) to give indie devs and creators a no-strings alternative.

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
