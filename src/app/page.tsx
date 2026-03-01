import Link from "next/link";

const reports = [
  {
    id: "chuhai-content-localization",
    title: "出海内容本地化 Agent",
    date: "2026-03-01",
    summary: "跨境电商卖家需要一键生成多平台本地化内容，竞品少，付费意愿强",
    tags: ["出海", "内容", "高热度"],
    price: 19,
    fullPrice: 39,
  },
  {
    id: "ai-design-workflow",
    title: "AI 设计工作流助手",
    date: "2026-02-28",
    summary: "设计师 60% 时间花在重复工作，AI 辅助工具有巨大市场",
    tags: ["设计", "效率", "中高热度"],
    price: 19,
    fullPrice: 39,
  },
  {
    id: "influencer-marketing-agent",
    title: "网红营销 Agent",
    date: "2026-02-27",
    summary: "海外网红合作沟通成本高，AI 匹配 + Outreach 自动化",
    tags: ["营销", "网红", "中热度"],
    price: 19,
    fullPrice: 39,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          发现下一个 AI Agent 机会
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          每日分析全球 AI Agent 需求，竞品分析，市场数据
          <br />
          帮助你找到下一个可以做的 AI 产品
        </p>
        <div className="flex justify-center gap-4">
          <a href="#reports" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition">
            查看报告
          </a>
          <a href="#pricing" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition border border-white/20">
            订阅服务
          </a>
        </div>
      </section>

      {/* Reports */}
      <section id="reports" className="py-12">
        <h3 className="text-2xl font-bold text-white mb-8">最新报告</h3>
        <div className="grid gap-6">
          {reports.map((report) => (
            <Link
              key={report.id}
              href={`/report/${report.id}`}
              className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    {report.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                    {report.title}
                  </h4>
                </div>
                <span className="text-white/50">{report.date}</span>
              </div>
              <p className="text-white/70 mb-4">{report.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">
                  👁️ 免费预览 &nbsp; 💰 ¥{report.price} 起
                </span>
                <span className="text-purple-400 group-hover:text-purple-300 transition">
                  查看详情 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">订阅服务</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-white mb-2">基础版</h4>
            <p className="text-3xl font-bold text-purple-400 mb-4">¥19<span className="text-sm text-white/50">/月</span></p>
            <ul className="text-white/70 space-y-2 mb-6">
              <li>✓ 每日简报</li>
              <li>✓ 基础竞品分析</li>
              <li>✓ 市场数据</li>
              <li>✗ 详细报告（2000字+）</li>
            </ul>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-medium transition border border-white/20">
              订阅
            </button>
          </div>
          <div className="bg-gradient-to-b from-purple-500/20 border border-purple-500/30 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              最受欢迎
            </div>
            <h4 className="text-xl font-bold text-white mb-2">专业版</h4>
            <p className="text-3xl font-bold text-purple-400 mb-4">¥39<span className="text-sm text-white/50">/月</span></p>
            <ul className="text-white/70 space-y-2 mb-6">
              <li>✓ 每日简报</li>
              <li>✓ 完整竞品分析（2000字+）</li>
              <li>✓ 市场数据 & 趋势</li>
              <li>✓ 竞品网站链接</li>
              <li>✓ 功能体验分析</li>
              <li>✓ MVP 建议</li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition">
              订阅
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
