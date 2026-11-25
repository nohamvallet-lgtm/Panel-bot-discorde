# Discord Bot Panel

A responsive, front-end prototype for a Discord bot control panel.

## Features
- Overview cards for bot status, guild count, uptime and latency
- Command catalogue with search
- Activity log with severity filters
- Moderation queue preview
- Responsive sidebar and mobile layout
- Demo data only: no Discord token, API call or backend is included

## Run locally
Open `index.html` in a browser. No build step or dependencies are required.

## Project structure
- `index.html` — dashboard layout
- `styles.css` — responsive visual design
- `app.js` — navigation, search and filters

## Security
Never put a Discord bot token in browser-side JavaScript. A real integration must use a secure server-side backend and environment variables.
