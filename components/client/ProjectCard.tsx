"use client";
import React from "react";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/content/types";

export type ProjectCardProps = {
    project: PortfolioItem;
    isActive?: boolean;
    onClick?: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive = true, onClick }) => {
    const handleActivate = (e: React.MouseEvent | React.KeyboardEvent) => {
        if (!isActive && onClick) {
            e.preventDefault();
            e.stopPropagation();
            onClick();
            return;
        }

        if (!project.link) return;
        window.open(project.link, "_blank", "noopener,noreferrer");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            handleActivate(e);
        }
    };

    return (
        <div
            onClick={handleActivate}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            className={`group rounded-3xl overflow-hidden flex flex-col h-105 md:h-120 w-full max-w-88
                mx-auto relative cursor-pointer transition-shadow
                ${isActive ? "hover:shadow-2xl" : ""}`}
        >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#EAD7BB] via-transparent to-[#C2996B] p-px z-0">
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white" />
            </div>

            <div className="absolute inset-0 z-0 bg-linear-to-br from-[#F9F7F5] to-white pointer-events-none" />

            {/* Content Container */}
            <div
                className="relative z-10 p-6 flex flex-col h-full"
            >
                {/* Header */}
                <div
                    className="flex justify-between items-start mb-6"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C2996B] bg-[#FCF7F1] px-4 py-1.5 rounded-full border border-[#C2996B]/20 shadow-sm">
                        {project.category ?? "Project"}
                    </span>
                    {project.link && isActive && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 bg-linear-to-tr from-[#1A1A1A] to-gray-800 text-[#F2C18D] rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300 z-50 text-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>

                {/* Primary Image / Thumbnail floating out */}
                <div
                    className="w-full h-40 md:h-48 rounded-2xl overflow-hidden mb-6 shadow-[0_10px_30px_rgba(194,153,107,0.2)] border border-white/50 bg-[#F9F7F5] relative group/img"
                >
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                        />
                    ) : (
                        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#F2C18D]/40 to-[#C2996B]/30 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                            <span className="text-[#C2996B] font-serif italic text-2xl drop-shadow-md">No Image</span>
                        </div>
                    )}
                    {/* Inner sheen on image */}
                    <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent pointer-events-none" />
                </div>

                {/* Text Info */}
                <div
                    className="grow flex flex-col justify-end"
                >
                    <h4 className="text-xl md:text-2xl font-black tracking-tight mb-3 leading-tight text-[#1A1A1A] group-hover:text-[#C2996B] transition-colors duration-300">
                        {project.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3 font-medium">
                        {project.description}
                    </p>
                </div>

                {/* Footer Tags */}
                <div
                    className="mt-6 pt-4 border-t border-[#EAD7BB]/50 flex items-center justify-between"
                >
                    <div className="flex gap-2 flex-wrap max-w-full">
                        {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-md uppercase tracking-wider border border-black/5 hover:bg-[#C2996B] hover:text-white transition-colors duration-300">
                                #{tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-[10px] font-bold text-gray-400 self-center">+{project.tech.length - 3}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
