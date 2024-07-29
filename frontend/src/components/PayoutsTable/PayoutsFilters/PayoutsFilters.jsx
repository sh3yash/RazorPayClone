
import styles from "./PayoutsFilters.module.css";

const PayoutsFilters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.quickFilters}>
        <span>Quick Filters:</span>
        <button className={`${styles.filter} ${styles.active}`}>All Payouts</button>
        <button className={styles.filter}>Scheduled for next 2 days</button>
        <button className={styles.filter}>Queued (RazorpayX A/c) 1</button>
      </div>
      <button className={styles.moreFilters}>View More Filters ▼</button>
    </div>
  );
};

export default PayoutsFilters;
