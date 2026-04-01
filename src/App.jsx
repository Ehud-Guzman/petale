import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import FloristHome     from "./pages/FloristHome";
import CollectionsPage from "./pages/CollectionsPage";
import AboutPage       from "./pages/AboutPage";
import ContactPage     from "./pages/ContactPage";

function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #fdf5f0 0%, #ffffff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'fadeOut 0.5s ease-in-out 2s forwards'
    }}>
      <div style={{
        fontSize: '4rem',
        marginBottom: '1rem',
        animation: 'pulse 2s infinite'
      }}>
        🌹
      </div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        color: 'var(--dark)',
        letterSpacing: '-0.02em'
      }}>
        Pétale Studio
      </div>
      <style>{`
        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Loading timer
    const timer = setTimeout(() => setLoading(false), 2500);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <BrowserRouter>
        <Routes>
          <Route path="/"            element={<FloristHome />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/contact"     element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
