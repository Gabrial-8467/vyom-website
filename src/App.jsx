import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import "./App.css"
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DocumentationPage from './pages/DocumentationPage'
import ExamplesPage from './pages/ExamplesPage'
import InstallationPage from './pages/InstallationPage'
import CommunityPage from './pages/CommunityPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          <main className="animate-fadeIn">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs" element={<DocumentationPage />} />
              <Route path="/examples" element={<ExamplesPage />} />
              <Route path="/install" element={<InstallationPage />} />
              <Route path="/community" element={<CommunityPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
