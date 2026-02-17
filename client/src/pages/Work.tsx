import { ArrowRight, Globe, Lock, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const Work = () => {
    return (
        <div className="pt-24 min-h-screen bg-transparent dark:bg-transparent transition-colors duration-300">
            {/* Header */}
            <section className="bg-bg-secondary dark:bg-gradient-to-b dark:from-[#020617] dark:to-[#0f172a] py-20 px-6 relative overflow-hidden">
                <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold tracking-wide uppercase">
                        Our Portfolio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight">
                        Selected <span className="text-blue-600 italic">Works</span>.
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A collection of high-performance systems where technical precision meets business impact. Engineered for scale, built for longevity.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
                {/* Case Study 1 */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                            <span className="text-blue-600 dark:text-blue-400">Web Development</span>
                            <span className="w-12 h-px bg-gray-200 dark:bg-gray-700"></span>
                            <span>2024</span>
                        </div>
                        <h2 className="text-4xl font-bold text-text-main leading-tight">
                            Urban Grind Cafe
                        </h2>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Local Coffee Shop Chain</p>

                        <div className="space-y-6 pt-4">
                            <div className="premium-card p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Globe className="w-3 h-3" /></div>
                                    <h4 className="font-bold text-text-main text-sm uppercase tracking-wide">Problem</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Lost 30% of lunch rush revenue because phone orders kept the line too long and staff too busy.
                                </p>
                            </div>
                            <div className="premium-card p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Code2 className="w-3 h-3" /></div>
                                    <h4 className="font-bold text-text-main text-sm uppercase tracking-wide">Solution</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    A custom mobile-order website that lets customers order ahead. Integrated directly with their kitchen printer.
                                </p>
                            </div>
                            <div className="premium-card p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Lock className="w-3 h-3" /></div>
                                    <h4 className="font-bold text-text-main text-sm uppercase tracking-wide">Outcome</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Online orders now make up 45% of daily revenue. Wait times dropped by 10 minutes.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-6">
                            {['Next.js', 'Stripe', 'Twilio', 'Square API'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-bg-primary border border-gray-200 dark:border-white/10 text-text-muted text-xs rounded-full font-medium shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <Link to="/contact" className="flex items-center gap-2 text-sm font-semibold text-text-main hover:text-blue-600 transition-colors border px-4 py-2 rounded-full mt-4 hover:shadow-md inline-flex">
                            Visit Live Site <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="premium-shadow bg-bg-secondary dark:bg-slate-900/50 dark:border dark:border-white/5 rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden group">
                        {/* Placeholder image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white transition-opacity group-hover:opacity-75"></div>
                        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047" alt="Cafe Website" className="relative z-10 rounded shadow-sm opacity-90 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 premium-shadow bg-bg-secondary dark:bg-slate-900/50 dark:border dark:border-white/5 rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 transition-opacity group-hover:opacity-75"></div>
                        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068" alt="Clinic Booking" className="relative z-10 rounded shadow-sm opacity-90 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="flex items-center gap-4 text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                            <span className="text-blue-600 dark:text-blue-400">AI Automation</span>
                            <span className="w-12 h-px bg-gray-200 dark:bg-gray-700"></span>
                            <span>2024</span>
                        </div>
                        <h2 className="text-4xl font-bold text-text-main leading-tight">
                            Radiant Skin Clinic
                        </h2>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Dermatology Practice</p>

                        <div className="space-y-6 pt-4">
                            <div className="premium-card p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Globe className="w-3 h-3" /></div>
                                    <h4 className="font-bold text-text-main text-sm uppercase tracking-wide">Problem</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Receptionists were overwhelmed with repetitive questions about pricing and availability, missing real appointment calls.
                                </p>
                            </div>
                            <div className="premium-card p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Code2 className="w-3 h-3" /></div>
                                    <h4 className="font-bold text-text-main text-sm uppercase tracking-wide">Solution</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Built an AI Chatbot that answers FAQ, qualifies patients, and books appointments directly into their calendar 24/7.
                                </p>
                            </div>
                            <div className="premium-card p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Lock className="w-3 h-3" /></div>
                                    <h4 className="font-bold text-text-main text-sm uppercase tracking-wide">Outcome</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    The AI now handles 70% of initial inquiries. Front desk staff can focus on in-person patients.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-6">
                            {['OpenAI API', 'React', 'Calendly', 'Node.js'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-bg-primary border border-gray-200 dark:border-white/10 text-text-muted text-xs rounded-full font-medium shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <Link to="/contact" className="flex items-center gap-2 text-sm font-semibold text-text-main hover:text-blue-600 transition-colors border px-4 py-2 rounded-full mt-4 hover:shadow-md inline-flex">
                            See The Results <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </section>

            <CTA />
        </div>
    );
};

export default Work;
