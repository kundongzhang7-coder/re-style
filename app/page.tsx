'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Navbar - Apple 风格 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl z-50 border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ReStyle" width={48} height={48} className="rounded-2xl" />
            <span className="font-semibold text-2xl tracking-[-2px]">ReStyle</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">
            <a href="#features" className="hover:text-[#0071e3] transition-colors">功能</a>
            <Link href="/try" className="hover:text-[#0071e3] transition-colors">立即体验</Link>
            <a href="#sustain" className="hover:text-[#0071e3] transition-colors">可持续</a>
          </div>

          <Link href="/try">
            <button className="apple-btn px-8 py-3 bg-black dark:bg-white dark:text-black text-white text-sm font-medium rounded-full">
              免费使用 AI
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero - 更高级 */}
      <section className="pt-32 pb-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-8 text-sm">
            <Leaf className="w-4 h-4 text-emerald-400" /> 对标 Stitch Fix + Phia
          </div>

          <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter leading-none mb-8">
            重塑<br />你的衣橱
          </h1>

          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            AI 智能穿搭 · 旧衣再生 · 全网二手比价<br />
            <span className="text-emerald-400">100% 免费 · 纯数字平台</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/try">
              <button className="apple-btn group px-10 py-5 bg-white text-black rounded-3xl text-lg font-medium flex items-center gap-3 mx-auto">
                立即体验 AI 魔法
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features - Apple 卡片风格 */}
      <section id="features" className="py-28 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#0071e3] font-medium tracking-widest">CORE FEATURES</p>
            <h2 className="text-6xl font-semibold tracking-tighter mt-3">三大核心能力</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "✨",
                title: "AI 智能穿搭",
                desc: "上传你的衣服照片，AI 瞬间生成多套专业穿搭建议，考虑天气、场合、体型与个人风格。"
              },
              {
                emoji: "♻️",
                title: "旧衣改造教程",
                desc: "把旧衣服变成新单品，AI 一步步教你改造方法，环保又充满创意。"
              },
              {
                emoji: "🔍",
                title: "全网二手比价",
                desc: "实时对比闲鱼、得物、淘宝等平台价格，帮你找到最划算的可持续选择。"
              }
            ].map((feature, i) => (
              <div key={i} className="feature-card group bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-3xl p-10 hover:border-[#0071e3]/30">
                <div className="text-6xl mb-8 transition-transform group-hover:scale-110">{feature.emoji}</div>
                <h3 className="text-3xl font-semibold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-6xl font-semibold tracking-tighter mb-8">准备好重塑时尚了吗？</h2>
          <Link href="/try">
            <button className="apple-btn px-16 py-6 bg-white text-black text-xl rounded-3xl font-medium">
              现在开始使用
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}