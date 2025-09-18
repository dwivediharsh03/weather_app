# Weather App (React + Vite + MUI)

A simple, fast weather search application built with **React 19**, **Vite 6**, and **Material UI v7**. Enter a city name to fetch live weather using the **OpenWeatherMap** API, with a clean card UI and helpful status icons.

---

## ✨ Features
- **City search** with client-side validation and error state (*“No such place exists”*).
- **Current conditions**: temperature, min/max, humidity, “feels like”, and a short description.
- **Responsive UI** using Material UI Cards, Typography, and Icons.
- **Theming images** that switch for **hot / cold / rainy** conditions.
- **Vite dev server** for instant HMR; **production build** with `vite build`.

---

## 🧱 Tech Stack
- **Frontend:** React 19, React DOM
- **Build Tool:** Vite 6
- **UI:** @mui/material v7, @mui/icons-material, @emotion/react, @emotion/styled
- **Language:** JavaScript (ES modules)
- **Linting:** ESLint 9

---

## 📂 Project Structure
```
weather_app/
├── index.html
├── package.json
├── public/
│   └── vite.svg
└── src/
    ├── App.jsx
    ├── App.css
    ├── WeatherApp.jsx
    ├── WeatherApp.css
    ├── SearchBox.jsx
    ├── SearchBox.css
    ├── InfoBox.jsx
    ├── InfoBox.css
    └── assets/
        └── react.svg
```
> Entry flow: `App.jsx` → `WeatherApp.jsx` → `SearchBox.jsx` (fetch) + `InfoBox.jsx` (display).

---

## 🔑 API & Environment Variables
This app uses **OpenWeatherMap** (Current Weather Data). Create a free account and generate an API key: https://openweathermap.org/api

Create a file named **`.env`** in the project root with:
```bash
VITE_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_KEY
```

The search component reads the key from `import.meta.env.VITE_WEATHER_API_KEY` and requests:
```
GET https://api.openweathermap.org/data/2.5/weather?q=<CITY>&appid=<KEY>&units=metric
```

> **Note:** The code expects `units=metric` for °C. Change to `imperial` for °F if desired.

---

## ✅ Prerequisites
- **Node.js 18+** (recommended) and **npm**.
- Internet access (calls the OpenWeatherMap REST API over HTTPS).

Check your versions:
```bash
node -v
npm -v
```

---

## 🚀 Getting Started (Local)
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create your `.env`** with `VITE_WEATHER_API_KEY` (see above).

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Vite will show a local URL (e.g., `http://localhost:5173`). Open it in your browser.

---

## 🏗️ Build & Preview (Production)
```bash
npm run build     # outputs to dist/
npm run preview   # serves the built app locally
```

---

## 🧩 Where Things Happen
- **`src/SearchBox.jsx`**: handles user input, validates city, fetches weather from OpenWeatherMap, lifts the result via `updateinfo(...)` prop.
- **`src/InfoBox.jsx`**: renders a **Material UI Card** with temperature, humidity, min/max, “feels like”, and weather description. Shows different background images/icons based on weather.
- **`src/WeatherApp.jsx`**: top-level state for current `weatherInfo`, initialised to Delhi; composes `SearchBox` + `InfoBox`.
- **`src/*.css`**: light custom CSS for layout and card polish on top of MUI defaults.

---

## 🧪 Quick Sanity Test
- Start the dev server and search for a known city (e.g., **London**).
- You should see a card with current **Temperature**, **Humidity**, **Min/Max**, **Feels like**, and **Weather** description.
- Try a nonsense city (e.g., `asdfgh`) → you should see an **error message** under the search input.

---

## 🛠️ Troubleshooting
- **Blank page / 401 or 404 from API**  
  Verify your `.env` contains a valid `VITE_WEATHER_API_KEY` and that you restarted `npm run dev` after adding it.
- **CORS / Network errors**  
  Ensure you’re using the HTTPS API endpoint and that your network/firewall/proxy allows outbound requests.
- **Node or Vite errors**  
  Use Node 18+ and clean-install: `rm -rf node_modules package-lock.json && npm install`.
- **Material UI not styled**  
  Make sure `@emotion/react` and `@emotion/styled` are installed (they are in `package.json`). Reinstall if needed.

---

## 📌 Useful Scripts
```jsonc
// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---



