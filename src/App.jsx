import React, { useState } from 'react';
import Header from './components/Header';
import { StyleSelection, DecorIdeas } from './components/DecorSection';

export default function App() {
  const [budget, setBudget] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">الميزانية المتاحة (ريال سعودي)</h2>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 box-border"
            placeholder="أدخل ميزانيتك..."
          />
        </div>
      </div>

      <StyleSelection selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
      <DecorIdeas />
    </div>
  );
}