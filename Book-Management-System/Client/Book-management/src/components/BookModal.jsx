import React, { useState, useEffect } from 'react';
import { X, BookOpen, User, DollarSign, Calendar, Tag, Star, Sparkles } from 'lucide-react';

const GENRES = ['Fiction', 'Classic', 'Sci-Fi', 'Dystopian', 'Romance', 'Mystery', 'Non-Fiction'];

const BookModal = ({ isOpen, onClose, onSave, bookToEdit = null }) => {
  const [formData, setFormData] = useState({
    bookName: '',
    bookAuthor: '',
    bookPrice: '',
    publishDate: '',
    genre: 'Fiction',
    rating: 5,
    description: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      bookName: bookToEdit?.bookName || '',
      bookAuthor: bookToEdit?.bookAuthor || '',
      bookPrice: bookToEdit?.bookPrice ? String(bookToEdit.bookPrice) : '',
      publishDate: bookToEdit?.publishDate || new Date().toISOString().split('T')[0],
      genre: bookToEdit?.genre || 'Fiction',
      rating: bookToEdit?.rating || 5,
      description: bookToEdit?.description || ''
    });
    setErrors({});
  }, [bookToEdit, isOpen]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.bookName.trim()) newErrors.bookName = 'Title is required';
    if (!formData.bookAuthor.trim()) newErrors.bookAuthor = 'Author is required';
    if (!formData.bookPrice) {
      newErrors.bookPrice = 'Price is required';
    } else if (isNaN(formData.bookPrice) || parseFloat(formData.bookPrice) < 0) {
      newErrors.bookPrice = 'Enter a valid price';
    }
    if (!formData.publishDate) newErrors.publishDate = 'Publish date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      ...(bookToEdit || {}),
      id: bookToEdit ? (bookToEdit.id || bookToEdit._id) : Date.now(),
      bookName: formData.bookName.trim(),
      bookAuthor: formData.bookAuthor.trim(),
      bookPrice: parseFloat(formData.bookPrice),
      publishDate: formData.publishDate,
      genre: formData.genre,
      rating: Number(formData.rating),
      description: formData.description.trim(),
      isFavorite: bookToEdit ? bookToEdit.isFavorite : false
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0e0f0c]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose} 
      />

      {/* Dialog */}
      <div className="relative w-full max-w-xl wise-card border border-black/10 rounded-[24px] shadow-2xl overflow-hidden animate-scale-up z-10 max-h-[90vh] flex flex-col p-0">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10 wise-card-sage rounded-t-[24px] rounded-b-none">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#9fe870] text-[#0e0f0c]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black">
                {bookToEdit ? 'Edit Book Details' : 'Add New Book'}
              </h2>
              <p className="caption">Fill in the fields below to update your collection</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:opacity-75 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block body-sm-strong mb-1">
                Book Title <span className="text-[#d03238]">*</span>
              </label>
              <div className="relative">
                <BookOpen className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="e.g. The Great Gatsby"
                  value={formData.bookName}
                  onChange={(e) => handleChange('bookName', e.target.value)}
                  className="wise-input wise-input-has-icon"
                />
              </div>
              {errors.bookName && <p className="caption text-[#d03238] mt-1">{errors.bookName}</p>}
            </div>

            {/* Author */}
            <div>
              <label className="block body-sm-strong mb-1">
                Author <span className="text-[#d03238]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="e.g. F. Scott Fitzgerald"
                  value={formData.bookAuthor}
                  onChange={(e) => handleChange('bookAuthor', e.target.value)}
                  className="wise-input wise-input-has-icon"
                />
              </div>
              {errors.bookAuthor && <p className="caption text-[#d03238] mt-1">{errors.bookAuthor}</p>}
            </div>

            {/* Price */}
            <div>
              <label className="block body-sm-strong mb-1">
                Price ($ USD) <span className="text-[#d03238]">*</span>
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="12.99"
                  value={formData.bookPrice}
                  onChange={(e) => handleChange('bookPrice', e.target.value)}
                  className="wise-input wise-input-has-icon"
                />
              </div>
              {errors.bookPrice && <p className="caption text-[#d03238] mt-1">{errors.bookPrice}</p>}
            </div>

            {/* Genre */}
            <div>
              <label className="block body-sm-strong mb-1">Genre</label>
              <div className="relative">
                <Tag className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
                <select
                  value={formData.genre}
                  onChange={(e) => handleChange('genre', e.target.value)}
                  className="wise-input wise-input-has-icon appearance-none"
                >
                  {GENRES.map(g => (
                    <option key={g} value={g} className="bg-slate-900 text-slate-100">{g}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Publish Date */}
            <div>
              <label className="block body-sm-strong mb-1">
                Publication Date <span className="text-[#d03238]">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
                <input
                  type="date"
                  value={formData.publishDate}
                  onChange={(e) => handleChange('publishDate', e.target.value)}
                  className="wise-input wise-input-has-icon"
                />
              </div>
              {errors.publishDate && <p className="caption text-[#d03238] mt-1">{errors.publishDate}</p>}
            </div>

            {/* Rating */}
            <div className="md:col-span-2">
              <label className="block body-sm-strong mb-1">
                Rating ({formData.rating} / 5 Stars)
              </label>
              <div className="flex items-center gap-2 p-2 wise-card-sage rounded-xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleChange('rating', star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-6 h-6 ${star <= formData.rating ? 'fill-[#ffd11a] text-[#b86700]' : 'text-slate-400'}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block body-sm-strong mb-1">Summary / Notes</label>
              <textarea
                rows="3"
                placeholder="Key takeaways or synopsis..."
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="wise-input resize-none"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-black/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="wise-btn wise-btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="wise-btn wise-btn-primary"
            >
              {bookToEdit ? 'Save Changes' : 'Add to Collection'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
