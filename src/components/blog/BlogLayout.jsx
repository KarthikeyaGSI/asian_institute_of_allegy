"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

export default function BlogLayout({ children, title, date, author, authorImage, category, readTime, heroImage }) {
  return (
    <main className="bg-white min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Article Hero */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-slate-50">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {category}
              </span>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Calendar size={14} /> {date}
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Clock size={14} /> {readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight mb-10 text-slate-900">
              {title}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <Image src={authorImage} alt={author} fill className="object-cover" />
              </div>
              <div>
                <p className="text-slate-900 font-bold">{author}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">Article Author</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="container-custom -mt-12 md:-mt-20 mb-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200"
        >
          <Image src={heroImage} alt={title} fill className="object-cover" priority />
        </motion.div>
      </section>

      {/* Article Content */}
      <article className="container-custom pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-strong:text-slate-900 prose-strong:font-bold
            prose-img:rounded-3xl prose-img:shadow-xl
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          ">
            {children}
          </div>
          
          {/* Share Section */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Share this insight</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"><Share2 size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
