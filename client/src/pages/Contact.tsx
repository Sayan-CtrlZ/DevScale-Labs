import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://hook.eu1.make.com/8bjxcsmo9i6gast48myf9ds9wclqhbtr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    "Source": "General Contact Page",
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
                    <h1 className="text-3xl font-bold text-text-main mb-4">Message Sent!</h1>
                    <p className="text-text-muted mb-8 leading-relaxed">
                        Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
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
        <div className="pt-32 pb-24 min-h-screen bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-7xl font-bold text-text-main leading-tight tracking-tight">
                                Get in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                    Touch.
                                </span>
                            </h1>
                            <p className="text-xl text-text-muted max-w-lg leading-relaxed">
                                Have a question about our services or just want to say hello? Drop us a message and we'll get back to you shortly.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-1">Email Us</p>
                                    <a href="mailto:devscale.labs@gmail.com" className="text-lg font-semibold text-text-main hover:text-blue-600 transition-colors">
                                        devscale.labs@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-1">Call Us</p>
                                    <a href="tel:+918974637506" className="text-lg font-semibold text-text-main hover:text-blue-600 transition-colors">
                                        +91 89746 37506
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group border-t border-gray-100 dark:border-white/5 pt-8">
                                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-lg font-semibold text-text-main">
                                        Remote-first specialized agency <br />
                                        <span className="text-text-muted font-normal text-sm">Serving clients globally from India</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                            <p className="text-sm text-text-muted mb-6 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" /> Average response time: 2-4 hours
                            </p>
                            <div className="flex gap-4">
                                <div className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider border border-green-100 dark:border-green-900/30">
                                    Available Now
                                </div>
                                <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-900/30">
                                    2 slots left
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full -z-10 animate-pulse"></div>
                        <div className="bg-bg-primary dark:bg-slate-900/50 p-8 md:p-12 rounded-[40px] border border-gray-100 dark:border-white/5 premium-shadow">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-text-main ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-bg-primary transition-all text-text-main"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-text-main ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-bg-primary transition-all text-text-main"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-main ml-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-bg-primary transition-all text-text-main"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-main ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="How can we help you today? Leave us a message and we'll be in touch."
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-bg-primary transition-all text-text-main resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-[#0a0f1c] dark:bg-blue-600 text-white py-5 rounded-2xl font-bold hover:bg-blue-900 dark:hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-3 disabled:opacity-70 group"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="text-sm text-red-500 text-center font-medium">
                                        Something went wrong. Please try again or email us directly.
                                    </p>
                                )}

                                <p className="text-xs text-text-muted text-center pt-2">
                                    By submitting, you agree to our <Link to="/privacy" className="underline hover:text-blue-600">Privacy Policy</Link>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
