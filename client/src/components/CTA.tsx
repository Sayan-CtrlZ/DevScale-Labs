

import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto rounded-3xl bg-[#0a0f1c] text-white overflow-hidden relative isolate">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>

                <div className="relative py-20 px-8 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Ready to grow your <br />
                        <span className="underline decoration-blue-500 decoration-4 underline-offset-4">business</span>?
                    </h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        Stop worrying about technology and start focusing on your customers. We'll handle the rest.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/start-project" className="bg-white text-[#0a0f1c] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto inline-block">
                            Get a Free Quote
                        </Link>
                        <a href="tel:+918974637506" className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors w-full sm:w-auto inline-block">
                            Call Us Now
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 text-xs text-gray-400 font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Local Support
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Affordable Plans
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
