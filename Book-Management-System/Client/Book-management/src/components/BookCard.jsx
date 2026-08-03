import React from 'react';
import { Star, Edit3, Trash2, Heart, Calendar, BookOpen } from 'lucide-react';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const getBookAge = (dateStr) => {
  if (!dateStr) return '';
  const year = new Date(dateStr).getFullYear();
  if (isNaN(year)) return '';
  const diff = new Date().getFullYear() - year;
  return diff <= 0 ? 'New' : `${diff} yr${diff > 1 ? 's' : ''} ago`;
};

const FavoriteButton = ({ isFavorite, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-2 rounded-full transition-all shrink-0 ${
      isFavorite
        ? 'bg-[#fee2e2] text-[#d03238] border border-[#d03238]/30'
        : 'bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20'
    }`}
    title={isFavorite ? 'Remove Favorite' : 'Mark Favorite'}
  >
    <Heart className={`w-4 h-4 shrink-0 ${isFavorite ? 'fill-[#d03238] text-[#d03238]' : 'opacity-60'}`} />
  </button>
);

const BookCard = ({ book, viewMode = 'grid', onEdit, onDelete, onToggleFavorite }) => {
  const bookId = book._id || book.id;
  const formattedPrice = `$${Number(book.bookPrice || 0).toFixed(2)}`;
  const bookAge = getBookAge(book.publishDate);

  if (viewMode === 'list') {
    return (
      <div className="wise-card wise-card-hover p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-12 h-14 rounded-2xl bg-[#e2f6d5] text-[#163300] flex items-center justify-center font-bold shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-base font-extrabold truncate">{book.bookName}</h3>
              <span className="wise-badge wise-badge-sage text-xs">
                {book.genre || 'General'}
              </span>
            </div>
            <p className="body-sm">
              by <span className="font-semibold">{book.bookAuthor}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-black/10">
          <div className="text-left sm:text-right">
            <div className="wise-badge wise-badge-green font-bold text-sm">
              {formattedPrice}
            </div>
            <div className="caption mt-0.5">{bookAge}</div>
          </div>

          <div className="flex items-center gap-1.5">
            <FavoriteButton isFavorite={book.isFavorite} onClick={() => onToggleFavorite(bookId)} />

            <button
              type="button"
              onClick={() => onEdit(book)}
              className="wise-btn wise-btn-secondary wise-btn-sm"
              title="Edit Book"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit</span>
            </button>

            <button
              type="button"
              onClick={() => onDelete(bookId)}
              className="p-2 text-[#d03238] hover:bg-[#fee2e2] rounded-full transition-colors"
              title="Delete Book"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="wise-card wise-card-hover flex flex-col justify-between h-full group">
      <div>
        {/* Header row: Genre & Favorite */}
        <div className="flex items-center justify-between mb-3">
          <span className="wise-badge wise-badge-sage text-xs">
            {book.genre || 'Fiction'}
          </span>

          <FavoriteButton isFavorite={book.isFavorite} onClick={() => onToggleFavorite(bookId)} />
        </div>

        {/* Title & Author */}
        <h3 className="text-xl font-extrabold line-clamp-2 mb-1.5 group-hover:opacity-80 transition-opacity">
          {book.bookName}
        </h3>
        <p className="body-sm mb-3">
          by <span className="font-semibold">{book.bookAuthor}</span>
        </p>

        {book.description && (
          <p className="body-sm line-clamp-2 mb-4 opacity-90">
            {book.description}
          </p>
        )}
      </div>

      <div>
        {/* Price & Rating badges */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-black/10 mb-4">
          <span className="wise-badge wise-badge-green font-bold text-sm px-3 py-1">
            {formattedPrice}
          </span>

          <div className="flex items-center gap-1 text-xs font-semibold text-[#b86700] bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-[#ffd11a]" />
            <span>{book.rating || 5}</span>
          </div>
        </div>

        {/* Footer info & Buttons */}
        <div className="flex items-center justify-between caption mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(book.publishDate)}
          </span>
          <span>{bookAge}</span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onEdit(book)}
            className="wise-btn wise-btn-secondary wise-btn-sm flex-1"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>

          <button
            type="button"
            onClick={() => onDelete(bookId)}
            className="wise-btn wise-btn-tertiary wise-btn-sm text-[#d03238] hover:bg-[#fee2e2]"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;