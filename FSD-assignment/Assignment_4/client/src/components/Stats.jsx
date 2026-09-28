import React from 'react';
import { Tray, Warning, FolderOpen } from '@phosphor-icons/react';

function Stats({ requests }) {
  const total = requests.length;
  const highPriority = requests.filter(r => r.priority === 'High' || r.priority === 'Critical').length;
  const open = requests.filter(r => r.status !== 'Resolved' && r.status !== 'Closed').length;

  return (
    <section className="stats-section">
      <div className="stat-card">
        <div className="stat-icon"><Tray weight="bold" /></div>
        <div className="stat-info">
          <span className="stat-value">{total}</span>
          <span className="stat-label">Total Requests</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon warning"><Warning weight="bold" /></div>
        <div className="stat-info">
          <span className="stat-value">{highPriority}</span>
          <span className="stat-label">High Priority</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon success"><FolderOpen weight="bold" /></div>
        <div className="stat-info">
          <span className="stat-value">{open}</span>
          <span className="stat-label">Open Requests</span>
        </div>
      </div>
    </section>
  );
}

export default Stats;
