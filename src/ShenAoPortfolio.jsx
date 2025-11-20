import React, { useState, useEffect } from 'react';
import { Play, Mail, ArrowUpRight, Minus, Globe } from 'lucide-react';

// --- Language Content Configuration ---
const content = {
  en: {
    nav: {
      about: 'About',
      works: 'Works',
      process: 'Process',
      contact: 'Contact',
      enter: 'Enter'
    },
    home: {
      title: 'Oscillating.',
      subtitle: 'Between machine and tenderness.'
    },
    about: {
      sectionA: { label: 'Sound World', text: 'He lives in a reality constructed of virtual synthetic sounds and urban noise. Timbre is environment, not choice.' },
      sectionB: { label: 'Perception', text1: 'Perception is structured like hopscotch, like switching scenes.', text2: 'Not an experiment, but life itself is fragmented.' },
      sectionC: { label: 'State', word1: 'Machine', word2: 'Childlike', text: 'Oscillating between clarity and softness. Oscillation is not a contradiction, but a way of existing.' },
      sectionD: { text: '"He always retains a sobriety followed by innocence."' }
    },
    works: {
      items: [
        {
          id: 1,
          title: "Virtual Park No.3",
          desc: "Synthesizer cicadas mixed with the opening sound of a late-night convenience store.",
          question: "How does a child move through a digital city?",
          duration: "04:33"
        },
        {
          id: 2,
          title: "Soft Wire / 软线",
          desc: "The faint hum before current overload, stretched into a breath.",
          question: "What does tenderness sound like inside a virtual world?",
          duration: "06:12"
        },
        {
          id: 3,
          title: "Fragments 1999",
          desc: "Lo-fi samples clashing against extremely clean sine waves.",
          question: "If the world is fragments, can emotions still flow?",
          duration: "03:45"
        }
      ]
    },
    process: {
      approach: 'Approach',
      flow: 'SIGNAL FLOW',
      items: [
        { title: "Collecting", content: "No distinction between 'natural' and 'artificial'. Recording error sounds at the edge of game scenes, like picking up shells at the beach." },
        { title: "Oscillating", content: "In the DAW, avoiding perfect grid alignment. Letting sounds arrive slightly 'late' to create the breathing of a machine." },
        { title: "Undefended", content: "Searching for undefended moments. Sober, yet still willing to believe in soft signals." }
      ]
    },
    contact: {
      education: { label: 'Education', items: ['Sound Art / Composition', 'Independent Researcher'] },
      live: { label: 'Selected Live', items: ['System Error, Shanghai', 'Virtual Noise, Online Exhibition'] },
      footer: 'Based in China. Open for dialogue.'
    }
  },
  zh: {
    nav: {
      about: '关于',
      works: '作品',
      process: '过程',
      contact: '联系',
      enter: '进入'
    },
    home: {
      title: '振荡。',
      subtitle: '在机器与温柔之间。'
    },
    about: {
      sectionA: { label: '声音世界', text: '他活在由虚拟合成声音和都市噪声构成的现实里。音色是环境，而非选择。' },
      sectionB: { label: '感知', text1: '感知被组织得像跳房子，像切换场景。', text2: '不是实验，而是生活本身就支离破碎。' },
      sectionC: { label: '状态', word1: '机械', word2: '童真', text: '在清晰与柔软之间振荡。振荡不是矛盾，而是一种存在方式。' },
      sectionD: { text: '“他总是保持一种清醒，随后是天真。”' }
    },
    works: {
      items: [
        {
          id: 1,
          title: "虚拟公园三号",
          desc: "合成器蝉鸣混合深夜便利店开门声。",
          question: "一个孩子如何穿行数字城市？",
          duration: "04:33"
        },
        {
          id: 2,
          title: "软线",
          desc: "电流过载前的微弱嗡鸣，被拉长成一口呼吸。",
          question: "在虚拟世界里，温柔听起来是什么样？",
          duration: "06:12"
        },
        {
          id: 3,
          title: "碎片 1999",
          desc: "低保真采样与极为干净的正弦波冲撞。",
          question: "如果世界是碎片，情感还能流动吗？",
          duration: "03:45"
        }
      ]
    },
    process: {
      approach: '方法',
      flow: '信号流',
      items: [
        { title: "采集", content: "不分‘自然’与‘人工’。在游戏场景的边缘录制错误声音，就像在海滩捡贝壳。" },
        { title: "振荡", content: "在 DAW 里，避免完美的网格对齐。让声音稍微‘迟到’，以创造机器的呼吸。" },
        { title: "无防御", content: "寻找无防御的瞬间。清醒，却仍愿意相信柔软的信号。" }
      ]
    },
    contact: {
      education: { label: '教育', items: ['声音艺术 / 作曲', '独立研究者'] },
      live: { label: '现场演出', items: ['系统错误，上海', '虚拟噪声，线上展览'] },
      footer: '身在中国，欢迎对话。'
    }
  }
};

// --- Custom Hook for Animation ---
function useFadeInAndSlide(initialDelay = 0) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, initialDelay);
    return () => clearTimeout(timeout);
  }, [initialDelay]);
  return visible;
}

// --- Button Component for Works ---
function WorkButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 text-white rounded-md transition-colors duration-300 text-sm"
    >
      <Play size={16} className="stroke-1" />
      <span>{label}</span>
    </button>
  );
}

// --- Main Portfolio Component ---
function App() {
  const [language, setLanguage] = useState('en');
  const t = content[language];
  const [selectedWork, setSelectedWork] = useState(null);
  const fadeInHome = useFadeInAndSlide(0);
  const fadeInAbout = useFadeInAndSlide(200);
  const fadeInWorks = useFadeInAndSlide(400);
  const fadeInProcess = useFadeInAndSlide(600);
  const fadeInContact = useFadeInAndSlide(800);

  return (
    <div className="font-sans antialiased min-h-screen bg-white text-slate-900 px-4 md:px-8 py-8 md:py-16 space-y-24">

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center text-sm font-medium">
        <div className="flex gap-6">
          <a href="#about" className="hover:text-slate-600 transition-colors duration-300" onClick={() => setSelectedWork(null)}>
            {t.nav.about}
          </a>
          <a href="#works" className="hover:text-slate-600 transition-colors duration-300" onClick={() => setSelectedWork(null)}>
            {t.nav.works}
          </a>
          <a href="#process" className="hover:text-slate-600 transition-colors duration-300" onClick={() => setSelectedWork(null)}>
            {t.nav.process}
          </a>
          <a href="#contact" className="hover:text-slate-600 transition-colors duration-300" onClick={() => setSelectedWork(null)}>
            {t.nav.contact}
          </a>
        </div>
        <button
          onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-md transition-colors duration-300"
        >
          <Globe size={16} className="stroke-1" />
          <span>{language === 'en' ? '中文' : 'EN'}</span>
        </button>
      </nav>

      {/* Home Section */}
      <section id="home" className={`space-y-2 text-center ${fadeInHome ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-700`}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {t.home.title}
        </h1>
        <p className="text-lg md:text-2xl text-slate-600">
          {t.home.subtitle}
        </p>
      </section>

      {/* About Section */}
      <section id="about" className={`grid md:grid-cols-4 gap-8 items-start ${fadeInAbout ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-700`}>
        <h2 className="md:col-span-1 text-xl md:text-2xl font-semibold">
          {t.nav.about}
        </h2>
        <div className="md:col-span-3 space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-slate-800">
              {t.about.sectionA.label}
            </h3>
            <p className="text-slate-600 font-light">
              {t.about.sectionA.text}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-slate-800">
              {t.about.sectionB.label}
            </h3>
            <p className="text-slate-600 font-light">
              {t.about.sectionB.text1}
            </p>
            <p className="text-slate-600 font-light">
              {t.about.sectionB.text2}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-slate-800">
              {t.about.sectionC.label} <span className="font-light text-slate-500">({t.about.sectionC.word1} / {t.about.sectionC.word2})</span>
            </h3>
            <p className="text-slate-600 font-light">
              {t.about.sectionC.text}
            </p>
          </div>
          <div className="space-y-2">
            <p className="italic text-slate-500 font-light">
              {t.about.sectionD.text}
            </p>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className={`space-y-8 ${fadeInWorks ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-700`}>
        <h2 className="text-xl md:text-2xl font-semibold">
          {t.nav.works}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.works.items.map((work) => (
            <div key={work.id} className="border border-slate-200 p-4 rounded-lg space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium text-slate-800">
                  {work.title}
                </h3>
                <p className="text-slate-600 font-light text-sm">
                  {work.desc}
                </p>
                <p className="text-slate-500 font-light italic text-xs mt-2">
                  {work.question}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-slate-500 font-light">
                  {work.duration}
                </span>
                <WorkButton
                  label={language === 'en' ? 'Listen' : '收听'}
                  onClick={() => setSelectedWork(work.id)}
                />
              </div>
              {selectedWork === work.id && (
                <p className="text-slate-600 font-light text-sm mt-4">
                  {language === 'en'
                    ? 'You are now listening to this piece.'
                    : '你正在收听这段作品。'}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className={`space-y-8 ${fadeInProcess ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-700`}>
        <h2 className="text-xl md:text-2xl font-semibold">
          {t.nav.process}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.process.items.map((item, i) => (
            <div key={i} className="border border-slate-200 p-4 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-slate-800">
                {language === 'en' ? item.title : t.process.items[i].title}
              </h3>
              <p className="text-slate-600 font-light text-sm">
                {language === 'en' ? item.content : t.process.items[i].content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`space-y-8 ${fadeInContact ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-700`}>
        <h2 className="text-xl md:text-2xl font-semibold">
          {t.nav.contact}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="text-xs text-slate-400 uppercase tracking-widest">
              {t.contact.education.label}
            </div>
            <ul className="text-sm font-light text-slate-600 space-y-2">
              {t.contact.education.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="text-xs text-slate-400 uppercase tracking-widest">
              {t.contact.live.label}
            </div>
            <ul className="text-sm font-light text-slate-600 space-y-2">
              {t.contact.live.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 w-full">
          <a 
            href="mailto:shen.ao@example.com" 
            className="text-xl md:text-3xl font-light text-slate-800 hover:text-slate-400 transition-colors duration-300 flex items-center gap-3 md:gap-4 break-all"
          >
            <Mail size={20} className="md:w-6 md:h-6 stroke-1 flex-shrink-0" />
            shen.ao@email.com
          </a>
          <p className="mt-4 text-xs text-slate-400 font-light">
            {t.contact.footer}
          </p>
        </div>

      </section>

    </div>
  );
}

export default App;
