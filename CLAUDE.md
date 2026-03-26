# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Dev server on localhost:3000
npm run build   # Production build (outputs to /build)
npm test        # Run tests with Jest (watch mode by default)
```

## Architecture

Spanish-language Wordle clone built with React 17 + Tailwind CSS, deployed to GitHub Pages.

### Component Tree

```
App.js
  └─ Home.jsx          ← main game orchestrator, holds win/loss state
      ├─ WordInput.jsx  ← renders 5 CodeInput rows
      │   └─ CodeInput.jsx  ← one guess row (5 chars); handles Enter/Backspace; shows color feedback
      │       └─ Input.jsx  ← single character input with forwarded ref
      ├─ Keyboard.jsx   ← on-screen QWERTY + Ñ; dispatches key events to Home
      ├─ Key.jsx        ← individual keyboard button
      └─ Modal.jsx      ← wraps Tutorial.jsx and Statistics.jsx dialogs
```

### State Management

- **`useWord.js`** — selects and stores the secret word; resets it every 5 minutes via `setInterval`; persists via `localStorage` (`word`, `lastWordTime`, `isFirstTime`)
- **`useWords.js`** — stores the 5 guesses array and current word index; shared across components via `use-between` (avoids prop drilling for input state)

### Game Logic

- **`helpers/getWords.js`** — picks a random word from `assets/words.js`, normalizes diacritics (`NFD` decomposition) so Spanish accented letters match correctly
- **`helpers/verifyWord.js`** — compares a guess against the secret word; returns per-letter status: `OK` (green), `CONTAINS` (yellow), `INCORRECT` (gray)

### Key Patterns

- `CodeInput` manages a 5-ref array to auto-focus the next/previous character cell
- Tailwind classes for letter colors are applied dynamically in `CodeInput` based on `verifyWord` output
- Physical keyboard events (keydown) are handled in `Home.jsx` and forwarded to `useWords` hooks
- Stats (games played, wins) are in-memory only — not persisted across page reloads
