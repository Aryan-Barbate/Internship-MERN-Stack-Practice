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
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose} 
      />

      {/* Dialog Window */}
      <div className="relative w-full max-w-xl nb-card bg-white dark:bg-[#1C1C24] border-3 border-black rounded-xl shadow-[8px_8px_0px_0px_#000] overflow-hidden animate-pop z-10 max-h-[90vh] flex flex-col p-0">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 nb-card-yellow border-b-3 border-black rounded-t-lg rounded-b-none">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-black text-[#CCFF00] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <Sparkles className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-black">
                {bookToEdit ? 'EDIT BOOK DETAILS' : 'ADD NEW BOOK'}
              </h2>
              <p className="text-xs font-bold text-black/80">Enter details to update your literature vault</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white text-black border-2 border-black flex items-center justify-center font-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FF4D4D] hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-wider mb-1">
                Book Title <span className="text-[#FF4D4D]">*</span>
              </label>
              <div className="relative">
                <BookOpen className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black pointer-events-none stroke-[2.5]" />
                <input
                  type="text"
                  placeholder="e.g. The Great Gatsby"
                  value={formData.bookName}
                  onChange={(e) => handleChange('bookName', e.target.value)}
                  className="nb-input nb-input-has-icon"
                />
              </div>
              {errors.bookName && <p className="text-xs font-extrabold text-[#FF4D4D] mt-1">{errors.bookName}</p>}
            </div>

            {/* Author */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1">
                Author <span className="text-[#FF4D4D]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black pointer-events-none stroke-[2.5]" />
                <input
                  type="text"
                  placeholder="e.g. F. Scott Fitzgerald"
                  value={formData.bookAuthor}
                  onChange={(e) => handleChange('bookAuthor', e.target.value)}
                  className="nb-input nb-input-has-icon"
                />
              </div>
              {errors.bookAuthor && <p className="text-xs font-extrabold text-[#FF4D4D] mt-1">{errors.bookAuthor}</p>}
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1">
                Price ($ USD) <span className="text-[#FF4D4D]">*</span>
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black pointer-events-none stroke-[2.5]" />
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="14.99"
                  value={formData.bookPrice}
                  onChange={(e) => handleChange('bookPrice', e.target.value)}
                  className="nb-input nb-input-has-icon"
                />
              </div>
              {errors.bookPrice && <p className="text-xs font-extrabold text-[#FF4D4D] mt-1">{errors.bookPrice}</p>}
            </div>

            {/* Genre */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1">Genre</label>
              <div className="relative">
                <Tag className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black pointer-events-none stroke-[2.5] z-10" />
                <select
                  value={formData.genre}
                  onChange={(e) => handleChange('genre', e.target.value)}
                  className="nb-input nb-input-has-icon cursor-pointer font-bold"
                >
                  {GENRES.map(g => (
                    <option key={g} value={g} className="bg-white dark:bg-[#1C1C24] text-black dark:text-white">{g}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Publish Date */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1">
                Publication Date <span className="text-[#FF4D4D]">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black pointer-events-none stroke-[2.5] z-10" />
                <input
                  type="date"
                  value={formData.publishDate}
                  onChange={(e) => handleChange('publishDate', e.target.value)}
                  className="nb-input nb-input-has-icon cursor-pointer"
                />
              </div>
              {errors.publishDate && <p className="text-xs font-extrabold text-[#FF4D4D] mt-1">{errors.publishDate}</p>}
            </div>

            {/* Rating */}
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-wider mb-1">
                Rating ({formData.rating} / 5 Stars)
              </label>
              <div className="flex items-center gap-3 p-3 bg-black/5 dark:bg-white/5 border-2 border-black rounded-lg">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleChange('rating', star)}
                    className="p-1 hover:scale-125 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= formData.rating
                          ? 'fill-[#FFDE59] text-black stroke-[2.5]'
                          : 'text-black/30 dark:text-white/30 stroke-[2]'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-wider mb-1">Summary / Notes</label>
              <textarea
                rows="3"
                placeholder="Key takeaways or synopsis..."
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="nb-input resize-none"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t-2 border-black/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="nb-btn nb-btn-white"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="nb-btn nb-btn-yellow"
            >
              {bookToEdit ? 'SAVE CHANGES' : 'ADD TO VAULT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
