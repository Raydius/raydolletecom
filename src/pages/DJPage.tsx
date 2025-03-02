import './Pages.css';

const DJPage = () => {
  return (
    <section className="dj-section" id="dj">
      <h2>DJ</h2>
      <div className="dj-content">
        <p>DJ content coming soon. This section will showcase mixes, events, and equipment.</p>
        <div className="placeholder-content">
          <h3>Featured Mixes</h3>
          <div className="placeholder-items">
            <div className="placeholder-item">Mix 1</div>
            <div className="placeholder-item">Mix 2</div>
            <div className="placeholder-item">Mix 3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DJPage;