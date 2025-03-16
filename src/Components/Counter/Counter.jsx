import styles from'./Counter.module.css';
import CountUp from 'react-countup'
import { motion } from 'framer-motion';
import { SlideRight } from '../../utility/animation'

export const Counter = () => {
  

  return (
    <>
      <div id='counter'>
        <div className={styles.stats}>
          <motion.div variants={SlideRight (0.3)} initial="hidden"  whileInView={"visible"} viewport={{ once: true}} className={styles.flexStats}>
              <span>
                  <CountUp start={1000} end={4200} duration={5} />
                  <span className={styles.plus}>+</span>
              </span>
              <div className={styles.statsInfo}>Succesful Pick-ups</div>
          </motion.div>
          <motion.div variants={SlideRight (0.4)} initial="hidden"  whileInView={"visible"} viewport={{ once: true}} className={styles.flexStats}>
              <span>
                  <CountUp start={18} end={130} duration={5} />
                  <span className={styles.plus}>+</span>
              </span>
              <div className={styles.statsInfo}>Customers</div>
          </motion.div>
          <motion.div variants={SlideRight (0.5)} initial="hidden"  whileInView={"visible"} viewport={{ once: true}} className={styles.flexStats}>
              <span>
                  <CountUp start={3} end={18} duration={5}  />
                  <span className={styles.plus}>+</span>
              </span>
              <div className={styles.statsInfo}>Agents</div>
          </motion.div>
          </div>
      </div>
    </>
  );
};

