// @file src/components/Header.tsx

import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center container mx-auto pt-12 pb-4 px-4">
            <h1 className="text-3xl font-light tracking-wider">Task Manager</h1>
            <ThemeToggle />
        </div>
    );
};

export default Header;
