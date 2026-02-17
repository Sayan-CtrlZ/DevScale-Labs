
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Chai Point & Snacks',
        category: 'Online Ordering',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2070',
    },
    {
        title: 'City Salon & Spa',
        category: 'Booking System',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068',
    },
    {
        title: 'Silk & Sarees Emporium',
        category: 'E-Commerce Store',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070',
    },
];

const SelectedWork = () => {
    return (
        <section id="work" className="py-24 bg-transparent border-y border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-text-main mb-4">Selected Work</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                            Excellence in action. See how DevScale Labs has helped local businesses scale their digital footprint.
                        </p>
                    </div>
                    <Link to="/work" className="hidden md:flex items-center gap-2 text-sm font-semibold text-text-main hover:text-blue-600 transition-colors">
                        View All Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-text-main hover:text-blue-600 transition-colors">
                        View All Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
