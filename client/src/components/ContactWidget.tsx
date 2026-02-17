import { useState } from 'react';
import { MessageCircle, Phone, X, MessageSquare } from 'lucide-react';

const ContactWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const contactMethods = [
        {
            icon: <MessageCircle className="w-5 h-5" />,
            label: "WhatsApp",
            href: `https://wa.me/918974637506?text=${encodeURIComponent("Hello DevScale Labs! I'm interested in scaling my business. Let's talk.")}`,
            color: "bg-[#25D366] hover:bg-[#20bd5a]",
            textColor: "text-white"
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Call Us",
            href: "tel:+918974637506",
            color: "bg-blue-600 hover:bg-blue-700",
            textColor: "text-white"
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Expanded Menu */}
            <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none absolute bottom-16 right-0'}`}>
                {contactMethods.map((method, index) => (
                    <a
                        key={index}
                        href={method.href}
                        target={method.label === "WhatsApp" ? "_blank" : undefined}
                        rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className={`flex items-center gap-3 px-4 py-3 rounded-full shadow-lg ${method.color} ${method.textColor} transition-transform hover:scale-105 active:scale-95`}
                    >
                        {method.icon}
                        <span className="font-semibold text-sm whitespace-nowrap">{method.label}</span>
                    </a>
                ))}
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={toggleOpen}
                className={`p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-blue-600 hover:bg-blue-700'}`}
                aria-label="Contact Options"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageSquare className="w-6 h-6 text-white" />
                )}
            </button>
        </div>
    );
};

export default ContactWidget;
