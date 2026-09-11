"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor: React.FC = () => {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const [isFinePointer, setIsFinePointer] = useState(false);

    useEffect(() => {
        // Check for pointer:fine device (desktop/tablet vs mobile touch)
        const mediaQuery = window.matchMedia("(pointer: fine)");
        setIsFinePointer(mediaQuery.matches);

        const handleQueryChange = (e: MediaQueryListEvent) => {
            setIsFinePointer(e.matches);
        };

        mediaQuery.addEventListener("change", handleQueryChange);
        return () => mediaQuery.removeEventListener("change", handleQueryChange);
    }, []);

    useEffect(() => {
        if (!isFinePointer) {
            return;
        }

        const handleMouseMove = (event: MouseEvent): void => {
            x.set(event.clientX - 12);
            y.set(event.clientY - 12);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isFinePointer, x, y]);

    // Hide cursor on non-fine pointer devices (mobile), show on desktop
    const cursorStyle = !isFinePointer ? { display: "none" } : {};

    return (
        <motion.div
            className="fixed z-[100] h-6 w-6 rounded-full border border-[#C2996B] pointer-events-none"
            style={{ ...cursorStyle, x, y }}
        />
    );
};

export default CustomCursor;
