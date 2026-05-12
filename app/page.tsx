'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ReStyle" width={42} height={42} className="rounded-xl" />
            <span className="font-semibold text-2xl tracking-tighter">ReStyle</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#features" className="hover:text-[#0071e3]">功能介绍</a>
            <Link href="/try" className="hover:text-[#0071e3]">立即体验</Link>
            <a href="#about" className="hover:text-[#0071e3]">关于我们</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/try">
              <button className="apple-btn px-6 py-2.5 bg-[#0071e3] text-white rounded-full text-sm font-medium hover:bg-blue-600">
                免费使用 AI
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zinc-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4" /> 100% 免费 · AI 驱动 · 可持续时尚
          </div>
          
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6">
            重塑你的<br />衣橱未来
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
            AI 智能穿搭建议 · 旧衣改造教程 · 全网二手时尚比价
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/try">
              <button className="apple-btn px-10 py-4 bg-white text-black rounded-3xl text-lg font-medium flex items-center gap-3 mx-auto sm:mx-0">
                立即体验 AI 穿搭 <ArrowRight />
              </button>
            </Link>
            <a href="#features" className="apple-btn px-10 py-4 border border-white/50 hover:bg-white/10 rounded-3xl text-lg font-medium">
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">三大核心功能</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-800 p-10 rounded-3xl border">
              <div className="text-5xl mb-6">👔</div>
              <h3 className="text-2xl font-semibold mb-3">AI 智能穿搭</h3>
              <p className="text-gray-600 dark:text-gray-400">上传照片，AI 秒出多套专业搭配建议</p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-10 rounded-3xl border">
              <div className="text-5xl mb-6">♻️</div>
              <h3 className="text-2xl font-semibold mb-3">旧衣改造</h3>
              <p className="text-gray-600 dark:text-gray-400">把旧衣服变成新单品，环保又时尚</p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-10 rounded-3xl border">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold mb-3">二手比价</h3>
              <p className="text-gray-600 dark:text-gray-400">全网实时比价，帮你找到最划算的选择</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">准备好重塑你的时尚了吗？</h2>
          <Link href="/try">
            <button className="apple-btn px-12 py-5 bg-white text-black rounded-3xl text-xl font-medium">
              现在开始使用 AI
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}