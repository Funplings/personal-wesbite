const Gallery = ({ title, artworks = [], onImageClick }) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="gallery">
        {artworks.length > 0 ? (
          artworks.map((artwork, index) => (
            <img 
              key={index} 
              src={artwork.src} 
              alt={artwork.title} 
              className="gallery-image"
              loading="lazy"
              onClick={() => onImageClick(artwork.src, artwork.title)}
            />
          ))
        ) : (
          <p className="placeholder">{title} will be displayed here</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;