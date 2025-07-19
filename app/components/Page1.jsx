'use client';

import Spline from '@splinetool/react-spline';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#101010] text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">

      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 h-1 bg-cyan-400 z-50" style={{ scaleX: progress, transformOrigin: 'left' }} />

      {/* Glowing Background Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00fff7] opacity-20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#39ff14] opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Hero Section */}
      <motion.section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-10 relative z-10"
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-emerald-400">AI‑Powered</span> Freelance<br />
            That <span className="text-cyan-400">Works Smarter</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg md:text-xl">
            Publish your gigs, automate your workflows, and let technology do the heavy lifting.
          </p>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-6 bg-[#00fff7] hover:bg-[#0fffc1] text-black transition px-6 py-3 rounded-md font-semibold shadow-lg">
            Explore Gigs
          </motion.button>
        </div>
        <div className="w-full md:w-[450px] lg:w-[600px] h-[400px] md:h-[500px]">
          <Spline scene="https://prod.spline.design/viqOevYMbl0hG4af/scene.splinecode" />
        </div>
      </motion.section>

      {/* Why Choose Me Section */}
      <motion.section className="px-6 md:px-20 py-24 bg-black/30 backdrop-blur-md"
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-[650px] lg:w-[800px] h-[600px] md:h-[700px]">
            <Spline scene="https://prod.spline.design/LloYKmm-VrEHZD17/scene.splinecode" />
          </div>
          <div className="text-left max-w-xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-300 mb-6 tracking-tight">Why Choose Me</h2>
            <p className="text-gray-300 text-2xl mb-6 leading-relaxed">
              Tailored freelance platform built with interactive 3D experiences, clean design, and smart automation.
            </p>
            <ul className="space-y-4 text-xl text-gray-200 list-disc pl-5">
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring" }}>⚡ Instant gig publishing</motion.li>
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring" }}>🤖 AI-powered workflows</motion.li>
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring" }}>📩 Real-time notifications</motion.li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section className="px-6 md:px-20 py-24 bg-black/10 backdrop-blur-xl"
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-cyan-300 mb-16">Robot‑Powered Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'AI Content Writing',
              desc: 'Generate blogs, product descriptions & more with AI.',
              spline: 'https://prod.spline.design/1GZGqdIgxq2ycZ5t/scene.splinecode'
            },
            {
              title: 'Task Automation',
              desc: 'Automate daily tasks and workflows effortlessly.',
              spline: 'https://prod.spline.design/VJIaFtvf-tXYhl5m/scene.splinecode'
            },
            {
              title: 'Chatbot Integration',
              desc: 'Add smart chat assistants to your platform.',
              spline: 'https://prod.spline.design/RKJfKhAWHpX8EYsh/scene.splinecode'
            }
          ].map((card, i) => (
            <motion.div key={i}
              className="bg-white/5 border border-cyan-900/40 backdrop-blur-sm rounded-xl p-4 shadow-xl hover:shadow-cyan-400/40 transition-all duration-500"
              whileHover={{ scale: 1.07 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.2 } }}
              viewport={{ once: true, amount: 0.3 }}>
              <div className="w-full h-[240px] md:h-[280px] mb-4">
                <Spline scene={card.spline} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-cyan-300">{card.title}</h3>
              <p className="text-gray-300 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-10"
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-emerald-400 mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-6">
            Ready to collaborate or have questions? Let’s bring your vision to life.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"></textarea>
            <button type="submit" className="bg-emerald-400 hover:bg-emerald-300 text-black px-6 py-3 rounded font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-[600px]  md:w-[700px] h-[500px] md:h-[600px]">
          <Spline scene="https://prod.spline.design/RQrbU4U4zJellTmd/scene.splinecode" />
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        Built with ❤️ by Sami · © {new Date().getFullYear()}
      </motion.footer>
    </div>
  );
}
