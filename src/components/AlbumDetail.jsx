import React from 'react';
import { useParams } from 'react-router-dom';
import albumData from '../assets/data/Albums.json';

const AlbumDetail = () => {
  const { id } = useParams();
  const album = albumData.flatMap(artist => artist.albums).find(album => album.id === parseInt(id));

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="album-info">
          <img src={album.image} alt={album.title} className="w-full h-96 object-cover object-center mb-6" />
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-10 mb-6 text-center">{album.title}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">{album.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.songs.map((song, index) => (
            <div key={index} className="song-card-container" data-aos="fade-up">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{song.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Length: {song.length}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumDetail;
