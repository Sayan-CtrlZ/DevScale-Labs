import { Search, ArrowRight, Calendar } from 'lucide-react';


const insights = [
    {
        category: 'AI & Strategy',
        title: "The AI Automation Trap: Why 'More' Isn't Always 'Better'",
        excerpt: "In the rush to automate everything, many businesses lose the human touch that defines their brand. Here is how to scale intelligently.",
        author: 'Elena Rodriguez',
        date: 'May 8, 2024',
        readTime: '8 min read',
        image: '/api/placeholder/400/250'
    },
    {
        category: 'Development',
        title: "Scalable CSS: Beyond Utility Classes in Enterprise Apps",
        excerpt: "Maintaining design systems at scale requires more than just a library. It requires a philosophy of structure and naming conventions.",
        author: 'David Kim',
        date: 'May 4, 2024',
        readTime: '6 min read',
        image: '/api/placeholder/400/250'
    },
    {
        category: 'Systems',
        title: "The Future of CRM: Predicting Lead Behavior with Precision",
        excerpt: "How predictive modeling is transforming the traditional sales funnel into a high-performance conversion engine.",
        author: 'Sarah Jenkins',
        date: 'April 28, 2024',
        readTime: '10 min read',
        image: '/api/placeholder/400/250'
    },
    {
        category: 'Business',
        title: "Micro-SaaS Architecture: Building for Exit from Day One",
        excerpt: "Technical debt is the primary killer of acquisitions. Learn how to architect your SaaS for maximum valuation and seamless handoff.",
        author: 'Marcus Thorne',
        date: 'April 22, 2024',
        readTime: '15 min read',
        image: '/api/placeholder/400/250'
    },
    {
        category: 'Engineering',
        title: "Optimizing API Gateways for Global Scale",
        excerpt: "A deep dive into edge computing and how distributed API management can reduce latency by up to 40% globally.",
        author: 'Elena Rodriguez',
        date: 'April 15, 2024',
        readTime: '9 min read',
        image: '/api/placeholder/400/250'
    }
];

const Insights = () => {
    return (
        <div className="pt-24 min-h-screen bg-bg-primary transition-colors duration-300">
            {/* Header */}
            <section className="bg-bg-primary dark:bg-gradient-to-b dark:from-[#020617] dark:to-[#0f172a] py-20 px-6 relative overflow-hidden">
                <div className="hidden dark:block absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
                <div className="max-w-4xl">
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                        <span>Home</span>
                        <span className="text-gray-300">/</span>
                        <span>Insights</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight mb-6">
                        Technical Intelligence for the <br />
                        <span className="text-text-main">Modern Enterprise</span>.
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        Our latest thinking on engineering high-performance systems, automating complexity, and scaling digital infrastructure.
                    </p>
                </div>
            </section>

            {/* Featured Insight */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="bg-bg-secondary dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 premium-shadow">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Featured Insight</span>
                                <span className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wide">Engineering</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight">
                                Engineering for Resilience: How We Built a Zero-Downtime Migration Engine
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                Discover the architectural decisions behind our latest automation framework that handles multi-terabyte data migrations with sub-millisecond latency and absolute data integrity.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <img src="/api/placeholder/50/50" alt="Author" className="w-10 h-10 rounded-full" />
                                <div className="text-sm">
                                    <p className="font-bold text-text-main">Marcus Thorne</p>
                                    <p className="text-gray-500 dark:text-gray-400">Lead Systems Architect</p>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium ml-auto">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> May 12, 2024</span>
                                    <span>12 min read</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-200 min-h-[400px] relative">
                            {/* Featured Image Placeholder */}
                            <img src="/api/placeholder/800/600" alt="Migration Engine" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="px-6 max-w-7xl mx-auto mb-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-8">
                    <div className="flex flex-wrap gap-2">
                        {['All Insights', 'Engineering', 'AI & Strategy', 'Development', 'Systems', 'Business'].map((filter, idx) => (
                            <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-blue-900 text-white' : 'text-text-muted hover:bg-bg-secondary'}`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search insights..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm w-full md:w-64 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((post, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-video bg-gray-100 dark:bg-slate-800/50 rounded-2xl overflow-hidden mb-6">
                                <span className="absolute top-4 left-4 bg-bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-text-main z-10">
                                    {post.category}
                                </span>
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                                    <span>{post.date}</span>
                                    <span className="text-gray-300">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main group-hover:text-blue-600 transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 pt-2">
                                    <img src="/api/placeholder/30/30" alt={post.author} className="w-6 h-6 rounded-full" />
                                    <span className="text-xs font-bold text-text-main">{post.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="bg-blue-900 dark:bg-gradient-to-br dark:from-blue-900 dark:to-slate-900 rounded-3xl p-12 text-center md:text-left relative overflow-hidden premium-shadow">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <span className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-700">The Monthly Briefing</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Ahead of the Curve</h2>
                            <p className="text-blue-200 text-lg leading-relaxed">
                                Join 5,000+ technology leaders receiving our monthly deep-dive into system architecture, automation trends, and scaling strategies.
                            </p>
                        </div>
                        <div className="bg-bg-primary/10 backdrop-blur-sm p-2 rounded-2xl border border-white/10">
                            <div className="bg-bg-primary rounded-xl p-2 flex flex-col md:flex-row gap-2">
                                <input type="email" placeholder="name@company.com" className="flex-1 px-4 py-3 rounded-lg focus:outline-none text-text-main bg-bg-primary placeholder-text-muted" />
                                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-blue-200 text-[10px] mt-2 text-center uppercase tracking-wider font-medium">No spam. Only high-signal technical content.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pagination */}
            <div className="flex justify-center pb-24 gap-4">
                <button className="px-6 py-2 border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium hover:bg-bg-secondary text-text-muted">View Archive</button>
                <button className="px-6 py-2 bg-transparent text-blue-600 rounded-full text-sm font-bold hover:bg-blue-50 flex items-center gap-2">
                    Next Page <ArrowRight className="w-4 h-4" />
                </button>
            </div>

        </div>
    );
};

export default Insights;
