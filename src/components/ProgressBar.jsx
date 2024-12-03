import PropTypes from 'prop-types';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ percentage, projectName }) => {
  return (
    <div className={styles.minimalProgressBar}>
      <div className={styles.header}>
        <span className={styles.projectName}>{projectName}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired, // El porcentaje de progreso
  projectName: PropTypes.string.isRequired, // Nombre del proyecto
};

export default ProgressBar;
