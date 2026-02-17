

const testimonials = [
    {
        quote: "I was struggling to handle orders during weekends. DevScale built a simple online ordering system that saved my sanity. Highly recommended!",
        author: 'Arjun Kapoor',
        role: 'Owner, Masala Chai Cafe',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    },
    {
        quote: "We needed a better way to book appointments for our salon. The new system is easy to use and our clients love it. Business has grown 30%.",
        author: 'Priya Sharma',
        role: 'Founder, Glow & Style Salon',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-transparent border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-text-main mb-16">Client Feedback</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-bg-primary p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between">
                            <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <div className="font-bold text-text-main">{item.author}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
