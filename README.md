# Karibu Connect

Location-based dating for people in Kenya. Match by county, distance, age, interests, and vibe.

## Live site

https://karibu-connect.netlify.app

GitHub: https://github.com/gachiesamuel14/karibu-connect

## What this version includes

Frontend product demo (data lives in the browser):

- Registration and login
- Profile setup with county, tribe, religion, mode, and interests
- Nearby discovery with filters + GPS permission
- Like / pass and instant demo matches
- In-browser chat
- Report / safety flow
- Premium placeholder (M-Pesa-ready copy)

## What still needs a backend

For a production app you still need:

- Auth (Supabase / Firebase / custom Node or Django)
- PostgreSQL or MongoDB for users, likes, matches
- Photo storage (Cloudinary / S3)
- Realtime chat (Supabase Realtime, Firebase, or Socket.io)
- Haversine / PostGIS distance queries
- Push notifications
- Safaricom Daraja for M-Pesa

Netlify can host the frontend and serverless functions; a database still lives elsewhere (Supabase pairs well).

## Local run

Open `index.html` or:

```bash
npx serve .
```
