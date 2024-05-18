import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import newsData from "../../assets/data/News.json";

const News = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expandedNews, setExpandedNews] = useState({});

  const handleReadMore = (e, id) => {
    e.preventDefault();
    setExpandedNews({ ...expandedNews, [id]: true });
  };

  const handleReadLess = (e, id) => {
    e.preventDefault();
    setExpandedNews({ ...expandedNews, [id]: false });
  };

  const news = newsData;

  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-10 mb-10 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="card-container" data-aos="fade-up">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  {item.content.length > 50 && !expandedNews[item.id] ? (
                    <>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.content.slice(0, 50)}...
                        <a href="#" className="ml-1 text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadMore(e, item.id)}>
                          Read More
                        </a>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item.content}</p>
                      {expandedNews[item.id] && (
                        <p className="mt-2">
                          <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadLess(e, item.id)}>
                            Read Less
                          </a>
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
