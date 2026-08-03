import RootLayout from './components/RootLayout'
import Hero from './components/Hero'
import LevelSelect from './components/LevelSelect'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hire from './components/Hire'
import GameOver from './components/GameOver'
import './App.css'

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Hero /> },
      { path: 'levels', element: <LevelSelect /> },
      { path: 'about', element: <About /> },
      { path: 'education', element: <Education /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
      { path: 'hire', element: <Hire /> },
      { path: 'connect', element: <GameOver /> },
      { path: '*', element: <Hero /> },
    ],
  },
]

export default routes
