import { useParams, Link } from 'react-router-dom';
import '../styles/BandDetail.css';

interface Album {
  id: string;
  title: string;
  year: number;
  producer: string[];
}

interface BandInfo {
  name: string;
  origin: string;
  formed: number;
  disbanded?: number;
  description: string;
  albums: Album[];
}

const BANDS_DATA: Record<string, BandInfo> = {
  soad: {
    name: 'System of a Down',
    origin: 'Los Angeles, USA',
    formed: 1994,
    description:
      'System of a Down is an Armenian-American heavy metal band known for their unique blend of heavy metal with traditional Armenian melodies and politically conscious lyrics.',
    albums: [
      { id: '1', title: 'System of a Down', year: 1998, producer: ['Rick Rubin'] },
      { id: '2', title: 'Toxicity', year: 2001, producer: ['Brendan O\'Brien'] },
      { id: '3', title: 'Mezmerize', year: 2005, producer: ['Ankur Tewari', 'Serji Tankian'] },
      { id: '4', title: 'Hypnotize', year: 2005, producer: ['Ankur Tewari', 'Serji Tankian'] },
    ],
  },
  tool: {
    name: 'Tool',
    origin: 'Los Angeles, USA',
    formed: 1990,
    description:
      'Tool is a progressive metal band known for complex time signatures, intricate instrumentation, and philosophical lyrics.',
    albums: [
      { id: '1', title: 'Undertow', year: 1993, producer: ['Dave Bottrill'] },
      { id: '2', title: 'Ænima', year: 1996, producer: ['David Bottrill'] },
      { id: '3', title: 'Lateralus', year: 2001, producer: ['Tool'] },
      { id: '4', title: 'Fear Inoculum', year: 2019, producer: ['Tool'] },
    ],
  },
  ratm: {
    name: 'Rage Against the Machine',
    origin: 'Los Angeles, USA',
    formed: 1991,
    disbanded: 2011,
    description:
      'Rage Against the Machine is a revolutionary rap metal band combining heavy guitars with hip-hop beats and politically charged lyrics.',
    albums: [
      { id: '1', title: 'Rage Against the Machine', year: 1992, producer: ['Rick Rubin'] },
      { id: '2', title: 'Evil Empire', year: 1996, producer: ['Brendan O\'Brien'] },
      { id: '3', title: 'The Battle of Los Angeles', year: 1999, producer: ['Tom Morello', 'Zack de la Rocha'] },
    ],
  },
  deftones: {
    name: 'Deftones',
    origin: 'Sacramento, USA',
    formed: 1990,
    description:
      'Deftones is an alternative metal band known for their evolving sound and atmospheric production.',
    albums: [
      { id: '1', title: 'Adrenaline', year: 1995, producer: ['Terry Date'] },
      { id: '2', title: 'Around the Fur', year: 1997, producer: ['Terry Date'] },
      { id: '3', title: 'White Pony', year: 2000, producer: ['Terry Date'] },
      { id: '4', title: 'Diamond Eyes', year: 2010, producer: ['Terry Date'] },
    ],
  },
  'linkin-park': {
    name: 'Linkin Park',
    origin: 'Los Angeles, USA',
    formed: 1996,
    description:
      'Linkin Park is a nu metal band that blended heavy guitars with electronic beats and introspective lyrics.',
    albums: [
      { id: '1', title: 'Hybrid Theory', year: 2000, producer: ['Don Gilmore'] },
      { id: '2', title: 'Meteora', year: 2003, producer: ['Don Gilmore'] },
      { id: '3', title: 'Minutes to Midnight', year: 2007, producer: ['Rick Rubin'] },
      { id: '4', title: 'A Thousand Suns', year: 2010, producer: ['Rick Rubin'] },
    ],
  },
};

export function BandDetail() {
  const { bandId } = useParams<{ bandId: string }>();
  const band = bandId ? BANDS_DATA[bandId] : null;

  if (!band) {
    return <div className="not-found">Band not found</div>;
  }

  return (
    <div className="band-detail">
      <Link to="/" className="back-button">
        ← Back to Bands
      </Link>

      <header className="band-header">
        <h1>{band.name}</h1>
        <p className="band-origin">{band.origin}</p>
        <p className="band-info">
          Formed: {band.formed}
          {band.disbanded && ` - ${band.disbanded}`}
        </p>
        <p className="description">{band.description}</p>
      </header>

      <section className="discography">
        <h2>Discography</h2>
        <div className="albums-list">
          {band.albums.map((album) => (
            <div key={album.id} className="album-item">
              <div className="album-year">{album.year}</div>
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.producer.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
