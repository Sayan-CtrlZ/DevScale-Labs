import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            <div className="max-w-2xl w-full text-center relative z-10">
                <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
                    404 Error
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-text-main mb-6 tracking-tight">
                    Page Not <span className="text-blue-600">Found</span>.
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/" className="group bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <button onClick={() => window.history.back()} className="group bg-bg-primary border border-gray-200 dark:border-white/10 text-text-main px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                </div>
            </div>

            {/* Background enhancement specific to 404 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </div>
    );
};

export default NotFound;
