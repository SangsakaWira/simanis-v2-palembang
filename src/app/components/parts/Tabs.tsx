"use client";

import Image from "next/image";
import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  image: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <div className="w-full lg:max-w-6xl mx-auto">
      <div className="flex w-[60%] ml-auto">
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 -mb-px font-medium transition-colors ${
              activeTab === tab.id
                ? "text-[#19afff] after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:rounded-full after:bg-[#19afff]"
                : "border-transparent text-[#19afff]/40"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-4 rounded-b-lg">
        {items.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="flex items-center gap-x-5 h-[300px]">
                <div className="w-[40%]">
                  <Image
                    src={tab.image}
                    alt={tab.label}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="space-y-2 text-white w-[60%]">
                  <h4 className="text-4xl font-semibold">{tab.label}</h4>
                  <p className="text-lg">{tab.content}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
