import React from 'react';

function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default StatsCard;
