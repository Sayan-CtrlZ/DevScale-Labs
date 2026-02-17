
import { ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import devscaleLogo from '../assets/LOGO (2).png';

const Footer = () => {
    return (
        <footer className="bg-[#050a14] border-t border-white/5 py-20 text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <img src={devscaleLogo} alt="DevScale Labs" className="h-12 w-auto rounded-xl border border-white/10 p-1" />
                    </div>
                    <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                        Engineering high-performance digital systems with precision and care for the modern enterprise.
                    </p>

                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider opacity-80">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400 dark:text-gray-500">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link to="/start-project" className="hover:text-white transition-colors">Start a Project</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider opacity-80">Connect</h4>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">Receive our monthly briefing on system design and automation.</p>
                    <div className="flex items-center gap-2 border-b border-gray-700 pb-2 focus-within:border-blue-500 transition-colors">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-600"
                        />
                        <button className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="https://www.linkedin.com/company/devscale-labs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-blue-400 transition-all border border-white/5"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/devscale.labs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-pink-400 transition-all border border-white/5"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 dark:text-gray-400">
                <span>© 2026 DevScale Labs. All rights reserved.</span>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-gray-400 dark:text-gray-500 transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-gray-400 dark:text-gray-500 transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
