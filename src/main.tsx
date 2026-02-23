import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './componests/Navbar/Navbar.tsx'
import BottomNavbar from './componests/BottomNavBar/BottomNavbar.tsx'
import Card from './componests/Card/Card.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Navbar />

    {Array.from({ length: 5 }).map((_, i) => (
      <Card key={i} />
    ))}
    
    <BottomNavbar />

  </StrictMode>,
)
