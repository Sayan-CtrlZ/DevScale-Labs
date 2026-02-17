
import { CheckCircle2, MessageSquare, Search, Layers } from 'lucide-react';

const advantages = [
    {
        icon: CheckCircle2,
        title: 'Affordable Pricing',
        description: 'Top-quality websites and tools at prices that make sense for local businesses.',
    },
    {
        icon: MessageSquare,
        title: 'We Speak Your Language',
        description: 'No technical jargon. We explain everything in plain English (or Hindi!) so you know exactly what you\'re getting.',
    },
    {
        icon: Search,
        title: 'Results focused',
        description: 'We focus on what matters: getting you more phone calls, bookings, and walk-in customers.',
    },
    {
        icon: Layers,
        title: 'We Handle Everything',
        description: 'Hosting, security, updates - we take care of it all so you can focus on your shop.',
    },
];

const Advantage = () => {
    return (
        <section className="py-24 bg-transparent border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-text-main mb-4">The DevScale Labs Advantage</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
                    Why the most ambitious local businesses choose DevScale Labs for their digital growth.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {advantages.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
