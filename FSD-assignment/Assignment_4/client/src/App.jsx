import { useState, useEffect } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import RequestForm from './components/RequestForm';
import RequestList from './components/RequestList';
import Toast from './components/Toast';
import './index.css';

function App() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRequest, setEditingRequest] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info', title = '') => {
    if (!title) {
        title = type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Info';
    }
    setToast({ message, type, title });
    setTimeout(() => setToast(null), 4000);
  };

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/requests');
      if (!res.ok) throw new Error('Failed to fetch requests');
      const data = await res.json();
      setRequests(data);
    } catch (error) {
      showToast('Could not fetch requests.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleCreate = async (formData) => {
    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to submit');
      showToast('Request submitted successfully!', 'success');
      fetchRequests();
    } catch (error) {
      showToast('Something went wrong.', 'error');
      throw error;
    }
  };

  const handleUpdate = async (id, formData) => {
    try {
      const res = await fetch(`/api/requests/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to update');
      showToast('Request updated successfully!', 'success');
      setEditingRequest(null);
      fetchRequests();
    } catch (error) {
      showToast('Could not update the request.', 'error');
      throw error;
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this request?')) return;
    try {
      const res = await fetch(`/api/requests/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      showToast('Request deleted successfully!', 'success');
      fetchRequests();
    } catch (error) {
      showToast('Could not delete the request.', 'error');
    }
  };

  const handleEdit = (request) => {
    setEditingRequest(request);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingRequest(null);
  };

  return (
    <>
      {toast && <Toast title={toast.title} message={toast.message} type={toast.type} />}
      <Header />
      <main className="dashboard">
        <div className="dashboard-left">
          <RequestForm 
            onCreate={handleCreate} 
            onUpdate={handleUpdate} 
            editingRequest={editingRequest}
            onCancelEdit={handleCancelEdit}
          />
        </div>
        <div className="dashboard-right">
          <Stats requests={requests} />
          <RequestList 
            requests={requests} 
            loading={loading} 
            onEdit={handleEdit} 
            onDelete={handleDelete}
            onRefresh={fetchRequests}
          />
        </div>
      </main>
    </>
  );
}

export default App;
