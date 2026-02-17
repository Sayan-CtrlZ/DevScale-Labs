import { Mail, MessageSquare, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const StartProject = () => {
    const [formData, setFormData] = useState({
        projectType: 'Business Website',
        vision: '',
        launchTime: 'ASAP (1 month)',
        currency: 'USD',
        budgetAmount: '',
        name: '',
        email: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": true, "layout": "month_view" });
        })();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://hook.eu1.make.com/rjm75fw2hpvci4inyvmu9oyghe8fnjg5', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    "Source": "Start a Project Page",
                    "Timestamp": new Date().toISOString()
                }),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-6">
                <div className="max-w-md w-full bg-bg-primary dark:bg-slate-900/50 p-12 rounded-3xl border border-gray-100 dark:border-white/5 text-center premium-shadow animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-text-main mb-4">Inquiry Received!</h1>
                    <p className="text-text-muted mb-8 leading-relaxed">
                        Thank you for your interest. We've received your project details and will get back to you within 24 hours to schedule a deep dive.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-transparent transition-colors duration-300">
            {/* Header */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold tracking-wide uppercase">
                        Scale with Precision
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-text-main leading-tight tracking-tight">
                        Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Project.
                        </span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                        Give our engineering team the context they need to build your custom high-performance system.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-6 max-w-7xl mx-auto space-y-24">

                {/* 1. Project Inquiry Form */}
                <div className="max-w-4xl mx-auto bg-bg-primary dark:bg-slate-900/50 p-8 md:p-12 border border-gray-100 dark:border-white/5 rounded-[40px] premium-shadow">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-text-main mb-2">Project Discovery Form</h2>
                        <p className="text-text-muted">Tell us about your goals and specific requirements.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                                <span className="w-4 h-0.5 bg-blue-600"></span>
                                Project Essentials
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-main ml-1">Project Category</label>
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-text-main"
                                    >
                                        <option>Business Website</option>
                                        <option>E-Commerce Store</option>
                                        <option>AI Customer Support Agent</option>
                                        <option>Booking System</option>
                                        <option>Custom SaaS Tool</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-main ml-1">Expected Launch</label>
                                    <select
                                        name="launchTime"
                                        value={formData.launchTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-text-main"
                                    >
                                        <option>ASAP (1 month)</option>
                                        <option>1 - 3 Months</option>
                                        <option>3+ Months</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text-main ml-1">Summarize Your Vision</label>
                                <textarea
                                    name="vision"
                                    value={formData.vision}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-text-main resize-none"
                                    placeholder="Briefly describe what you're looking to build..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4 border-t border-gray-100 dark:border-white/5">
                            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-widest">
                                <span className="w-4 h-0.5 bg-indigo-600"></span>
                                Budget & Contact
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-main ml-1">Budget Allocation</label>
                                    <div className="flex gap-3">
                                        <select
                                            name="currency"
                                            value={formData.currency}
                                            onChange={handleChange}
                                            required
                                            className="w-32 px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-text-main"
                                        >
                                            <option value="USD">USD ($)</option>
                                            <option value="INR">INR (₹)</option>
                                            <option value="EUR">EUR (€)</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="budgetAmount"
                                            value={formData.budgetAmount}
                                            onChange={handleChange}
                                            required
                                            placeholder="Amount"
                                            className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-text-main"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-main ml-1">Your Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-text-main"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text-main ml-1">Business Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-text-main"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-2xl text-center border border-red-100 dark:border-red-900/10">
                                Something went wrong. Please try again or email us directly at devscale.labs@gmail.com.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-[#0a0f1c] dark:bg-blue-600 text-white py-5 rounded-2xl font-bold hover:bg-blue-900 dark:hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 group"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                    Submitting Enquiry...
                                </>
                            ) : (
                                <>
                                    Send Project Enquiry
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* 2. Instant Booking */}
                <div className="w-full space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold text-text-main">Prefer to talk directly?</h2>
                        <p className="text-text-muted">Schedule a 15-minute discovery call directly with our engineering management team.</p>
                    </div>
                    <div className="bg-bg-primary dark:bg-slate-900/50 rounded-[40px] shadow-sm border border-gray-100 dark:border-white/10 overflow-hidden h-[750px] w-full premium-shadow">
                        <Cal
                            namespace="15min"
                            calLink="devscale-labs-bjpifk/15min"
                            style={{ width: "100%", height: "100%", overflow: "scroll" }}
                            config={{ layout: "month_view" }}
                        />
                    </div>
                </div>

                {/* 3. Team Contacts */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <a href="mailto:devscale.labs@gmail.com" className="flex flex-col items-center text-center p-8 bg-bg-primary dark:bg-slate-900/50 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-blue-500/30 transition-all group premium-shadow">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-text-main mb-2">Direct Inquiry</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Skip the form and send us a direct brief via email.</p>
                        <p className="mt-4 text-blue-600 font-semibold">devscale.labs@gmail.com</p>
                    </a>

                    <div className="flex flex-col items-center text-center p-8 bg-bg-primary dark:bg-slate-900/50 rounded-3xl border border-gray-100 dark:border-white/5 premium-shadow">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-6">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-text-main mb-2">Technical Support</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Already building with us? Get dedicated technical support.</p>
                        <p className="mt-4 text-indigo-600 font-semibold">support@devscale.labs</p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default StartProject;
