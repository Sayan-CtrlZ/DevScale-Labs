

const steps = [
    {
        id: '01',
        title: 'We Plan',
        description: 'We sit down with you to understand your business goals and what you need to grow.',
    },
    {
        id: '02',
        title: 'We Build',
        description: 'Our team builds your website and tools quickly, without you needing to worry about the tech.',
    },
    {
        id: '03',
        title: 'You Grow',
        description: 'We launch your system and you start getting more customers, bookings, and orders.',
    },
];

const PrecisionProtocol = () => {
    return (
        <section className="py-24 bg-transparent border-y border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-text-main mb-6">Simple 3-Step Process</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-lg">
                            Getting online shouldn't be complicated. We make it easy for you to start growing digitally.
                        </p>

                        <div className="space-y-8">
                            {steps.map((step) => (
                                <div key={step.id} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                        {step.id}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-blue-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual - Simple Growth Graph */}
                    <div className="relative sticky top-24">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900 aspect-[4/5] flex items-center justify-center p-8">
                            {/* Simple Bar Chart Visual */}
                            <div className="w-full h-full flex items-end justify-around gap-4 pb-12 border-b border-gray-200 dark:border-gray-700 relative">
                                <div className="w-16 bg-blue-100 dark:bg-blue-900/30 rounded-t-lg h-[30%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-md px-2 py-1 rounded text-xs font-bold">Start</div>
                                </div>
                                <div className="w-16 bg-blue-300 dark:bg-blue-700/50 rounded-t-lg h-[50%]"></div>
                                <div className="w-16 bg-blue-500 dark:bg-blue-600 rounded-t-lg h-[75%]"></div>
                                <div className="w-16 bg-blue-600 dark:bg-blue-500 rounded-t-lg h-[95%] relative">
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl">🚀</div>
                                </div>

                                {/* Trend Line */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                    <path d="M 40 300 Q 150 250 280 50" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" className="opacity-50" />
                                </svg>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute top-12 right-8 bg-[#0a0f1c] text-white p-4 rounded-xl shadow-xl transform rotate-3 border border-gray-700 z-10">
                                <div className="flex flex-col items-center">
                                    <div className="text-green-400 text-2xl mb-1">📈</div>
                                    <div className="text-2xl font-bold">+300%</div>
                                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrecisionProtocol;
