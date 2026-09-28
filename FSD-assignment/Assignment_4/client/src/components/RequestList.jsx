import React from 'react';
import RequestCard from './RequestCard';
import { ArrowsClockwise, Spinner, EnvelopeSimpleOpen, WarningOctagon } from '@phosphor-icons/react';

function RequestList({ requests, loading, onEdit, onDelete, onRefresh }) {
  if (loading) {
    return (
      <section className="requests-section">
        <div className="section-header">
          <h2>Your Requests</h2>
        </div>
        <div className="loading-state">
          <Spinner className="ph-spin" size={32} />
          <p>Loading requests...</p>
        </div>
      </section>
    );
  }

  // Sort by createdAt descending
  const sortedRequests = [...requests].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="requests-section">
      <div className="section-header">
        <h2>Your Requests</h2>
        <button className="btn-icon" onClick={onRefresh} title="Refresh">
          <ArrowsClockwise weight="bold" />
        </button>
      </div>
      
      <div className="requests-list">
        {sortedRequests.length === 0 ? (
          <div className="empty-state">
            <EnvelopeSimpleOpen size={48} className="empty-icon" />
            <h3>No requests yet</h3>
            <p>Submit your first campus request using the form.</p>
          </div>
        ) : (
          sortedRequests.map(req => (
            <RequestCard 
              key={req.id} 
              request={req} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))
        )}
      </div>
    </section>
  );
}

export default RequestList;
