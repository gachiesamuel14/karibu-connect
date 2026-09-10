# Karibu Connect

Location-based dating for people in Kenya.

## Live

https://karibu-connect.netlify.app

Repo: https://github.com/gachiesamuel14/karibu-connect

## Current features (frontend demo)

- **Kenya-wide range** — default max distance 800 km (whole country). Tighten with the slider later.
- **Photos** — minimum 3, maximum 12 on signup (device file picker + previews).
- **Swipe** — drag card left (pass) / right (like), or use the buttons.
- **Mutual match popup** — big “It’s a match!” modal with both faces.
- **Status-style rings** — top bar of match photos (WhatsApp-style); tap to view gallery.
- Multi-photo cards (tap photo to cycle).
- County / mode / age / distance filters, GPS save, chat, report, premium placeholder.

Data is stored in the browser (`localStorage`) until Supabase is connected.

## Next: Supabase + keep Netlify host

Suggested tables:

- `profiles` — id, name, age, county, town, tribe, religion, mode, bio, interests[], lat, lng, photos[]
- `likes` — from_user, to_user, created_at
- `matches` — user_a, user_b (unique pair)
- `messages` — match_id, sender, body, created_at
- `reports` — reporter, target, reason, details

Storage bucket for profile photos. Auth via email. Netlify keeps serving the static site; only the JS client talks to Supabase.

## Local

```bash
npx serve .
```
