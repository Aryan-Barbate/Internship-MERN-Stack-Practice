import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import BookList from './BookList';
import Stats from './Stats';

const Home = ({ books, onDeleteBook, onToggleFavorite, theme, onToggleTheme }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('title-asc');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

  const handleOpenAddModal = () => {
    navigate('/add');
  };

  const filteredAndSortedBooks = useMemo(() => {
    let result = books;

    if (selectedGenre === 'Favorites') {
      result = result.filter((b) => b.isFavorite);
    } else if (selectedGenre !== 'All') {
      result = result.filter((b) => b.genre === selectedGenre);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.bookName?.toLowerCase().includes(q) ||
          b.bookAuthor?.toLowerCase().includes(q) ||
          b.description?.toLowerCase().includes(q)
      );
    }

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case 'title-asc': return (a.bookName || '').localeCompare(b.bookName || '');
        case 'title-desc': return (b.bookName || '').localeCompare(a.bookName || '');
        case 'price-low': return Number(a.bookPrice || 0) - Number(b.bookPrice || 0);
        case 'price-high': return Number(b.bookPrice || 0) - Number(a.bookPrice || 0);
        case 'rating': return (b.rating || 0) - (a.rating || 0);
        case 'newest': return new Date(b.publishDate || 0) - new Date(a.publishDate || 0);
        case 'oldest': return new Date(a.publishDate || 0) - new Date(b.publishDate || 0);
        default: return 0;
      }
    });
  }, [books, selectedGenre, searchQuery, sortBy]);

  const totalValue = useMemo(() => {
    return books.reduce((sum, b) => sum + Number(b.bookPrice || 0), 0);
  }, [books]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setSortBy('title-asc');
  };

  return (
    <>
      <Header
        bookCount={books.length}
        totalValue={totalValue}
        onOpenAddModal={handleOpenAddModal}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* Book List / Controls */}
        <BookList
          books={filteredAndSortedBooks}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onDelete={onDeleteBook}
          onToggleFavorite={onToggleFavorite}
          onResetFilters={handleResetFilters}
          totalBooksCount={books.length}
        />

        {/* Statistics Insights Component */}
        <Stats books={books} />
      </main>
    </>
  );
};

export default Home;