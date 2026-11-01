# Cosmic Cat Creatives — team platform

Live: https://soft-entremet-e20bf9.netlify.app

| Path | Tool |
|---|---|
| `/` | Home: buttons to each tool |
| `/leads/` | Lead Board |
| `/proposals/` | Proposals, invoices, acknowledgement receipts, activity log |

## How it fits together
- **GitHub** (this repo) holds the code. Every push to `main` makes Netlify redeploy.
- **Netlify** hosts the pages. Each deploy uses credits, so changes are batched into one push.
- **Firebase** project "Cosmic Cat Leads Board" (`cosmic-cat-leads-board`): one login for every tool (Authentication) and all data (Firestore).

## Firestore data
| Collection | Used by |
|---|---|
| `leads` | Lead Board |
| `ccc_proposals`, `ccc_invoices`, `ccc_receipts`, `ccc_activity`, `ccc_settings` | Proposals |

Rules live in `firestore.rules`. GitHub does not publish them: paste the file into
Firebase console > Firestore > Rules > Publish whenever it changes.

## Adding a team member
1. Firebase console > Authentication > Users > Add user.
2. Add their email and name to `EMAIL_TO_NAME` in `leads/index.html` and `TEAM_NAMES` in `proposals/firebase-config.js`.

## Adding a new tool
Create a folder (e.g. `training/`), add a card for it on the home page (`index.html`),
and add its collections to `firestore.rules`.
