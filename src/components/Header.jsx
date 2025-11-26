import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="logo-card">
                <div className="logopic">
                    <div className="spin-container">
                        <img src="/logo.jpeg" alt="Logo" className="spinning-logo" aria-label="Logo" />
                    </div>
                </div>

                <div className="header-bg">
                    <h3>
                        <a href="https://tmp3o.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit tmp3o.com">tmp3o.com</a>
                    </h3>
                </div>
            </div>

            <header className="header">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>what inspires u?</h1>
                </Link>

                <div className="description">
                    <p>a collection of music, images, anything.</p>
                </div>

                <nav>
                    <Link to="/new" className="btn btn-primary">share inspiration</Link>
                </nav>
            </header>
        </>
    )
}
