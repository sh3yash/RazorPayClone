
import SideHeader from "./SideHeader/SideHeader";
import PayoutsHeader from "./PayoutsHeader/PayoutsHeader";
import PayoutsFilters from "./PayoutsFilters/PayoutsFilters";
import PayoutsTableBody from "./PayoutsTableBody/PayoutsTableBody";
import styles from "./PayoutsTable.module.css";

const PayoutsTable = () => {
  return (
    <div className={styles.appContainer}>
      <SideHeader />
      <main className={styles.mainContent}>
        <div className={styles.payoutsContainer}>
          <PayoutsHeader />
          <PayoutsFilters />
          <PayoutsTableBody />
        </div>
      </main>
    </div>
  );
};

export default PayoutsTable;
