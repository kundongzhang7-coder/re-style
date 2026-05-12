'use client';
import { useState } from 'react';
import { Upload, RefreshCw, Sparkles, Shirt } from 'lucide-react';
import { toast } from 'sonner';

export default function TryPage() {
  const [activeTab, setActiveTab] = useState<'styling' | 'upcycle' | 'price'>('styling');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const runAI = async () => {
    if (!image) return toast.error("请先上传衣服照片");

    setLoading(true);
    setResult(null);

    await new Promise(r => setTimeout(r, 1800));

    if (activeTab === 'styling') {
      setResult({
        title: "为你推荐的3套穿搭",
        items: [
          { style: "极简通勤风", desc: "白色衬衫 + 黑色直筒裤 + 棕色乐福鞋" },
          { style: "周末休闲风", desc: "oversize T恤 + 浅色牛仔裤 + 白球鞋" },
          { style: "轻熟约会风", desc: "米色针织开衫 + 高腰A字裙" }
        ]
      });
    } else if (activeTab === 'upcycle') {
      setResult({
        title: "旧衣改造教程",
        steps: [
          "1. 将旧T恤从侧边剪开做成开衫",
          "2. 用旧牛仔布做口袋装饰",
          "3. 缝上珍珠扣提升质感",
          "预计耗时：40分钟"
        ]
      });
    } else {
      setResult({
        title: "二手价格对比",
        best: "闲鱼 ¥65",
        items: [
          { platform: "闲鱼", price: "¥65" },
          { platform: "得物", price: "¥98" },
          { platform: "淘宝二手", price: "¥72" }
        ]
      });
    }

    setLoading(false);
    toast.success("AI 生成完成！");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-center mb-3">
          AI 时尚工作室
        </h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">上传照片 · AI 立刻为你工作</p>

        {/* Tab 切换 */}
        <div className="flex justify-center mb-12 border-b border-gray-200 dark:border-gray-800">
          {[
            { key: 'styling', label: 'AI智能穿搭', icon: Sparkles },
            { key: 'upcycle', label: '旧衣改造', icon: Shirt },
            { key: 'price', label: '二手比价', icon: Upload }
          ].map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => { setActiveTab(t.key as any); setResult(null); }}
                className={`px-8 py-4 font-medium flex items-center gap-2 border-b-2 -mb-px transition-all ${
                  activeTab === t.key 
                    ? 'border-[#0071e3] text-[#0071e3]' 
                    : 'border-transparent hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" /> {t.label}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 上传区域 */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl h-[420px] flex flex-col items-center justify-center relative overflow-hidden">
              {image ? (
                <img src={image} alt="preview" className="w-full h-full object-cover rounded-3xl" />
              ) : (
                <div className="text-center">
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl font-medium">点击上传衣服照片</p>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="absolute inset-0 opacity-0 cursor-pointer" 
              />
            </div>

            <button
              onClick={runAI}
              disabled={loading || !image}
              className="apple-btn mt-8 w-full py-4 bg-black hover:bg-zinc-800 text-white rounded-2xl text-lg font-medium disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading && <RefreshCw className="animate-spin" />}
              {loading ? "AI 正在生成..." : "开始 AI 分析"}
            </button>
          </div>

          {/* 结果区域 */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl min-h-[500px] flex items-center justify-center">
            {loading && (
              <div className="text-center">
                <RefreshCw className="w-12 h-12 animate-spin text-[#0071e3] mx-auto mb-6" />
                <p className="text-lg">AI 正在思考中...</p>
              </div>
            )}

            {result && (
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-6">{result.title}</h3>
                {result.items && result.items.map((item: any, i: number) => (
                  <div key={i} className="mb-4 p-5 border rounded-2xl">
                    <p className="font-medium">{item.style || item.platform}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc || item.price}</p>
                  </div>
                ))}
                {result.steps && (
                  <div className="space-y-4">
                    {result.steps.map((step: string, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm flex-shrink-0">{i+1}</div>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!result && !loading && (
              <div className="text-center text-gray-400">
                <p className="text-xl">上传照片后，AI 结果将在这里显示</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}