
import styles from "./PayoutsHeader.module.css";

const PayoutsHeader = () => {
  return (
    <header className={styles.header}>
      <h1>Payouts</h1>
      <div className={styles.tabGroup}>
        <button className={`${styles.tab} ${styles.active}`}>Single</button>
        <button className={styles.tab}>Bulk</button>
        <button className={`${styles.tab} ${styles.new}`}>Tally</button>
        <button className={styles.tab}>Payout Links</button>
      </div>
      <button className={styles.payoutButton}>+ PAYOUT</button>
    </header>
  );
};

export default PayoutsHeader;
