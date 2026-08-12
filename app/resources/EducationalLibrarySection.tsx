"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, GraduationCap, Layers, FileText, Scissors, Sparkles, CheckCircle2, Globe, ChevronDown, ChevronUp } from "lucide-react";

export interface ArticleLink {
  href: string;
  title: string;
  category: string;
  catId: string;
  desc: string;
}

const CATEGORIES = [
  { id: "all", label: "All Guides", count: 88, icon: GraduationCap },
  { id: "fundamentals", label: "Fundamentals & Process", count: 19, icon: Layers },
  { id: "tech-packs", label: "Tech Packs & Patterns", count: 12, icon: FileText },
  { id: "sampling", label: "Sampling & Prototyping", count: 9, icon: Scissors },
  { id: "fabrics", label: "Fabrics & Customization", count: 17, icon: Sparkles },
  { id: "quality", label: "Quality Control & Audits", count: 14, icon: CheckCircle2 },
  { id: "sourcing", label: "Sourcing & Logistics", count: 20, icon: Globe },
];

export default function EducationalLibrarySection({ articles }: { articles: ArticleLink[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat =
        activeCategory === "all" || art.catId === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [articles, searchQuery, activeCategory]);

  const visibleArticles = isExpanded ? filteredArticles : filteredArticles.slice(0, 9);
  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 shadow-sm">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#E5DDD3]">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 border border-[#C8A882] flex items-center justify-center text-[#C8A882] bg-[#FAF9F6]">
              <GraduationCap size={20} strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-3xl font-medium text-[#1A1A1A]">
              Educational Library
            </h2>
            <span className="px-2.5 py-1 bg-[#2D5016] text-[#FAF9F6] text-[11px] font-semibold tracking-wider uppercase">
              88 Guides
            </span>
          </div>
          <p className="text-sm text-[#6B6560] max-w-2xl">
            Filter or search our plain-language educational guides by topic right here - covering tech packs, pattern making, fabric choice, quality control, and sourcing.
          </p>
        </div>

        {/* Quick Search Input */}
        <div className="relative shrink-0 w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6560]" size={16} />
          <input
            type="text"
            placeholder="Filter guides by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 bg-[#FAF9F6] border border-[#E5DDD3] text-[#1A1A1A] placeholder-[#9B948E] text-xs focus:outline-none focus:border-[#2D5016] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wider text-[#6B6560]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Pills (Tabs) */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? articles.length
              : articles.filter((a) => a.catId === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setIsExpanded(false);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wide transition-all ${
                isActive
                  ? "bg-[#1A1A1A] text-[#FAF9F6] border border-[#1A1A1A]"
                  : "bg-[#FAF9F6] text-[#6B6560] border border-[#E5DDD3] hover:border-[#2D5016] hover:text-[#1A1A1A]"
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

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E5DDD3]">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">
          Showing {visibleArticles.length} of {filteredArticles.length} {currentCategoryObj?.label} Guides
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {(searchQuery || activeCategory !== "all") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
              setIsExpanded(false);
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] hover:text-[#2D5016] transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Cards Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12 bg-[#FAF9F6] border border-[#E5DDD3] p-8">
          <p className="text-base font-display font-light text-[#1A1A1A] mb-2">No matching guides found</p>
          <p className="text-xs text-[#6B6560] mb-4">Try clearing your search term or selecting another category.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-5 py-2.5 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider hover:bg-[#2D5016] transition-colors"
          >
            Show All 88 Guides
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {visibleArticles.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="group flex flex-col justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-all hover:shadow-sm"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A882] block mb-2">
                    {art.category}
                  </span>
                  <h3 className="font-display text-base font-medium text-[#1A1A1A] group-hover:text-[#2D5016] transition-colors leading-snug mb-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#6B6560] leading-relaxed line-clamp-2 mb-4">
                    {art.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pt-3 border-t border-[#E5DDD3]">
                  <span>Read Guide</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Expand / Collapse Button */}
          {filteredArticles.length > 9 && (
            <div className="text-center pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider hover:bg-[#2D5016] transition-colors"
              >
                <span>
                  {isExpanded
                    ? "Show Less Guides"
                    : `View All ${filteredArticles.length} Guides in ${currentCategoryObj?.label}`}
                </span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
