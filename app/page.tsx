"use client";

import { useState } from "react";
// 引入 Shield (实心盾牌)
import { ShieldCheck, Globe, CreditCard, CheckCircle2, ArrowRight, X, Building2, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white relative flex flex-col font-sans text-slate-800">
      
      {/* --- 顶部导航栏 (已更新：增加绿色安全盾) --- */}
      <nav className="w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto w-full flex items-center">
          <div className="flex items-center gap-2">
            {/* LOGO: 商务蓝 */}
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white shadow-sm">
              AP
            </div>
            
            <div className="flex items-center gap-1">
              <span className="font-bold text-xl tracking-tight text-slate-900">AntPal</span>
              {/* 新增：绿色安全盾牌，带一点文字提示 */}
              <div className="flex items-center bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 ml-1">
                <ShieldCheck size={14} className="text-emerald-600 fill-emerald-600/20" />
                <span className="text-[10px] font-bold text-emerald-700 ml-1 uppercase">Secure</span>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* --- 1. Hero 区域 --- */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            AntPal 一站式支付增长与数字化解决方案
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            连接全球商业的<br />
            <span className="text-blue-600">数字支付引擎</span>
          </h1>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            为您提供银行级安全托管。支持多币种结算、实时风控拦截，助您轻松拓展全球业务，资金流转合规透明。
          </p>
          
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full opacity-20"></div>
        </div>
      </section>

      {/* --- 2. 核心能力展示 --- */}
      <section className="px-6 pb-20 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="light-card p-8 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">金融级合规托管</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              持牌机构资金存管，全链路 SSL 加密，每一笔交易都清晰可查，保障资金绝对安全。
            </p>
          </div>

          <div className="light-card p-8 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">全球本地化结算</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              支持支付宝、微信、信用卡及 Web3 支付。一键接入全球主流支付方式，覆盖 200+ 国家。
            </p>
          </div>

          <div className="light-card p-8 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
              <CreditCard size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">T+0 极速到账</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              智能路由引擎，大幅降低交易延迟。7x24 小时自动化清算，让现金流不再等待。
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. 联系我们 --- */}
      <section className="bg-slate-50 w-full py-16 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          
          <div className="flex-1 pt-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">立即接入 AntPal</h2>
            <p className="text-slate-600 mb-8">
              留下您的联系方式，我们的商务经理将在 10 分钟内与您联系。
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-600" />
                <span className="text-slate-700 font-medium">免费开通企业测试账户</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-600" />
                <span className="text-slate-700 font-medium">新户首月费率优惠</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-600" />
                <span className="text-slate-700 font-medium">7x24h 1对1 技术集成支持</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">企业名称</label>
                <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input required type="text" className="w-full pl-10 pr-4 py-3 rounded-lg input-field text-sm" placeholder="请输入企业名称" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">联系人</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg input-field text-sm" placeholder="称呼" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">手机号码</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg input-field text-sm" placeholder="联系电话" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">咨询业务</label>
                <select className="w-full px-4 py-3 rounded-lg input-field text-sm appearance-none text-slate-700">
                  <option>跨境支付网关</option>
                  <option>全球收款账户</option>
                  <option>API 聚合支付</option>
                  <option>其他定制需求</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition shadow-md flex items-center justify-center gap-2 mt-2">
                提交申请 <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="w-full py-8 bg-white border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">&copy; 2024 AntPal Technology. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
             <span className="text-[10px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded">PCI-DSS Level 1</span>
             <span className="text-[10px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded">ISO 27001</span>
        </div>
      </footer>

      {/* --- 提交成功弹窗 --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-2xl shadow-2xl relative z-10 max-w-sm w-full text-center"
          >
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={36} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">提交成功</h3>
            <p className="text-slate-500 text-sm mb-6">
              您的需求已收到。我们的商务团队将尽快与您联系，请保持电话畅通。
            </p>
            <button onClick={() => setShowModal(false)} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-lg text-sm transition font-semibold">
              关闭
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}