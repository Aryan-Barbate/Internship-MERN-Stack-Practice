import React from 'react';
import BookCard from './BookCard';
import { Search, LayoutGrid, List, SlidersHorizontal, BookX, Heart } from 'lucide-react';

const GENRE_FILTERS = ['All', 'Favorites', 'Fiction', 'Classic', 'Sci-Fi', 'Dystopian', 'Romance', 'Mystery', 'Non-Fiction'];

const BookList = ({
  books,
  searchQuery,
  setSearchQuery,
  selectedGenre,
  setSelectedGenre,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  onEdit,
  onDelete,
  onToggleFavorite,
  onResetFilters,
  totalBooksCount
}) => {
  return (
    <section className="space-y-6" aria-label="Book Collection">
      {/* Controls & Filter Panel */}
      <div className="wise-card space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none z-10" />
            <input
              type="text"
              placeholder="Search title, author, description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="wise-input wise-input-has-icon pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 caption font-bold wise-badge-sage px-2 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Controls: Sort & Layout */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 opacity-60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="wise-input py-2 px-3 text-sm font-semibold min-w-[140px]"
              >
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Published</option>
                <option value="oldest">Oldest Published</option>
              </select>
            </div>

            {/* Grid / List toggle */}
            <div className="flex items-center p-1 wise-card-sage rounded-2xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'grid' ? 'bg-[#9fe870] text-[#0e0f0c]' : 'opacity-70 hover:opacity-100'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'list' ? 'bg-[#9fe870] text-[#0e0f0c]' : 'opacity-70 hover:opacity-100'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Genre Pill Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
          {GENRE_FILTERS.map((genre) => {
            const isSelected = selectedGenre === genre;
            return (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#9fe870] text-[#0e0f0c] shadow-sm'
                    : 'wise-badge-sage hover:opacity-80'
                }`}
              >
                {genre === 'Favorites' && <Heart className={`w-3 h-3 ${isSelected ? 'fill-[#0e0f0c]' : 'text-[#d03238]'}`} />}
                <span>{genre}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between px-1">
        <p className="body-sm">
          Showing <span className="font-bold">{books.length}</span> of {totalBooksCount} books
          {selectedGenre !== 'All' && <span> in <span className="font-bold text-[#9fe870]">{selectedGenre}</span></span>}
        </p>

        {(searchQuery || selectedGenre !== 'All') && (
          <button
            onClick={onResetFilters}
            className="caption font-bold hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Empty State */}
      {books.length === 0 && (
        <div className="wise-card-sage p-12 text-center my-8">
          <div className="w-16 h-16 rounded-2xl bg-[#9fe870]/20 text-[#9fe870] flex items-center justify-center mx-auto mb-4">
            <BookX className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-black mb-1">No Books Found</h3>
          <p className="body-md max-w-sm mx-auto mb-6">
            We couldn't find any books matching your search query or genre selection.
          </p>
          <button
            onClick={onResetFilters}
            className="wise-btn wise-btn-secondary"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Book Grid / List */}
      {books.length > 0 && (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-3'
          }
        >
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              viewMode={viewMode}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BookList;