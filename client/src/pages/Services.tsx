import { Bot, BarChart3, Globe, Lock, Workflow, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';



const solutions = [
    {
        icon: Globe,
        title: 'Local Business Websites',
        description: 'Blazing fast, SEO-optimized sites perfect for restaurants, clinics, and service businesses.'
    },
    {
        icon: Bot,
        title: 'Customer Support AI',
        description: 'An AI receptionist that lives on your site, answering FAQs and capturing leads 24/7.'
    },
    {
        icon: BarChart3,
        title: 'Google & Yelp Growth',
        description: 'Automated review requests sent to your customers via SMS/Email to boost your reputation.'
    },
    {
        icon: Workflow,
        title: 'Appointment Systems',
        description: 'Stop playing phone tag. Let customers book directly on your calendar, synced in real-time.'
    },
    {
        icon: Lock,
        title: 'Secure Online Stores',
        description: 'Sell your products or services online with a secure, custom-branded e-commerce store.'
    },
    {
        icon: CheckCircle2,
        title: 'Business Audits',
        description: 'We analyze your current digital presence and finding hidden opportunities for growth.'
    }
];

const Services = () => {
    return (
        <div className="pt-24 min-h-screen bg-transparent dark:bg-transparent transition-colors duration-300">
            {/* Header */}
            <section className="bg-bg-secondary dark:bg-gradient-to-b dark:from-[#020617] dark:to-[#0f172a] py-20 px-6 relative overflow-hidden">
                <div className="hidden dark:block absolute -top-20 -right-20 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] -z-10"></div>
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold tracking-wide uppercase">
                        Our Expertise
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight">
                        Everything You Need <br />
                        <span className="text-blue-600">To Grow Online.</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        From stunning websites that capture leads to AI agents that manage them. We provide the complete toolkit for modern business growth.
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <Link to="/start-project" className="bg-[#0a0f1c] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors inline-block">
                            Start a Project
                        </Link>
                        <Link to="/start-project" className="bg-bg-primary border border-gray-200 dark:border-white/10 text-text-main px-6 py-3 rounded-full text-sm font-medium hover:bg-bg-secondary transition-colors inline-block">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Deep Dives */}
            <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
                {/* Web Infrastructure */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                            WEB DEVELOPMENT
                        </div>
                        <h2 className="text-4xl font-bold text-text-main leading-tight">
                            Websites that sell, not just sit there.
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Your website should be your best employee. We build high-speed, mobile-perfect sites designed to rank on Google and turn visitors into paying customers.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {['Mobile Optimized', 'SEO Ready', 'Fast Loading', 'Easy Editing'].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 group">
                                    <div className="mt-1 p-1 rounded-md bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                                        <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-main">{feature}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 pt-6">
                            {['React', 'Next.js', 'WordPress', 'Shopify'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-bg-secondary border border-gray-200 dark:border-white/10 text-text-muted text-xs rounded-full font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-900/50 dark:border dark:border-white/5 rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden premium-shadow">
                        {/* Placeholder for Design Image: Monitors/Setup */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50"></div>
                        <div className="relative z-10 text-gray-400 dark:text-gray-500">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" alt="Web Dev" className="rounded shadow-lg" />
                        </div>
                    </div>
                </div>

                {/* AI Automation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 bg-blue-50 dark:bg-blue-900/10 dark:border dark:border-blue-500/10 rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden premium-shadow group">
                        {/* Placeholder for Design Image: Abstract Nodes */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white"></div>
                        <div className="relative z-10 w-full h-full">
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070"
                                alt="AI Network"
                                className="w-full h-full object-cover rounded shadow-lg transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                            AI AUTOMATION
                        </div>
                        <h2 className="text-4xl font-bold text-text-main leading-tight">
                            Put your busywork on autopilot.
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Imagine an employee who works 24/7, never takes a break, and costs pennies per hour. That's what our AI agents do—handling support, bookings, and data entry.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {['Auto-Scheduling', 'Instant Replies', 'Review Management', 'Lead Qualification'].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-1">
                                        <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-main">{feature}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 pt-6">
                            {['ChatGPT', 'Claude', 'Zapier', 'Make.com'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Need Custom System CTA */}
            <section className="bg-blue-900 py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Need a Custom Integrated System?
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Most projects we take on are unique combinations of the above. We specialize in cross-functional systems that unify your entire digital operation.
                    </p>
                    <Link to="/start-project" className="bg-bg-primary text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-block">
                        Request a Custom Proposal
                    </Link>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-text-main mb-4">Specialized Solutions</h2>
                    <p className="text-gray-600 dark:text-gray-300">Focused technical implementations for specific business outcomes.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, idx) => (
                        <div key={idx} className="premium-card bg-bg-primary dark:bg-slate-900/50 dark:border-white/5 p-8 rounded-2xl transition-all duration-300 group">
                            <div className="w-10 h-10 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <sol.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3">{sol.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{sol.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default Services;
