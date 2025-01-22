import React from 'react';
import { MagnifyingGlassIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <PaintBrushIcon className="h-8 w-8 text-purple-600" />
              <span className="mr-2 text-xl font-semibold text-gray-800">DecorAI</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              اكتشف تصميم منزلك المثالي حسب ميزانيتك
            </h1>
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن فكرة ديكور..."
                  className="w-full px-4 py-3 rounded-lg border-0 ring-1 ring-gray-300 focus:ring-2 focus:ring-purple-500 box-border"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}