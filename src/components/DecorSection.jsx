import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { decorIdeas, styles } from '../data';

export function StyleSelection({ selectedStyle, setSelectedStyle }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">اختر نمطك المفضل</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {styles.map((style) => (
          <button
            key={style.name}
            onClick={() => setSelectedStyle(style.name)}
            className={`relative rounded-xl overflow-hidden h-48 transition-all ${selectedStyle === style.name ? 'ring-2 ring-purple-500' : ''}`}
          >
            <img 
              src={style.image} 
              alt={style.name}
              data-image-request={style.dataImageRequest}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white p-3">
              {style.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function DecorIdeas() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">افكار ديكور مقترحة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decorIdeas.map((idea) => (
          <div key={idea.title} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              src={idea.image}
              alt={idea.title}
              data-image-request={idea.dataImageRequest}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{idea.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-purple-600">{idea.price} ر.س</span>
                <button className="text-gray-600 hover:text-purple-600">
                  <HeartIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}