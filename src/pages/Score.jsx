import RankingCard from '../components/RankingCard';
export default function Score(){
  const Jugador1 =[
    { icon: '👑', description: 'Mejor programador' },
    { icon: '📊', description: 'Mejor diseñador' },
  ]
  
  return (
    <div style = {{ display: 'flex',width: '100%',position:'relative', gap: '20px', flexDirection: 'column'}}>
      <h1 style = {{marginInline: 'auto'}}>Tablero de ranking</h1>
      <RankingCard 
        name="John Doe" 
        role="Developer" 
        xp={1000} 
        progress={75} 
        badges={Jugador1} 
        rank={1}  // First place
      />
      <RankingCard 
        name="John Doe" 
        role="Developer" 
        xp={1000} 
        progress={75} 
        badges={Jugador1} 
        rank={2}  // First place
      />
      <RankingCard 
        name="John Doe" 
        role="Developer" 
        xp={1000} 
        progress={75} 
        badges={Jugador1} 
        rank={3}  // First place
      />
      <RankingCard 
        name="John Doe" 
        role="Developer" 
        xp={1000} 
        progress={75} 
        badges={Jugador1} 
        rank={4}  // First place
      />
      <RankingCard 
        name="John Doe" 
        role="Developer" 
        xp={1000} 
        progress={75} 
        badges={Jugador1} 
        rank={5}  // First place
      />
    </div>

  );
}