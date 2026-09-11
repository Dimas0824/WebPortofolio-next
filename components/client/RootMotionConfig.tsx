"use client";

import { MotionConfig } from "framer-motion";

interface RootMotionConfigProps {
    children: React.ReactNode;
}

const RootMotionConfig: React.FC<RootMotionConfigProps> = ({ children }) => {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default RootMotionConfig;
