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
      value: "mailto:aarushi817@gmail.com",
      link: "mailto:aarushi817@gmail.com",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "https://github.com/111Aaru11",
      link: "https://github.com/111Aaru11",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/aarushi-thakur30/",
      link: "https://www.linkedin.com/in/aarushi-thakur30/",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
    >

      {/* Cyan Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-40 left-1/2 -translate-x-1/2"></div>

      <div className="w-full px-16 lg:px-24 py-24 relative z-10">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-white text-center mb-6">
          Get <span className="text-cyan-400">In Touch</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-20">
          Let's connect and discuss opportunities
        </p>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Feel free to reach out to me for collaborations, opportunities,
              or just to say hello. I'm always open to discussing
              new projects and ideas.
            </p>

            <div className="space-y-6">

              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-xl border border-cyan-400/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-500 group bg-[#0b1b2f]"
                >

                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700">
                    <info.icon className="text-white" size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-gray-400 text-sm">
                      {info.title}
                    </p>

                    <p className="text-lg text-white group-hover:text-cyan-400 transition-colors">
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
              className="bg-[#0b1b2f] p-10 rounded-xl border border-cyan-400/10 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 backdrop-blur-md"
            >

              {/* Name */}
              <div className="mb-6">
                <label className="block text-lg text-white mb-2 font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-5 py-4 bg-[#020617] border border-cyan-400/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-lg text-white mb-2 font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-5 py-4 bg-[#020617] border border-cyan-400/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-lg text-white mb-2 font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-5 py-4 bg-[#020617] border border-cyan-400/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-600 text-white text-lg font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className="ml-2" />
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// import { useState } from 'react';
// import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       value: 'mailto:aaarushi817@gmail.com',
//       link: 'mailto:aaarushi817@gmail.com',
//     },
//     {
//       icon: Github,
//       title: 'GitHub',
//       value: 'https://github.com/111Aaru11',
//       link: 'https://github.com/111Aaru11',
//     },
//     {
//       icon: Linkedin,
//       title: 'LinkedIn',
//       value: 'https://www.linkedin.com/in/aarushi-thakur30/',
//       link: 'https://www.linkedin.com/in/aarushi-thakur30/',
//     },
//   ];

//   return (
//     // <section id="contact" className="py-20 bg-slate-800">
//     <section
//   id="contact"
//   className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#041b3a] relative overflow-hidden"
// >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-4">
//           Get In Touch
//         </h2>
//         <p className="text-gray-400 text-center mb-12">
//           Let's connect and discuss opportunities
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//             <p className="text-gray-400 mb-8 leading-relaxed">
//               Feel free to reach out to me for collaborations, opportunities, or just to say hello.
//               I'm always open to discussing new projects and ideas.
//             </p>

//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={index}
//                   href={info.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center group"
//                 >
//                   <div className="bg-blue-600 rounded-lg p-3 mr-4 group-hover:bg-blue-500 transition-colors duration-300">
//                     <info.icon className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <p className="text-gray-500 text-sm">{info.title}</p>
//                     <p className="text-white group-hover:text-blue-400 transition-colors duration-300">
//                       {info.value}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <form onSubmit={handleSubmit} className="bg-slate-900 rounded-lg p-8 shadow-lg border border-slate-700">
//               <div className="mb-6">
//                 <label htmlFor="name" className="block text-white mb-2 font-semibold">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-white mb-2 font-semibold">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-white mb-2 font-semibold">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
//                   placeholder="Your message..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//                 <Send size={18} className="ml-2" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// // import { useState } from 'react';
// // import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: '',
// //   });

// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);

// //     setTimeout(() => {
// //       alert('Message sent successfully!');
// //       setFormData({ name: '', email: '', message: '' });
// //       setIsSubmitting(false);
// //     }, 1500);
// //   };

// //   const contactInfo = [
// //     {
// //       icon: Mail,
// //       title: 'Email',
// //       value: 'your.email@example.com',
// //       link: 'mailto:your.email@example.com',
// //     },
// //     {
// //       icon: Github,
// //       title: 'GitHub',
// //       value: 'github.com/yourusername',
// //       link: 'https://github.com/yourusername',
// //     },
// //     {
// //       icon: Linkedin,
// //       title: 'LinkedIn',
// //       value: 'linkedin.com/in/yourusername',
// //       link: 'https://linkedin.com/in/yourusername',
// //     },
// //   ];

// //   return (
// //     <section id="contact" className="py-20 bg-slate-800">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <h2 className="text-4xl font-bold text-white text-center mb-4">
// //           Get In Touch
// //         </h2>
// //         <p className="text-gray-400 text-center mb-12">
// //           Let's connect and discuss opportunities
// //         </p>

// //         <div className="grid md:grid-cols-2 gap-12">
// //           <div>
// //             <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
// //             <p className="text-gray-400 mb-8 leading-relaxed">
// //               Feel free to reach out to me for collaborations, opportunities, or just to say hello.
// //               I'm always open to discussing new projects and ideas.
// //             </p>

// //             <div className="space-y-6">
// //               {contactInfo.map((info, index) => (
// //                 <a
// //                   key={index}
// //                   href={info.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center group"
// //                 >
// //                   <div className="bg-blue-600 rounded-lg p-3 mr-4 group-hover:bg-blue-500 transition-colors duration-300">
// //                     <info.icon className="text-white" size={24} />
// //                   </div>
// //                   <div>
// //                     <p className="text-gray-500 text-sm">{info.title}</p>
// //                     <p className="text-white group-hover:text-blue-400 transition-colors duration-300">
// //                       {info.value}
// //                     </p>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <form onSubmit={handleSubmit} className="bg-slate-900 rounded-lg p-8 shadow-lg border border-slate-700">
// //               <div className="mb-6">
// //                 <label htmlFor="name" className="block text-white mb-2 font-semibold">
// //                   Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
// //                   placeholder="Your name"
// //                 />
// //               </div>

// //               <div className="mb-6">
// //                 <label htmlFor="email" className="block text-white mb-2 font-semibold">
// //                   Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
// //                   placeholder="your.email@example.com"
// //                 />
// //               </div>

// //               <div className="mb-6">
// //                 <label htmlFor="message" className="block text-white mb-2 font-semibold">
// //                   Message
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   required
// //                   rows={5}
// //                   className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
// //                   placeholder="Your message..."
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
// //               >
// //                 {isSubmitting ? 'Sending...' : 'Send Message'}
// //                 <Send size={18} className="ml-2" />
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;
