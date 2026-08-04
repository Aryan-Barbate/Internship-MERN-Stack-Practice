import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AddBookPage from './components/AddBookPage';
import EditBookPage from './components/EditBookPage';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { baseBookURL } from '../axiosInstance';
import './index.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Fetch books from backend API on mount
  useEffect(() => {
    const fetchBooksFromAPI = async () => {
      try {
        const response = await baseBookURL.get('/books');
        if (response.data && Array.isArray(response.data.BookList)) {
          setBooks(response.data.BookList);
        }
      } catch (error) {
        console.error('Error fetching books from backend server:', error.message);
      }
    };
    fetchBooksFromAPI();
  }, []);

  const addToast = useCallback((message, type = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  const handleDismissToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleSaveBook = useCallback(async (bookData) => {
    const targetId = bookData._id || bookData.id;
    const isEdit = targetId !== undefined && targetId !== null && targetId !== '';

    if (isEdit) {
      // Update existing book
      try {
        if (typeof targetId === 'string' && targetId.length === 24) {
          const res = await baseBookURL.put(`/books/${targetId}`, bookData);
          const updatedBook = res.data?.data || { ...bookData, _id: targetId };
          setBooks(prev =>
            prev.map(b => (String(b._id || b.id) === String(targetId) ? updatedBook : b))
          );
        } else {
          setBooks(prev =>
            prev.map(b => (String(b._id || b.id) === String(targetId) ? { ...b, ...bookData } : b))
          );
        }
        addToast(`Updated details for "${bookData.bookName}"`, 'success');
      } catch (error) {
        console.error('API Edit Error, applying local update:', error);
        setBooks(prev =>
          prev.map(b => (String(b._id || b.id) === String(targetId) ? { ...b, ...bookData } : b))
        );
        addToast(`Updated details for "${bookData.bookName}"`, 'success');
      }
    } else {
      // Create new book
      try {
        const res = await baseBookURL.post('/books', bookData);
        const newBook = res.data?.data || { ...bookData, id: Date.now() };
        setBooks(prev => [newBook, ...prev]);
        addToast(`Added "${bookData.bookName}" to collection`, 'success');
      } catch (error) {
        console.error('API Create Error, applying local creation:', error);
        setBooks(prev => [{ ...bookData, id: Date.now() }, ...prev]);
        addToast(`Added "${bookData.bookName}" to collection`, 'success');
      }
    }
  }, [addToast]);

  const handleDeleteBook = useCallback(async (id) => {
    const target = books.find(b => String(b._id || b.id) === String(id));
    if (!target) return;

    if (window.confirm(`Are you sure you want to remove "${target.bookName}"?`)) {
      try {
        if (String(id).length === 24) {
          // Delete from Express backend (DELETE /books/:id)
          await baseBookURL.delete(`/books/${id}`);
        }
      } catch (error) {
        console.error('API Delete Error:', error);
      }
      setBooks(prev => prev.filter(b => String(b._id || b.id) !== String(id)));
      addToast(`Removed "${target.bookName}" from library`, 'info');
    }
  }, [books, addToast]);

  const handleToggleFavorite = useCallback(async (id) => {
    const target = books.find(b => String(b._id || b.id) === String(id));
    if (!target) return;

    const nextState = !target.isFavorite;
    try {
      if (String(id).length === 24) {
        await baseBookURL.put(`/books/${id}`, { ...target, isFavorite: nextState });
      }
    } catch (error) {
      console.error('API Favorite Toggle Error:', error);
    }

    setBooks(prev =>
      prev.map(b => (String(b._id || b.id) === String(id) ? { ...b, isFavorite: nextState } : b))
    );
    addToast(
      nextState
        ? `Marked "${target.bookName}" as favorite`
        : `Removed "${target.bookName}" from favorites`,
      'info'
    );
  }, [books, addToast]);

  return (
    <BrowserRouter>
      <div className="min-h-screen pb-16 transition-colors duration-200">
        {/* Toast Container */}
        <div className="fixed top-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto">
              <ToastNotification
                toast={toast}
                onClose={() => handleDismissToast(toast.id)}
              />
            </div>
          ))}
        </div>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={books}
                onDeleteBook={handleDeleteBook}
                onToggleFavorite={handleToggleFavorite}
                theme={theme}
                onToggleTheme={handleToggleTheme}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddBookPage
                onSaveBook={handleSaveBook}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditBookPage
                books={books}
                onSaveBook={handleSaveBook}
                addToast={addToast}
              />
            }
          />
          {/* Redirect unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// ToastNotification component (moved here for simplicity)
const ToastNotification = ({ toast, onClose }) => {
  const isError = toast.type === 'error';
  const isSuccess = toast.type === 'success';

  const bgStyle = isSuccess
    ? 'bg-[#CCFF00] text-black'
    : isError
    ? 'bg-[#FF4D4D] text-white'
    : 'bg-[#00E5FF] text-black';

  const Icon = isSuccess ? CheckCircle2 : isError ? AlertCircle : Info;

  return (
    <div className={`nb-card ${bgStyle} p-4 border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 min-w-280px max-w-md animate-slide-down`}>
      <Icon className="w-5 h-5 shrink-0 stroke-2.5" />
      <div className="flex-1 text-xs font-black uppercase tracking-wide">{toast.message}</div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors border border-black"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5 stroke-3" />
      </button>
    </div>
  );
};

export default App;