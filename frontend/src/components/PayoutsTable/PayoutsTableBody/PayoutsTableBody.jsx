
import styles from "./PayoutsTableBody.module.css";

const payouts = [
  { createdAt: 'Fri 9 Feb, 2:32 PM', amount: '10,000.00', status: 'Queued', contact: 'Shivam Arora', createdBy: 'Aditya Sharma', utr: '-' },
  { createdAt: 'Fri 9 Feb, 1:25 PM', amount: '10,000.00', status: 'Queued', contact: 'Ujjwal', createdBy: 'Aditya Sharma', utr: '-' },
  { createdAt: 'Fri 9 Feb, 12:04 PM', amount: '10,000.00', status: 'Queued', contact: 'Amit Kumar', createdBy: 'Aditya Sharma', utr: '-' },
  { createdAt: 'Thu 8 Feb, 3:52 PM', amount: '50,000.00', status: 'Queued', contact: 'Harsh', createdBy: 'Aditya Sharma', utr: '-' },
  { createdAt: 'Tue 6 Feb, 4:09 PM', amount: '10,000.00', status: 'Queued', contact: 'Random Verma', createdBy: 'Aditya Sharma', utr: '-' },
];

const PayoutsTableBody = () => {
  return (
    <>
      <div className={styles.infoBanner}>
        These are test payouts and do not affect the actual balance. They are used only for the purpose of integrating payouts. <a href="#">Learn More</a>
      </div>
      
      <div className={styles.tableActions}>
        <span>Showing 1-5 payouts</span>
        <div>
          <button className={styles.refresh}>↻</button>
          <button className={styles.options}>⋮</button>
        </div>
      </div>

      <table className={styles.payoutsTable}>
        <thead>
          <tr>
            <th>Created At</th>
            <th>Amount (INR)</th>
            <th>Status</th>
            <th>Contact</th>
            <th>Created By</th>
            <th>UTR</th>
          </tr>
        </thead>
        <tbody>
          {payouts.map((payout, index) => (
            <tr key={index}>
              <td>{payout.createdAt}</td>
              <td>{payout.amount}</td>
              <td>{payout.status}</td>
              <td>{payout.contact}</td>
              <td>{payout.createdBy}</td>
              <td>{payout.utr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PayoutsTableBody;
