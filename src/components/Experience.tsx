import { motion } from "motion/react";

export default function Experience() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-pink/10 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
          {/* Main Title Block */}
          <div className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Experience"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold font-display"
              >
                The Experience
              </motion.h2>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="md:col-span-4 relative rounded-[2.5rem] overflow-hidden group">
            <img
              src="https://plus.unsplash.com/premium_photo-1775664297543-72e98e02203e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2hvc3RpbmclMjBpbiUyMGludGVybmV0fGVufDB8fDB8fHww"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="No ghosting"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <h3 className="text-3xl font-bold font-display leading-tight">
                No ghosting.
              </h3>
            </div>
          </div>

          {/* Bottom Left Block */}
            <div className="md:col-span-5 relative rounded-[2.5rem] overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/29763529/pexels-photo-29763529.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Socialize"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-pink/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <h3 className="text-3xl font-bold font-display leading-tight">
                  No algorithms.
                </h3>
              </div>
            </div>

            {/* Bottom Right Block */}
            <div className="md:col-span-7 relative rounded-[2.5rem] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Connection"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
              <div className="absolute inset-0 flex items-end p-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold font-display"
                >
                  Just real connection.
                </motion.h3>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
