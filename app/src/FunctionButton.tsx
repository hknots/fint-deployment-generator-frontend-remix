import Button from "@mui/material/Button";
import React from "react";

interface FunctionButtonProps {
field: string;
    icon?: React.ReactElement;
}

export default function FunctionButton({ field, icon }: FunctionButtonProps) {
    const iconWithCustomSize = icon ? React.cloneElement(icon, {
        style: { fontSize: 'large' }
    }) : undefined;

    return (
        <Button
            variant="contained"
            className="h-12"
            startIcon={iconWithCustomSize}
            style={{ fontSize: '16px' }}
        >
            {field}
        </Button>
    );
}
