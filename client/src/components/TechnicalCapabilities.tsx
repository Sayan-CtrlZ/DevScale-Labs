
import { Code2, Bot, BarChart3, Globe, Lock, Workflow, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
    {
        icon: Globe,
        title: 'Business Websites',
        description: 'Beautiful, fast websites designed to turn visitors into paying customers for your cafe, clinic, or store.',
    },
    {
        icon: Bot,
        title: 'Automated Booking Agents',
        description: 'Intelligent chatbots that answer customer questions and book appointments while you sleep.',
    },
    {
        icon: BarChart3,
        title: 'Reputation Management',
        description: 'Automated systems to request and manage 5-star reviews on Google Maps, boosting your local ranking.',
    },
    {
        icon: Workflow,
        title: 'Booking Automation',
        description: 'Seamless integration with Calendly or custom booking forms so you never miss a lead.',
    },
    {
        icon: Lock,
        title: 'Online Ordering Systems',
        description: 'Secure, easy-to-manage online shops for selling products locally or globally.',
    },
    {
        icon: Code2,
        title: 'Custom Business Tools',
        description: 'Simple internal tools to track inventory, manage staff, or organize customer data.',
    },
];

const TechnicalCapabilities = () => {
    return (
        <section id="services" className="py-24 bg-transparent border-y border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-text-main mb-6">Services That Grow Your Business</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We build the digital tools you need to run smoothly and sell more. No tech headaches, just results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((item, index) => (
                        <div key={index} className="bg-bg-primary p-8 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-gray-200 dark:hover:border-white/20 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-text-main mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                                {item.description}
                            </p>

                            <Link to="/services" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                                Explore Service <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalCapabilities;
