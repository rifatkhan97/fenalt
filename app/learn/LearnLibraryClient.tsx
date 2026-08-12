"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, Layers, Scissors, FileText, CheckCircle2, Globe, Sparkles } from "lucide-react";

export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  desc: string;
}

const CATEGORIES = [
  { id: "all", label: "All Guides", icon: BookOpen },
  { id: "fundamentals", label: "Fundamentals & Process", icon: Layers },
  { id: "tech-packs", label: "Tech Packs & Patterns", icon: FileText },
  { id: "sampling", label: "Sampling & Prototyping", icon: Scissors },
  { id: "fabrics", label: "Fabrics & Customization", icon: Sparkles },
  { id: "quality", label: "Quality Control & Audits", icon: CheckCircle2 },
  { id: "sourcing", label: "Sourcing & Logistics", icon: Globe },
];

export default function LearnLibraryClient({ articles }: { articles: ArticleItem[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || art.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, activeCategory]);

  const groupedArticles = useMemo(() => {
    const map: Record<string, ArticleItem[]> = {};
    filteredArticles.forEach((art) => {
      if (!map[art.category]) map[art.category] = [];
      map[art.category].push(art);
    });
    return map;
  }, [filteredArticles]);

  return (
    <div>
      {/* Search & Category Filter Bar */}
      <div className="bg-[#FAF9F6] border border-[#E5DDD3] p-6 lg:p-8 mb-12 shadow-sm">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6560]" size={20} />
          <input
            type="text"
            placeholder="Search 88 educational guides by keyword (e.g. GSM, Tech Pack, AQL, Hoodie, Fabric)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-[#F2EFE9] border border-[#E5DDD3] text-[#1A1A1A] placeholder-[#9B948E] text-sm focus:outline-none focus:border-[#2D5016] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wider text-[#6B6560] hover:text-[#1A1A1A]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? articles.length
                : articles.filter((a) => a.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-[#1A1A1A] text-[#FAF9F6] border border-[#1A1A1A]"
                    : "bg-[#F2EFE9] text-[#6B6560] border border-[#E5DDD3] hover:border-[#2D5016] hover:text-[#1A1A1A]"
                }`}
              >
                <Icon size={14} className={isActive ? "text-[#C8A882]" : "text-[#6B6560]"} />
                <span>{cat.label}</span>
                <span
                  className={`ml-1 px-1.5 py-0.5 text-[10px] rounded-full ${
                    isActive ? "bg-[#2D5016] text-[#FAF9F6]" : "bg-[#E5DDD3] text-[#6B6560]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result Count Banner */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DDD3]">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">
          Showing <span className="text-[#2D5016] font-bold">{filteredArticles.length}</span> Guides
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
        {(searchQuery || activeCategory !== "all") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] hover:text-[#2D5016] transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Articles Grid / Category Groups */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-[#FAF9F6] border border-[#E5DDD3] p-8">
          <p className="text-lg font-display font-light text-[#1A1A1A] mb-2">No matching guides found</p>
          <p className="text-sm text-[#6B6560] mb-6">Try broadening your search term or selecting "All Guides".</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-6 py-3 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider hover:bg-[#2D5016] transition-colors"
          >
            Show All 88 Guides
          </button>
        </div>
      ) : activeCategory !== "all" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <Link
              key={art.slug}
              href={`/learn/${art.slug}`}
              className="group flex flex-col justify-between p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-all hover:shadow-sm"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A882] block mb-2">
                  {CATEGORIES.find((c) => c.id === art.category)?.label}
                </span>
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] group-hover:text-[#2D5016] transition-colors leading-snug mb-3">
                  {art.title}
                </h3>
                <p className="text-xs text-[#6B6560] leading-relaxed line-clamp-3 mb-6">
                  {art.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pt-4 border-t border-[#E5DDD3]">
                <span>Read Full Guide</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
            const catArticles = groupedArticles[cat.id] || [];
            if (catArticles.length === 0) return null;
            const Icon = cat.icon;

            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E5DDD3]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#C8A882] flex items-center justify-center text-[#C8A882]">
                      <Icon size={16} />
                    </div>
                    <h2 className="font-display text-2xl font-medium text-[#1A1A1A]">
                      {cat.label}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6560]">
                    {catArticles.length} Articles
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catArticles.map((art) => (
                    <Link
                      key={art.slug}
                      href={`/learn/${art.slug}`}
                      className="group flex flex-col justify-between p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-all hover:shadow-sm"
                    >
                      <div>
                        <h3 className="font-display text-lg font-medium text-[#1A1A1A] group-hover:text-[#2D5016] transition-colors leading-snug mb-3">
                          {art.title}
                        </h3>
                        <p className="text-xs text-[#6B6560] leading-relaxed line-clamp-3 mb-6">
                          {art.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pt-4 border-t border-[#E5DDD3]">
                        <span>Read Full Guide</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
