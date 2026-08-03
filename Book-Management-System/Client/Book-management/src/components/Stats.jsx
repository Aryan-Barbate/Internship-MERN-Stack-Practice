import React from 'react';
import { BookOpen, DollarSign, Tag, Heart, Award } from 'lucide-react';

const Stats = ({ books }) => {
  if (!books || books.length === 0) return null;

  const totalBooks = books.length;
  const totalValue = books.reduce((sum, b) => sum + (Number(b.bookPrice) || 0), 0);
  const avgPrice = totalValue / totalBooks;
  const favoritesCount = books.filter((b) => b.isFavorite).length;

  const genreCounts = books.reduce((acc, b) => {
    const genre = b.genre || 'Uncategorized';
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});

  const [topGenre, maxCount] = Object.entries(genreCounts).reduce(
    (max, curr) => (curr[1] > max[1] ? curr : max),
    ['N/A', 0]
  );

  const STAT_ITEMS = [
    {
      id: 'total',
      label: 'Collection Size',
      value: `${totalBooks} ${totalBooks === 1 ? 'Book' : 'Books'}`,
      subtext: 'Personal library items',
      icon: <BookOpen className="w-5 h-5 text-[#9fe870]" />,
      badgeBg: 'bg-[#9fe870]/20'
    },
    {
      id: 'value',
      label: 'Total Library Value',
      value: `$${totalValue.toFixed(2)}`,
      subtext: `Avg $${avgPrice.toFixed(2)} per book`,
      icon: <DollarSign className="w-5 h-5 text-[#2ead4b]" />,
      badgeBg: 'bg-[#2ead4b]/20'
    },
    {
      id: 'top-genre',
      label: 'Top Category',
      value: topGenre,
      subtext: `${maxCount} ${maxCount === 1 ? 'title' : 'titles'} in category`,
      icon: <Tag className="w-5 h-5 text-[#ffd11a]" />,
      badgeBg: 'bg-[#ffd11a]/20'
    },
    {
      id: 'favorites',
      label: 'Favorites',
      value: `${favoritesCount} Saved`,
      subtext: 'Bookmarked classics',
      icon: <Heart className="w-5 h-5 text-[#d03238]" />,
      badgeBg: 'bg-[#d03238]/20'
    }
  ];

  return (
    <section className="mt-12" aria-label="Collection Statistics">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-5 h-5" />
        <h2 className="text-2xl font-black tracking-tight">Collection Statistics</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STAT_ITEMS.map((stat) => (
          <article
            key={stat.id}
            className="wise-card wise-card-hover flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <span className="caption font-bold uppercase tracking-wider">
                {stat.label}
              </span>
              <div className={`p-2.5 rounded-2xl ${stat.badgeBg} shrink-0`}>
                {stat.icon}
              </div>
            </div>

            <div>
              <div className="text-2xl font-black tracking-tight mb-1 truncate">
                {stat.value}
              </div>
              <p className="caption truncate">
                {stat.subtext}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Stats;