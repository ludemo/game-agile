import styles from './RankingCard.module.scss';
import PropTypes from 'prop-types';

const SpecialRankingCard = ({ 
  name, 
  role, 
  badges 
}) => {
  return (
    <div 
      className={`${styles.card} ${styles.specialCard}`} 
      style={{
        background: 'linear-gradient(135deg, #FFD700, #FF8C00)', 
        color: '#fff',
        border: '6px solid #FF4500',
        boxShadow: '0 8px 15px rgba(255, 69, 0, 0.8)',
        textAlign: 'center',
        width: '300px', // Tamaño reducido
        margin: '20px auto', // Centrado
        padding: '16px',
        borderRadius: '20px',
      }}
    >
      <h2 className={styles.name} style={{ fontSize: '24px', marginBottom: '8px' }}>{name}</h2>
      <p className={styles.role} style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 'bold' }}>
        {role}
      </p>
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

SpecialRankingCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default SpecialRankingCard;
