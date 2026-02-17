import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

import devscaleLogo from '../assets/LOGO (2).png';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Work', path: '/work' },
        { name: 'About', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOpen
                ? 'bg-bg-primary border-transparent'
                : 'bg-bg-primary/60 backdrop-blur-md border-b border-gray-100 dark:border-white/10'
                }`}>
                <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
                    {/* Logo - Left */}
                    <Link to="/" className="flex items-center gap-2 relative z-50 transition-opacity hover:opacity-90">
                        <img src={devscaleLogo} alt="DevScale Labs" className="h-10 md:h-12 w-auto rounded-xl border border-gray-200 dark:border-white/10" />
                    </Link>

                    {/* Navigation Links - Center (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium text-text-muted dark:text-white/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Links & CTA */}
                    <div className="flex items-center gap-3 md:gap-6">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 md:p-3 rounded-full hover:bg-bg-secondary text-text-muted dark:text-white/70 hover:text-text-main dark:hover:text-white transition-colors transform hover:scale-110 active:scale-95"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5 md:w-6 md:h-6" /> : <Sun className="w-5 h-5 md:w-6 md:h-6" />}
                        </button>

                        <Link to="/start-project" className="hidden sm:block bg-primary text-bg-primary px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                            Start a Project
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-xl bg-bg-secondary text-text-main dark:text-white relative z-50 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-bg-primary md:hidden pt-24 px-6 overflow-y-auto"
                    >
                        {/* Background Liquid Glow */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

                        <div className="flex flex-col space-y-6 pb-20">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-3xl font-bold text-text-main hover:text-blue-600 transition-colors flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <motion.div
                                            className="w-8 h-1 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-200"
                                        />
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                                className="pt-8"
                            >
                                <Link
                                    to="/start-project"
                                    className="block w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    Start a Project
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-12 text-center"
                            >
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Engineering excellence for the modern enterprise.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
