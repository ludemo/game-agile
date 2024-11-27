import styles from './RankingCard.module.scss';
import PropTypes from 'prop-types';

const RankingCard = ({ 
  name, 
  role, 
  xp, 
  progress, 
  badges, 
  rank 
}) => {
  // Define ranking styles
  const getRankingStyles = () => {
    switch(rank) {
      case 1:
        return {
          cardStyle: {
            backgroundColor: '#FFD700', // Gold
            border: '4px solid #DAA520', // Dark gold border
            boxShadow: '0 4px 10px rgba(218, 165, 32, 0.6)' // Gold box shadow
          },
          emoji: '🥇'
        };
      case 2:
        return {
          cardStyle: {
            backgroundColor: '#C0C0C0', // Silver
            border: '4px solid #708090', // Slate gray border
            boxShadow: '0 4px 10px rgba(112, 128, 144, 0.6)' // Silver-gray box shadow
          },
          emoji: '🥈'
        };
      case 3:
        return {
          cardStyle: {
            backgroundColor: '#CD7F32', // Bronze
            border: '4px solid #8B4513', // Saddle brown border
            boxShadow: '0 4px 10px rgba(139, 69, 19, 0.6)' // Bronze box shadow
          },
          emoji: '🥉'
        };
      default:
        return {
          cardStyle: {
            backgroundColor: '#fff8d5c9',
            border: '4px solid #e0e0e0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          },
          emoji: '🏆'
        };
    }
  };

  const { cardStyle, emoji } = getRankingStyles();

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.header}>
        <h2 className={styles.name}>{name}</h2>
        <span style={{ 
          width: '50px', 
          height: '40px', 
          fontSize: '40px' 
        }}>
          {emoji}
        </span>
      </div>
      <span className={styles.role}>{role}</span>
      <div className={styles.xpSection}>
        <p>XP: {xp}</p>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className={styles.progressText}>Progreso: {progress}%</span>
      </div>
      <div className={styles.badges}>
        {badges.map((badge, index) => (
          <div key={index} className={styles.badge}>
            {badge.icon}
            <p className={styles.badgeDescription}>{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

RankingCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  xp: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  badges: PropTypes.arrayOf(PropTypes.node).isRequired,
  rank: PropTypes.number.isRequired // New prop for ranking
};

export default RankingCard;