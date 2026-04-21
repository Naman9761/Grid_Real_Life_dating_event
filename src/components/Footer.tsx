import { motion } from 'motion/react';
import { Sparkles, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-pink/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold font-display mb-12 tracking-tight"
          >
            Ready to meet people<br />in real life?
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-12 py-6 rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple text-xl font-bold tracking-tight shadow-2xl shadow-brand-pink/40"
          >
            Join the Waitlist
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-white/5">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight">
              <span>GRID</span>
              <Sparkles className="w-5 h-5 text-brand-pink fill-brand-pink" />
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Amsterdam's premium singles events brand. Real life connections, curated venues, and unforgettable experiences.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold font-display text-sm uppercase tracking-widest text-white/40">Product</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-white transition-colors cursor-pointer">Events</li>
              <li className="hover:text-white transition-colors cursor-pointer">How It Works</li>
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Support</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold font-display text-sm uppercase tracking-widest text-white/40">Social</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-white transition-colors cursor-pointer">TikTok</li>
              <li className="hover:text-white transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-white transition-colors cursor-pointer">YouTube</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold font-display text-sm uppercase tracking-widest text-white/40">Newsletter</h4>
            <p className="text-xs text-white/40">Sign up to our newsletter for upcoming events and network updates.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-white/20 transition-all font-light"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-24 text-[10px] text-white/20 font-medium tracking-widest uppercase">
          <p>© 2026 Grid Amsterdam. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white/40 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/40 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white/40 cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
