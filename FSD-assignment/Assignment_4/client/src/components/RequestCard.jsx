import React from 'react';
import { Flag, Warning, ArrowDown, User, Clock, PencilSimple, Trash } from '@phosphor-icons/react';

function RequestCard({ request, onEdit, onDelete }) {
  const date = new Date(request.createdAt).toLocaleString(undefined, {
    month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'
  });

  const getPriorityIcon = () => {
    if (request.priority === 'High' || request.priority === 'Critical') return <Warning weight="fill" />;
    if (request.priority === 'Low') return <ArrowDown weight="bold" />;
    return <Flag weight="fill" />;
  };

  const shortId = request.id.substring(request.id.length - 5);

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <div>
          <span className="ticket-id">REQ-{shortId}</span>
          <div className="ticket-title">{request.category} Issue</div>
        </div>
        <div className="badges">
          <span className={`badge priority-${request.priority}`}>
            {getPriorityIcon()} {request.priority}
          </span>
        </div>
      </div>
      
      <div className="ticket-body">
        {request.description}
      </div>
      
      <div className="ticket-footer">
        <div className="ticket-meta">
          <div className="meta-item">
            <User /> {request.studentName}
          </div>
          <div className="meta-item">
            <Clock /> {date}
          </div>
        </div>
        <div className="ticket-actions">
          <button type="button" className="btn btn-outline" onClick={() => onEdit(request)} title="Edit Request">
            <PencilSimple /> Edit
          </button>
          <button type="button" className="btn btn-danger" onClick={() => onDelete(request.id)} title="Delete Request">
            <Trash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
