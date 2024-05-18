import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import albumData from '../../assets/data/Albums.json';
import { Link } from 'react-router-dom';

const AlbumList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expandedAlbum, setExpandedAlbum] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  // Обработчик изменения поискового запроса
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Обработчик отправки формы поиска
  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = albumData.filter(artist =>
      artist.albums.some(album => album.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredAlbums(filtered);
  };

  // Функция для отображения всех альбомов или отфильтрованных в зависимости от наличия поискового запроса
  const getAlbums = () => {
    if (searchTerm) {
      return filteredAlbums.map((artist) => (
        <React.Fragment key={artist.name}>
          {artist.albums.map((album) => (
            <div key={album.title} className="album-card bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
              <img src={album.image} alt={album.title} className="w-full h-48 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{artist.name}: {album.title}</h3>
                {expandedAlbum[album.title] ? (
                  <p className="text-sm text-gray-700 dark:text-gray-300">{album.description}</p>
                ) : (
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {album.description.length > 100 ? `${album.description.slice(0, 100)}...` : album.description}
                  </p>
                )}
                {album.description.length > 100 && (
                  <div className="mt-2">
                    {expandedAlbum[album.title] ? (
                      <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadLess(e, album.title)}>
                        Read Less
                      </a>
                    ) : (
                      <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadMore(e, album.title)}>
                        Read More
                      </a>
                    )}
                  </div>
                )}
                <Link to={`/album/${album.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  Go to Album
                </Link>
              </div>
            </div>
          ))}
        </React.Fragment>
      ));
    } else {
      return albumData.map((artist) => (
        <React.Fragment key={artist.name}>
          {artist.albums.map((album) => (
            <div key={album.title} className="album-card bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
              <img src={album.image} alt={album.title} className="w-full h-48 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{artist.name}: {album.title}</h3>
                {expandedAlbum[album.title] ? (
                  <p className="text-sm text-gray-700 dark:text-gray-300">{album.description}</p>
                ) : (
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {album.description.length > 100 ? `${album.description.slice(0, 100)}...` : album.description}
                  </p>
                )}
                {album.description.length > 100 && (
                  <div className="mt-2">
                    {expandedAlbum[album.title] ? (
                      <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadLess(e, album.title)}>
                        Read Less
                      </a>
                    ) : (
                      <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadMore(e, album.title)}>
                        Read More
                      </a>
                    )}
                  </div>
                )}
                <Link to={`/album/${album.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  Go to Album
                </Link>
              </div>
            </div>
          ))}
        </React.Fragment>
      ));
    }
  };

  // Обработчик для "Read More"
  const handleReadMore = (e, title) => {
    e.preventDefault();
    setExpandedAlbum({ ...expandedAlbum, [title]: true });
  };

  // Обработчик для "Read Less"
  const handleReadLess = (e, title) => {
    e.preventDefault();
    setExpandedAlbum({ ...expandedAlbum, [title]: false });
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-10 mb-10 text-center">Album List</h2>
        
        {/* Форма поиска */}
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Search albums..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Search</button>
        </form>

        {/* Отображение альбомов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getAlbums()}
        </div>
      </div>
    </section>
  );
};

export default AlbumList;
