import { useState } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aarushi817@gmail.com",
      link: "mailto:aarushi817@gmail.com",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/111Aaru11",
      link: "https://github.com/111Aaru11",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/aarushi-thakur30",
      link: "https://www.linkedin.com/in/aarushi-thakur30/",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* Cyan Glow Background */}
      <div className="absolute w-[260px] sm:w-[380px] md:w-[460px] h-[260px] sm:h-[380px] md:h-[460px] bg-cyan-500/20 blur-[120px] rounded-full top-40 left-1/2 -translate-x-1/2"></div>

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 relative z-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Get <span className="text-cyan-400">In Touch</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-12 md:mb-16">
          Let's connect and discuss opportunities
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>

            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed max-w-md">
              Feel free to reach out for collaborations, opportunities,
              or just to say hello. I’m always open to discussing
              new ideas and projects.
            </p>

            <div className="space-y-4">

              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-cyan-400/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-500 group bg-gradient-to-b from-[#0b1b2f]/90 to-[#07101f]/90 backdrop-blur-xl"
                >

                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 shadow-md shadow-cyan-500/20">
                    <info.icon className="text-white" size={18} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-gray-400 text-xs tracking-wide">
                      {info.title}
                    </p>

                    <p className="text-sm sm:text-base text-white group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>

                </a>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>

            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-b from-[#0b1b2f]/90 to-[#07101f]/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-cyan-400/10 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
            >

              {/* Name */}
              <div className="mb-5">
                <label className="block text-sm text-white mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#020617] border border-cyan-400/10 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm text-white mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-[#020617] border border-cyan-400/10 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm text-white mb-2 font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-[#020617] border border-cyan-400/10 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-600 text-white text-sm font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className="ml-2" />
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;