"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface VideoGalleryProps {
  videos: string[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [activeId, setActiveId] = useState(videos[0]);

  return (
    <div className="flex flex-col gap-3">
      {/* Hlavní video */}
      <div className="rounded-2xl overflow-hidden bg-black aspect-video w-full">
        <iframe
          key={activeId}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${activeId}`}
          title="Filozofie Vyšší level"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Náhledy — horizontální scroll */}
      <div
        className="flex gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {videos.map((id, i) => (
          <button
            key={id}
            onClick={() => setActiveId(id)}
            className="group relative flex-shrink-0 rounded-lg overflow-hidden"
            style={{ width: 120, aspectRatio: "16/9" }}
          >
            <Image
              src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
              alt={`Video ${i + 1}`}
              fill
              className={`object-cover transition-all duration-300 ${
                activeId === id ? "brightness-100" : "brightness-40 group-hover:brightness-75"
              }`}
              sizes="120px"
            />
            {/* Aktivní linka */}
            {activeId === id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3fb1e1]" />
            )}
            {/* Play hover */}
            {activeId !== id && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlay} className="text-[#142f4c] text-[9px] pl-px" />
                </div>
              </div>
            )}
            {/* Číslo */}
            <div className="absolute bottom-1 right-1.5 bg-black/60 text-white text-[10px] px-1 py-px rounded font-mono">
              {String(i + 1).padStart(2, "0")}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
