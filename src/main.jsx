import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/figtree";
<<<<<<< HEAD
import "@fontsource/figtree/900.css";
=======
import "@fontsource/Figtree/900.css";
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
