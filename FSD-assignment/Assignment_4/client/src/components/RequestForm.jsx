import React, { useState, useEffect } from 'react';
import { User, Envelope, Tag, WarningCircle, TextAlignCenter, ArrowRight, Check, Spinner } from '@phosphor-icons/react';

function RequestForm({ onCreate, onUpdate, editingRequest, onCancelEdit }) {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    category: '',
    priority: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingRequest) {
      setFormData({
        studentName: editingRequest.studentName || '',
        email: editingRequest.email || '',
        category: editingRequest.category || '',
        priority: editingRequest.priority || '',
        description: editingRequest.description || ''
      });
    } else {
      resetForm();
    }
  }, [editingRequest]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingRequest) {
        await onUpdate(editingRequest.id, formData);
      } else {
        await onCreate(formData);
      }
      resetForm();
    } catch (error) {
      // Error handled by parent
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      email: '',
      category: '',
      priority: '',
      description: ''
    });
  };

  const handleCancel = () => {
    resetForm();
    if (onCancelEdit) onCancelEdit();
  };

  return (
    <section className="form-card">
      <div className="form-header">
        <h2>{editingRequest ? 'Edit Request' : 'Submit a Request'}</h2>
        {editingRequest && <span className="badge badge-edit">Edit Mode</span>}
      </div>
      
      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <div className="input-wrapper">
              <User />
              <input
                type="text"
                id="studentName"
                name="studentName"
                required
                placeholder="e.g. John Doe"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <Envelope />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@university.edu"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <div className="input-wrapper">
              <Tag />
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" disabled>Select Category</option>
                <option value="IT Support">IT Support</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Academic">Academic</option>
                <option value="Hostel">Hostel</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <div className="input-wrapper">
              <WarningCircle />
              <select
                id="priority"
                name="priority"
                required
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="" disabled>Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Problem Description</label>
          <div className="input-wrapper textarea-wrapper">
            <TextAlignCenter />
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              placeholder="Please describe the issue in detail..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          {editingRequest && (
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel Edit
            </button>
          )}
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? (
              <><Spinner className="ph-spin" /> <span>{editingRequest ? 'Updating...' : 'Submitting...'}</span></>
            ) : (
              <><span>{editingRequest ? 'Update Request' : 'Submit Request'}</span> {editingRequest ? <Check weight="bold" /> : <ArrowRight weight="bold" />}</>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

export default RequestForm;
