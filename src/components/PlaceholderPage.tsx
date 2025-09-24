import React from 'react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center justify-center h-full text-white bg-slate-900">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-slate-400">This page is under construction.</p>
        </div>
    </div>
);

export default PlaceholderPage;
