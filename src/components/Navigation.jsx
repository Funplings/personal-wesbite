import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  
  const sections = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' }
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>Funplings</h1>
        </div>
        <ul className="nav-links">
          {sections.map(section => (
            <li key={section.path}>
              <Link
                to={section.path}
                className={`nav-link ${location.pathname === section.path ? 'active' : ''}`}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;