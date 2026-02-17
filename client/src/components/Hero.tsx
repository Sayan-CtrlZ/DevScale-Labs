import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroDashboard from '../assets/hero-dashboard.png';
import HeroDashboardDark from '../assets/hero-dashboard-dark.png';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-transparent pt-24 pb-20 lg:pt-32 lg:pb-32 transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide uppercase shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                        Special Offer from DevScale Labs
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-extrabold text-text-main leading-[1.1] tracking-tight"
                    >
                        Scale Your Business and Automate Growth with <span className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 py-1">
                            DevScale Labs
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-text-muted max-w-lg leading-relaxed font-medium"
                    >
                        We build websites and AI tools that get you more customers while you sleep. Perfect for cafes, restaurants, and local brands.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                    >
                        <Link to="/start-project" className="group bg-blue-600 text-white px-6 py-3 rounded-full text-base font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                            Get Your Free Audit
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/work" className="group bg-bg-primary text-text-main border-2 border-gray-100 dark:border-white/10 px-6 py-3 rounded-full text-base font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                            View Case Studies
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="pt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-bold text-text-muted border-t border-gray-100 dark:border-white/5"
                    >
                        <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Flat Monthly Pricing</span>
                        </div>
                        <div className="w-px h-5 bg-gray-200 dark:bg-white/10 hidden sm:block"></div>
                        <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Trusted by 100+ Brands</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual - Glass Composition */}
                <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-100/50 dark:bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>

                    {/* 1. The Growth Dashboard (Central, Back) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[55%] w-[600px] z-10 hover:scale-[1.05] hover:-translate-y-[57%] transition-all duration-1000 ease-in-out drop-shadow-2xl will-change-transform">
                        <img
                            src={HeroDashboard}
                            alt="Growth Dashboard"
                            width={600}
                            height={420}
                            loading="eager"
                            decoding="async"
                            className="dark:hidden w-full h-auto object-contain rounded-3xl border border-white/20 shadow-2xl"
                        />
                        <img
                            src={HeroDashboardDark}
                            alt="Growth Dashboard Dark"
                            width={600}
                            height={420}
                            loading="eager"
                            decoding="async"
                            className="hidden dark:block w-full h-auto object-contain rounded-3xl border border-white/10 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
