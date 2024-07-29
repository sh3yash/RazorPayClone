import { useState } from 'react';
import styles from './SideHeader.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const SideHeader = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`${styles.sideHeader} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.logo}>
        {!isCollapsed && 'RazorpayX'}
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
        </button>
      </div>
      <nav>
        <ul>
          <li><a href="#" className={styles.home}><i className="fas fa-home"></i> {!isCollapsed && 'Home'}</a></li>
          <li><a href="#" className={`${styles.active} ${styles.currentPage}`}><i className="fas fa-money-bill"></i> {!isCollapsed && 'Payouts'}</a></li>
          <li><a href="#"><i className="fas fa-file-alt"></i> {!isCollapsed && 'Account Statement'}</a></li>
          <li><a href="#"><i className="fas fa-address-book"></i> {!isCollapsed && 'Contacts'}</a></li>
          <li><a href="#"><i className="fas fa-handshake"></i> {!isCollapsed && 'Vendor Payments'}</a></li>
          <li><a href="#"><i className="fas fa-file-invoice"></i> {!isCollapsed && 'Tax Payments'}</a></li>
          <li><a href="#"><i className="fas fa-link"></i> {!isCollapsed && 'Payout Links'}</a></li>
          <li><a href="#"><i className="fas fa-calendar-alt"></i> {!isCollapsed && 'Payroll'}</a></li>
          <li><a href="#"><i className="fas fa-chart-line"></i> {!isCollapsed && 'Reports'}</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideHeader;
