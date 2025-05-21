import React from "react";

interface DisplayProps {
    children?: React.ReactNode;
    conditional?: boolean;
    match: boolean | number | string | undefined;
}

export const Display = ({ children, match, conditional }: DisplayProps) => {
    if (conditional) {
        const [TruthyChild, FalsyChild] = children as React.ReactNode[];

        return match ? TruthyChild : FalsyChild;
    }

    if (match) {
        return children;
    }

    return null;
};
