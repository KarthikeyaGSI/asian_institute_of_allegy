"use client";

import BlogLayout from "@/components/blog/BlogLayout";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, MousePointer2, Layers, Cpu, Zap, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function FramerAnimationBlog() {
  const [activeTab, setActiveTab] = useState('word');
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <BlogLayout
      title="4 Ways to Animate a Framer Website"
      date="February 21, 2025"
      author="Nandi Muzsik"
      authorImage="/images/dr-nageswar.webp" // Reusing doctor image for now as placeholder or author
      category="Web Design"
      readTime="8 min read"
      heroImage="/images/Work shop on allegy.webp" // Reusing available image
    >
      <p className="lead text-xl text-slate-600 mb-10">
        Get ready to learn four powerful animation techniques for your Framer websites in this blog. By the end of it, you’ll have new skills—from easy to advanced—to add dynamic animations to your Framer projects.
      </p>

      {/* NEW SECTION: Appear Effect */}
      <section className="my-16 p-8 rounded-[2rem] bg-primary/5 border border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Pro Tip: The "Appear" Effect</h3>
            <p className="text-slate-600 text-sm">
              Use the <strong>Appear</strong> effect to create animations that trigger exactly when a website loads. Customize settings like <strong>offset</strong> (starting position), <strong>transition time</strong>, and <strong>delay</strong> to create a sequenced entry for your elements.
            </p>
          </div>
        </div>
        <div className="flex justify-center p-8 bg-white rounded-2xl shadow-inner border border-slate-100">
           <motion.div
             initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
             whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="px-6 py-3 bg-primary text-white font-bold rounded-full shadow-lg"
           >
             I Appear on Load
           </motion.div>
        </div>
      </section>

      <h2>1. Looping Animation</h2>
      <p>
        Looping animations are perfect for adding subtle movement to your site, whether it’s a bouncing arrow, pulsing button, or an endless background effect. In Framer, you can create a looped animation by setting an interaction to repeat infinitely.
      </p>
      
      <div className="my-10 bg-slate-50 p-12 rounded-3xl flex flex-col items-center justify-center">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"
        >
          <MousePointer2 size={40} />
        </motion.div>
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">Example: Floating Element</p>
      </div>

      <h3>How to do it:</h3>
      <ul>
        <li>Select the element you want to animate.</li>
        <li>Go to the right panel &gt; <strong>Effects &gt; Loop</strong>.</li>
        <li>Switch the Loop type to <strong>Mirror</strong>, ensuring it moves back and forth smoothly.</li>
        <li>Refine the motion with an <strong>ease-in-out</strong> transition.</li>
      </ul>

      {/* NEW SECTION: Text Animation Customization */}
      <section className="my-16 p-8 rounded-[2rem] bg-slate-900 text-white">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary-accent text-slate-900 flex items-center justify-center shrink-0">
            <Zap size={20} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Mastering Text Layers</h3>
            <p className="text-slate-400 text-sm">
              Discover how to animate text layers with effects such as <strong>per word</strong> or <strong>per line</strong> animation. Adding deliberate delays creates much smoother, more readable transitions.
            </p>
          </div>
        </div>
        
        <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="flex gap-4 mb-4">
             <button onClick={() => setActiveTab('word')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'word' ? 'bg-primary text-white' : 'bg-white/10 text-white/60'}`}>Per Word</button>
             <button onClick={() => setActiveTab('line')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'line' ? 'bg-primary text-white' : 'bg-white/10 text-white/60'}`}>Per Line</button>
          </div>
          
          <div className="h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'word' ? (
                <motion.div key="word" className="flex flex-wrap gap-2 justify-center">
                  {"Precision Diagnostics for Allergy".split(" ").map((word, i) => (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      className="text-2xl font-bold"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="line" className="text-center">
                   <motion.p
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                     className="text-xl font-medium text-primary-accent"
                   >
                     Advanced Immunotherapy Protocols
                   </motion.p>
                   <motion.p
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                     className="text-xl font-medium text-white/60"
                   >
                     Root-cause clinical resolution.
                   </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <h2>2. Parallax Scrolling</h2>
      <p>
        Parallax effects create depth by making elements move at different speeds as you scroll. This technique is widely used in modern web design to add a dynamic feel to pages.
      </p>

      <div ref={scrollRef} className="my-10 h-[400px] bg-slate-900 rounded-[2rem] overflow-hidden relative border border-white/10">
         <motion.div 
           style={{ y: parallaxY }}
           className="absolute inset-0 opacity-40"
         >
           <Image src="/images/Home.webp" alt="Background" fill className="object-cover" />
         </motion.div>
         <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
               <h4 className="text-4xl font-bold text-white mb-2">Depth Perception</h4>
               <p className="text-white/60 uppercase tracking-[0.3em] text-[10px]">Scroll the page to see the effect</p>
            </div>
         </div>
      </div>

      <h3>How to set it up:</h3>
      <ul>
        <li><strong>Separate your elements into layers:</strong> Foreground, Middle ground, and Background.</li>
        <li><strong>Adjust scroll speeds:</strong> Select a layer and go to Effects → Scroll Speed. Set Foreground to ~110%, Middle to ~70%, and Background to ~30%.</li>
      </ul>

      {/* NEW SECTION: Scroll Transform */}
      <section className="my-16 p-8 rounded-[2rem] bg-primary text-white">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Dynamic Scroll Transform</h3>
            <p className="text-white/80 text-sm">
              Explore how to control animations dynamically based on scroll position using <strong>Scroll Transform</strong>. This allows elements to move, rotate, or change scale interactively as users navigate your page.
            </p>
          </div>
        </div>
      </section>

      <h2>3. Component-based Animation</h2>
      <p>
        Framer allows you to create reusable animated components, making it easier to apply consistent animations across your project. This is great for things like buttons, cards, and interactive sections.
      </p>

      <h2>4. Timeline Animation</h2>
      <p>
        Timeline animations give you complete control over multiple elements moving in sync. You can set precise timing for each step, making it ideal for complex sequences like intro animations or interactive storytelling.
      </p>

      <div className="bg-slate-50 p-12 rounded-[3rem] text-center my-16 border border-slate-100">
        <h3 className="text-2xl font-bold mb-4">Ready to Master Framer?</h3>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          Animations are a game-changer for making your site feel more alive. Whether you’re using looping effects, parallax, or timeline animations, each technique brings something unique to the table.
        </p>
        <button className="btn-primary">Watch Detailed Video</button>
      </div>
    </BlogLayout>
  );
}
