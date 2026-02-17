
const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Light Mode Gradients - Airy & Subtle */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply filter opacity-70 animate-blob dark:hidden"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000 dark:hidden"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-50/40 rounded-full blur-[120px] mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000 dark:hidden"></div>

            {/* Dark Mode Gradients - Deep & Cosmic */}
            <div className="hidden dark:block absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[100px] animate-blob"></div>
            <div className="hidden dark:block absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="hidden dark:block absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-violet-900/5 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>

            {/* Tech Grid Background */}
            <div className="absolute inset-0 tech-grid opacity-100"></div>

            {/* Noise/Texture Overlay (Optional for extra polish) */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export default Background;
