'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="ReStyle" width={52} height={52} className="rounded-2xl" />
            <span className="text-3xl font-semibold tracking-tighter">ReStyle</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-lg">
            <a href="#features" className="hover:text-blue-400 transition-colors">功能</a>
            <Link href="/try" className="hover:text-blue-400 transition-colors">体验 AI</Link>
            <a href="#sustain" className="hover:text-blue-400 transition-colors">可持续</a>
          </div>

          <Link href="/try">
            <button className="tech-btn px-8 py-3.5 bg-white text-black font-medium rounded-2xl text-lg">
              立即体验
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero - 强科技感 */}
      <section className="min-h-screen pt-32 flex items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#3b82f620_0%,transparent_70%)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm tracking-widest">AI POWERED FASHION</span>
          </div>

          <h1 className="text-7xl md:text-[92px] font-semibold tracking-tighter leading-none mb-8">
            重塑<br />
            时尚的<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">未来</span>
          </h1>

          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            智能穿搭建议 · 旧衣 AI 再生 · 全网实时比价<br />
            纯数字 · 零浪费 · 极致可持续
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/try">
              <button className="tech-btn px-12 py-6 bg-white text-black rounded-3xl text-2xl font-medium flex items-center gap-4 group">
                开启 AI 时尚之旅
                <ArrowRight className="group-hover:translate-x-2 transition" />
              </button>
            </Link>
          </div>
        </div>

        {/* 装饰光效 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </section>

      {/* Features - 极简科技风 */}
      <section id="features" className="py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-semibold tracking-tighter">核心能力</h2>
            <p className="text-zinc-500 mt-4 text-xl">AI 驱动 · 极致简洁</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI 智能穿搭",
                desc: "上传照片，AI 瞬间理解你的衣橱，生成多套专业级搭配方案",
                color: "from-blue-400 to-cyan-400"
              },
              {
                title: "旧衣再生计划",
                desc: "AI 提供详细改造教程，让每一件旧衣服重获新生",
                color: "from-emerald-400 to-teal-400"
              },
              {
                title: "智能二手比价",
                desc: "实时扫描全网平台，帮你找到最优价格与可持续选择",
                color: "from-purple-400 to-violet-400"
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-10 rounded-3xl glass hover:bg-white/10 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-8 flex items-center justify-center text-4xl`}>
                  {i === 0 ? '👔' : i === 1 ? '♻️' : '🔍'}
                </div>
                <h3 className="text-4xl font-semibold tracking-tight mb-4">{item.title}</h3>
                <p className="text-zinc-400 text-[17px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}