import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

interface Band {
  id: string;
  name: string;
  origin: string;
  formed: number;
  genre: string[];
}

const BANDS: Band[] = [
  {
    id: 'soad',
    name: 'System of a Down',
    origin: 'Los Angeles, USA',
    formed: 1994,
    genre: ['Alternative Metal', 'Nu Metal'],
  },
  {
    id: 'tool',
    name: 'Tool',
    origin: 'Los Angeles, USA',
    formed: 1990,
    genre: ['Progressive Metal', 'Alternative Metal'],
  },
  {
    id: 'ratm',
    name: 'Rage Against the Machine',
    origin: 'Los Angeles, USA',
    formed: 1991,
    genre: ['Rap Metal', 'Alternative Metal'],
  },
  {
    id: 'deftones',
    name: 'Deftones',
    origin: 'Sacramento, USA',
    formed: 1990,
    genre: ['Alternative Metal', 'Nu Metal'],
  },
  {
    id: 'linkin-park',
    name: 'Linkin Park',
    origin: 'Los Angeles, USA',
    formed: 1996,
    genre: ['Nu Metal', 'Alternative Rock'],
  },
];

export function Home() {
  const [search, setSearch] = useState('');

  const filtered = BANDS.filter((band) =>
    band.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <header className="header">
        <h1>🎸 Metal Discography</h1>
        <p>Explore the evolution of metal and alternative music</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search bands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="bands-grid">
        {filtered.map((band) => (
          <Link key={band.id} to={`/band/${band.id}`} className="band-card">
            <h2>{band.name}</h2>
            <p className="origin">{band.origin}</p>
            <p className="formed">Formed: {band.formed}</p>
            <div className="genres">
              {band.genre.map((g) => (
                <span key={g} className="genre-tag">
                  {g}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">No bands found</p>
      )}
    </div>
  );
}
