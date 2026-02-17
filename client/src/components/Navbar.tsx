import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

import devscaleLogo from '../assets/LOGO (2).png';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/60 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
                {/* Logo - Left */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={devscaleLogo} alt="DevScale Labs" className="h-12 w-auto rounded-xl border border-gray-200 dark:border-white/10" />
                </Link>

                {/* Navigation Links - Center */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-sm font-medium text-text-muted dark:text-white/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
                    <Link to="/services" className="text-sm font-medium text-text-muted dark:text-white/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link>
                    <Link to="/work" className="text-sm font-medium text-text-muted dark:text-white/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Work</Link>
                    <Link to="/about" className="text-sm font-medium text-text-muted dark:text-white/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
                    <Link to="/contact" className="text-sm font-medium text-text-muted dark:text-white/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link>
                </div>

                {/* Right Links & CTA */}
                <div className="flex items-center gap-6">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full hover:bg-bg-secondary text-text-muted dark:text-white/70 hover:text-text-main dark:hover:text-white transition-all transform hover:scale-110 active:scale-95"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                    </button>

                    <Link to="/start-project" className="bg-primary text-bg-primary px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                        Start a Project
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
