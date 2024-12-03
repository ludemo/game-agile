import RankingCard from '../components/RankingCard';
import ProjectProgressBar from '../components/ProgressBar';
import { jugadores } from './playersData';
export default function Score() {
  // Ordenar jugadores por el atributo rank
  const jugadoresOrdenados = [...jugadores].sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Gestión administrativa CEPREUNSA</h1>
        <ProjectProgressBar percentage={32.26} projectName="Avance del proyecto" />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ marginInline: 'auto' }}>Tablero de ranking</h1>
        {jugadoresOrdenados.map((jugador) => (
          <RankingCard
            key={jugador.name} 
            name={jugador.name}
            role={jugador.role}
            xp={jugador.xp}
            progress={jugador.progress}
            badges={jugador.badges}
            rank={jugador.rank}
            nivel={jugador.nivel}
          />
        ))}
      </div>
    </>
  );
}
