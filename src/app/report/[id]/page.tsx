import Link from "next/link";
import { notFound } from "next/navigation";

// 报告数据
const reportsData: Record<string, any> = {
  "chuhai-content-localization": {
    title: "出海内容本地化 Agent",
    date: "2026-03-01",
    tags: ["出海", "内容", "高热度"],
    freeContent: "跨境电商卖家需要在 TikTok、Instagram、YouTube、邮件等多个平台发布内容，但人工本地化成本高、速度慢。",
    paidContent: "完整竞品分析...",
  },
};

// 免费预览内容
const freePreviews: Record<string, string> = {
  "chuhai-content-localization": `
## 🎯 机会概述

跨境电商卖家需要在 TikTok、Instagram、YouTube、邮件等多个平台发布内容，但人工本地化成本高、速度慢。

## 📊 市场数据

- 全球跨境电商卖家：2000万+
- 中国出海品牌：10万+
- 内容本地化市场规模：$50亿+

## 💡 需求

一键生成多平台、多风格本地化内容

## 🔥 目标用户

- 跨境电商中小卖家（1-20人）
- 年营收 $50万-500万
- 付费意愿：$29-99/月

## ⚠️ 痛点

- 人工翻译太慢
- 不会当地表达
- 不同平台风格不同
- 成本太高
  `,
};

// 完整报告（付费内容）
const fullReports: Record<string, string> = {
  "chuhai-content-localization": `
## 详细竞品分析

### 1. Copy.ai

**网站**: https://copy.ai

**定位**: AI 文案生成工具

**核心功能**:
- 80+ 种文案模板
- 多语言翻译（25+ 语言）
- Brand Voice 个性化

**定价**:
- 免费版：2000字/月
- Pro版：$49/月
- Teams版：$249/月

**解决程度**: 30%

**不足**:
- 不支持多平台内容适配
- 没有当地文化洞察
- 无法批量生成

---

### 2. Jasper.ai

**网站**: https://jasper.ai

**定位**: 企业级 AI 文案

**核心功能**:
- 长文案生成
- SEO 优化
- 品牌一致性

**定价**:
- Business：$599/月起

**解决程度**: 40%

**不足**:
- 价格太高，中小卖家用不起
- 没有专门的出海场景
- 缺乏当地热点把握

---

### 3. 携程灵感

**网站**: https://inspiration.ctrip.com

**定位**: 出境游内容生成

**解决程度**: 20%

**不足**:
- 仅限旅游行业
- 仅中国市场
- 无法对接电商

---

### 4. 自研团队

很多出海品牌选择自己招人做本地化：

**成本**: $2000-5000/月

**问题**:
- 人员流动大
- 质量不稳定
- 效率低

**解决程度**: 60%

---

## 用户痛点数据

通过 Reddit、Twitter、知乎调研：

| 痛点 | 提及频率 |
|------|----------|
| 人工翻译太慢 | 45% |
| 不会当地表达 | 38% |
| 不同平台风格不同 | 35% |
| 成本太高 | 32% |
| 不知道什么内容火 | 28% |

---

## 目标用户画像

### 核心用户

**跨境电商中小卖家**
- 规模：1-20人
- 年营收：$50万-500万
- 痛点：想出海但不懂当地内容
- 付费意愿：$29-99/月

### 次要用户

**DTC 品牌**
- 想做 TikTok、IG 矩阵
- 需要批量内容
- 付费意愿：$99-199/月

---

## 商业模式建议

### 订阅制

| 套餐 | 价格 | 功能 |
|------|------|------|
| Starter | ¥99/月 | 100条/月，3平台 |
| Pro | ¥299/月 | 无限量，10平台 |
| Enterprise | ¥999/月 | API，自定义 |

### 增值服务

- 热点追踪：+¥99/月
- 专属咨询：+¥499/月
- 定制模型：单独报价

---

## MVP 开发建议

### 核心功能

1. **输入**: 产品信息 + 目标市场
2. **输出**: 
   - 80+ 条文案变体
   - 适配不同平台风格
   - 热门 hashtag
   - 当地热点梗

### 技术方案

- LLM: GPT-4 / Claude
- 提示词工程：平台风格模板
- 数据库：热门内容库

### 开发周期

- MVP: 2-3 周
- Beta: 1 个月
- 正式版: 2 个月

---

## 风险与挑战

1. **大厂入局**: Copy.ai 等可能快速跟进
2. **同质化**: 门槛不高，容易复制
3. **质量**: AI 生成内容需要人工审核

---

## 行动建议

**立即行动**:
1. 先做 MVP，验证需求
2. 找 10 个种子用户免费试用
3. 收集反馈，快速迭代

**长期**:
1. 积累热门内容数据
2. 建立品牌认知
3. 向上下游扩展
`,
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ReportPage({ params }: Props) {
  const { id } = await params;
  const report = reportsData[id] || { title: "未知报告", date: "", tags: [] };
  const freeContent = freePreviews[id] || "暂无预览";
  const fullContent = fullReports[id] || "";

  return (
    <div>
      <Link href="/" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
        ← 返回首页
      </Link>

      <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <header className="p-8 border-b border-white/10">
          <div className="flex gap-2 mb-4">
            {(report.tags || []).map((tag: string) => (
              <span key={tag} className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{report.title}</h1>
          <p className="text-white/50">{report.date}</p>
        </header>

        <div className="p-8">
          {/* 免费预览 */}
          <div className="prose prose-invert max-w-none mb-8">
            {freeContent.split("\n").map((line, i) => (
              line.trim() && <p key={i} className="text-white/80 mb-2">{line}</p>
            ))}
          </div>

          {/* 付费解锁区域 */}
          <div className="my-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-white text-center mb-4">💰 付费解锁完整竞品分析（2000字+）</p>
            <div className="flex justify-center gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">¥19</p>
                <p className="text-white/50 text-sm">基础版</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">¥39</p>
                <p className="text-white/50 text-sm">专业版</p>
              </div>
            </div>
            <p className="text-white/50 text-sm text-center">
              🎉 新用户免费试用 3 天！
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition border border-white/20">
                微信支付 ¥19
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
                微信支付 ¥39
              </button>
            </div>
          </div>

          {/* 付费内容（模糊显示） */}
          <div className="prose prose-invert max-w-none opacity-40 select-none">
            <p className="text-white/50">—— 以下内容付费可见 ——</p>
            {fullContent.split("\n").map((line, i) => (
              line.trim() && <p key={i} className="text-white/50">{line}</p>
            ))}
          </div>
        </div>
      </article>

      {/* 发送到微信 */}
      <div className="mt-8 flex justify-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition flex items-center gap-2">
          📱 发送到微信
        </button>
      </div>
    </div>
  );
}
