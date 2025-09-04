const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'fan-art', label: 'Fan Art' },
    { id: 'prints', label: 'Prints' },
    { id: 'originals', label: 'Original Pieces' },
    { id: 'thumbnails', label: 'YouTube Thumbnails' },
    { id: 'key-art', label: 'Game Key Art' }
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>Matthew Guo</h1>
          <p>Digital Artist</p>
        </div>
        <ul className="nav-links">
          {sections.map(section => (
            <li key={section.id}>
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;