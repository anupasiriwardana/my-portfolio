import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react'

interface ContactInfo {
    icon: React.ReactNode;
    label: string;
    value: string;
    link?: string;
}

interface SocialLink {
    icon: React.ReactNode;
    label: string;
    url: string;
}

export default function Contact() {
    const contactInfo: ContactInfo[] = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "anupasiriwardana123@gmail.com",
            link: "mailto:anupasiriwardana123@gmail.com"
        },
        {
            icon: <Phone size={24} />,
            label: "Phone",
            value: "+94 76 881 2712",
            link: "tel:+94768812712"
        },
        {
            icon: <MapPin size={24} />,
            label: "Location",
            value: "Colombo, Sri Lanka"
        }
    ]

    const socialLinks: SocialLink[] = [
        {
            icon: <Github size={24} />,
            label: "GitHub",
            url: "https://github.com/anupasiriwardana"
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            url: "https://linkedin.com/in/anupa-siriwardana-198471235"
        }
    ]

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Get In <span className="text-teal-400">Touch</span>
                </h2>

                {/* Contact Info - Centered Layout */}
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Introduction */}
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I&apos;m always interested in new opportunities, collaborations, and exciting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                        
                        {/* Download Resume Button */}
                        <div className="mb-8">
                            <a
                                href="/AnupaSiriwardana-RESUME.pdf"
                                download="AnupaSiriwardana-RESUME.pdf"
                                className="inline-flex items-center space-x-3 px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-lg hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-400/25"
                            >
                                <Download size={20} />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-3">
                                <div className="p-4 bg-teal-400/10 rounded-full text-teal-400 border border-teal-400/30">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium mb-1">{item.label}</p>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            className="text-white hover:text-teal-400 transition-colors text-sm"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-white text-sm">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center space-y-6">
                        <h4 className="text-lg font-semibold">Follow Me</h4>
                        <div className="flex space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-gray-800 rounded-full text-gray-400 hover:text-teal-400 hover:bg-teal-400/10 transition-all duration-300 border border-gray-700 hover:border-teal-400/30 transform hover:scale-110"
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}