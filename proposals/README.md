# Cosmic Cat Creatives — Proposals, Invoices & Receipts

Part of the Cosmic Cat team platform (see the README at the repo root). Live at /proposals/.

## Files
- `index.html` — the whole app
- `firebase-config.js` — Firebase web settings (safe to publish)
- `logo.png` — Cosmic Cat badge (favicon)
- rules: see `firestore.rules` in the repo root (shared with the Lead Board)

## Data (Firestore)
| Collection | What |
|---|---|
| `ccc_proposals` | proposals (CCC-YYYY-NNN) |
| `ccc_invoices` | invoices (INV-YYYY-NNN) with payment history |
| `ccc_receipts` | acknowledgement receipts (AR-YYYY-NNN) |
| `ccc_activity` | activity log: who did what, when |
| `ccc_settings/catalog` | packages, collaterals, payment methods, defaults |

## One-time Firebase setup
1. Authentication > Sign-in method > enable **Email/Password**.
2. Authentication > Users > **Add user** for each team member.
3. Firestore > Rules > paste the whole `firestore.rules` file from the repo root > Publish.

## Updates
Push to GitHub → Netlify redeploys automatically. No build step.
