import { ReactNode, ElementType } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "outline" | "ghost";
    className?: string;
    icon?: ElementType;
    iconPosition?: "left" | "right";
    isActive?: boolean;
}

export default function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
    icon: Icon,
    iconPosition = "right",
    isActive = false,
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer text-sm";

    const variants = {
        primary: isActive ? "bg-black-soft text-white" : "bg-cream text-black hover:bg-cream-light",
        outline: "bg-transparent border border-orange text-white hover:bg-cream-light hover:text-black hover:border-cream-light",
        ghost: "bg-transparent text-orange hover:text-orange",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {Icon && iconPosition === "left" && <Icon fontSize="small" />}
            {children}
            {Icon && iconPosition === "right" && <Icon fontSize="small" />}
        </button>
    );
}
