import { useState, useEffect } from 'react'
import './App.css'
import saltLogo from './assets/logo.png'
import appStoreLogo from './assets/appstore.png'
import googlePlayLogo from './assets/google.png'

function App() {
  const [copied, setCopied] = useState(false)
  const [referralCode, setReferralCode] = useState('4RSDRU')

  const allowedCodes = ['4RSDRU', 'XCPNDT','AVAKNK'] 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlCode = params.get('code')
    
    if (urlCode && urlCode.trim()) {
      const normalizedCode = urlCode.toUpperCase().trim()
      
      if (allowedCodes.includes(normalizedCode)) {
        setReferralCode(normalizedCode)
      }
    }
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="app">
      <header className="header">
        <img src={saltLogo} alt="Salt Bank" className="logo" />
      </header>

      <section className="hero">
        <div className="bonus-badge">
          <span className="bonus-amount">100 LEI</span>
          <span className="bonus-text">⏰ Ofertă până la 30.10.2025!</span>
        </div>
        
        <h1 className="hero-title">
          Primești <span className="highlight">100 RON</span> pentru invitatie!
        </h1>
        
        <p className="hero-subtitle">
          Înregistrează-te în Salt Bank și folosește codul de mai jos
        </p>
      </section>

      <section className="code-section">
        <div className="code-label">Codul tău de invitație:</div>
        <div className="code-container">
          <div className="code-display">{referralCode}</div>
          <button 
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <span className="check-icon">✓</span> Copiat
              </>
            ) : (
              <>
              Copiază
              </>
            )}
          </button>
        </div>
      </section>

      <section className="cta-section">
        <a 
          href="https://getapp.salt.bank/5Jb4/" 
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descarcă Salt Bank
        </a>
        
        <div className="store-links">
          <p className="store-text">Sau descarcă direct din:</p>
          <div className="store-buttons">
              <img src={appStoreLogo} alt="App Store" className="store-logo" />
            
              <img src={googlePlayLogo} alt="Google Play" className="store-logo" />
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="section-title">Ce primești:</h2>
        
        <div className="benefits-grid">
          <div className="benefit-card highlight-card">
            <div className="benefit-icon">💰</div>
            <div className="benefit-content">
              <h3>100 RON </h3>
              <p>Pentru fiecare prieten care isi face cont cu codul tau</p>
              <p>Fara limita de invitatii!</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💳</div>
            <div className="benefit-content">
              <h3>5% Cashback</h3>
              <p>Din toate plățile timp de o lună</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🚗</div>
            <div className="benefit-content">
              <h3>Asistență Rutieră</h3>
              <p>Gratuită pentru un an întreg</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🌍</div>
            <div className="benefit-content">
              <h3>Cont Multicurrency</h3>
              <p>Gratuit și fără condiții</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📈</div>
            <div className="benefit-content">
              <h3>3% Dobândă</h3>
              <p>Pe an pentru Cont Curent și Spaces</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🔒</div>
            <div className="benefit-content">
              <h3>Securitate</h3>
              <p>Call Monitor & Help Mama pentru protecție completă</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💼</div>
            <div className="benefit-content">
              <h3>Cont Business</h3>
              <p>Switch instant între cont personal și business</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💱</div>
            <div className="benefit-content">
              <h3>Curs Valutar</h3>
              <p>Cel mai bun curs de pe piață</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <div className="benefit-content">
              <h3>Garantat FGDB</h3>
              <p>Banii tăi protejați până la 100.000 EUR</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💳</div>
            <div className="benefit-content">
              <h3>Design Premium</h3>
              <p>Cele mai frumoase carduri de pe piață</p>
            </div>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <h2 className="section-title">Cum funcționează:</h2>
        
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Descarcă aplicația</h3>
              <p>Disponibilă pe iOS și Android</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Introdu codul</h3>
              <p>Folosește <strong>{referralCode}</strong> la înregistrare</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Primești bonusul</h3>
              <p>100 RON pentru fiecare prieten care isi face cont cu codul tau!</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Salt Bank - Banca digitală modernă</p>
        <p>Material neafiliat oficial cu banca!</p>
        <a 
          href="https://salt.bank/prietenii-aduc-cashback" 
          target="_blank"
          rel="noopener noreferrer"
          className="terms-link"
        >
          Vezi termeni și condiții oficiale
        </a>
      </footer>
    </div>
  )
}

export default App
