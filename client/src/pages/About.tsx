import { Code2, Target, Users, Zap, Award, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

import HarshImg from '../assets/Harsh.jpeg';
import SayanImg from '../assets/Sayan.png';
import PoojaImg from '../assets/Pooja.jpeg';

const philosophy = [
    {
        icon: Code2,
        title: 'Simplicity First',
        description: 'We believe technology should simplify your life, not complicate it. No jargon, just results.'
    },
    {
        icon: Zap,
        title: 'Speed Wins',
        description: 'In the local market, speed is everything. We launch fast so you can start growing immediately.'
    },
    {
        icon: Award,
        title: 'Built for Growth',
        description: 'Our systems are designed to handle your first 10 customers and your next 10,000.'
    }
];

const team = [
    {
        name: 'Harshvardhan Mewada',
        role: 'Co-founder & CEO',
        quote: 'Data Science student at IIT Madras. AI Automation Architect and ML developer specializing in high-performance enterprise systems.',
        image: HarshImg,
        linkedin: 'https://www.linkedin.com/in/harshvardhan-singh-mewada/'
    },
    {
        name: 'Sayan Shil',
        role: 'Co-founder & CTO',
        quote: 'Data Science student at IIT Madras. Full Stack Software Developer focused on building scalable, reliable, and user-centric digital products.',
        image: SayanImg,
        linkedin: 'https://www.linkedin.com/in/22sayanshil/'
    },
    {
        name: 'Pooja Mandal',
        role: 'Co-founder & COO',
        quote: 'Data Science student at IIT Madras. Shaping the operational excellence and strategic growth of DevScale Labs.',
        image: PoojaImg,
        linkedin: 'https://www.linkedin.com/in/pooja-mandal-a4276b376/'
    }
];

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-transparent transition-colors duration-300">
            {/* Header */}
            <section className="bg-transparent border-b border-gray-100 dark:border-white/5 pt-20 pb-32 px-6 relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gray-100 rounded-full blur-3xl opacity-50 -z-10"></div>

                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-block px-3 py-1 border border-gray-200 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        About the Studio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight">
                        Big Tech Tools. <br />
                        <span className="text-blue-600 italic">Small Business</span> Heart.
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        DevScale Labs is dedicated to leveling the playing field. We bring enterprise-grade web development and AI automation to Main Street.
                    </p>
                    <div className="flex justify-center gap-4 pt-6">
                        <Link to="/start-project" className="bg-[#0a0f1c] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                            Start a Project
                        </Link>
                        <Link to="/work" className="bg-bg-primary border border-gray-200 dark:border-white/10 text-text-main px-6 py-3 rounded-full text-sm font-medium hover:bg-bg-secondary transition-colors">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-text-main">Our 'Growth First'<br />Philosophy</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">We don't care about buzzwords. We care about what actually moves the needle for your business.</p>
                            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {philosophy.map((item, idx) => (
                                <div key={idx} className="premium-card p-6 rounded-xl flex gap-4 transition-all duration-300 hover:translate-x-2">
                                    <div className="mt-1 p-2 bg-blue-50 rounded-lg text-blue-600 h-fit">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-main">{item.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" alt="DevScale Labs Office" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-bg-primary p-6 rounded-xl shadow-xl max-w-xs border border-gray-100 dark:border-white/10">
                            <p className="font-serif italic text-lg text-gray-800 mb-2">"We don't just ship features; we engineer competitive advantages."</p>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">— Founder's Pledge</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="py-24 bg-transparent border-y border-gray-100 dark:border-white/5 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-text-main mb-4">A Vision for the Digital Future</h2>
                    <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-bg-primary p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 text-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-4">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To replace expensive, clunky agencies with agile, results-driven engineering. We are committed to building high-performance systems that don't just function—they excel. By integrating advanced automation and custom code, we provide the technical leverage needed to double your revenue and streamline your operations for long-term growth.
                        </p>
                    </div>
                    <div className="bg-bg-primary p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-4">Our Vision</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            A world where every small business owner has access to the same powerful automation and marketing tools as Fortune 500 companies. We envision a future where sophisticated technology is accessible to everyone, ensuring that local enterprises can thrive in a digital-first economy with the help of enterprise-grade AI and cloud engineering.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-text-main mb-4">The Minds Behind the Systems</h2>
                    <p className="text-gray-600 dark:text-gray-300">Meet the lead engineers and architects driving our technical vision.</p>
                    <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="text-center group premium-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative w-40 h-40 mx-auto mb-8">
                                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-[48px] transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                                <img src={member.image} alt={member.name} className="relative z-10 w-40 h-40 rounded-[48px] object-cover border-4 border-white dark:border-slate-900 shadow-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main">{member.name}</h3>
                            <div className="inline-block px-3 py-1 bg-bg-secondary rounded-full text-xs font-medium text-blue-600 mt-2 mb-4 border border-gray-100 dark:border-white/10">
                                {member.role}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic px-4">
                                {member.quote}
                            </p>
                            <div className="mt-6 flex justify-center">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default About;
