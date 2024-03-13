import Button from "@mui/material/Button";
import React from "react";

export default function FunctionButton({field, icon}: any) {
    const iconWithCustomSize = React.cloneElement(icon, {
        style: {fontSize: 'large'}
    });

    return (
        <Button
            variant="contained"
            className="h-12"
            startIcon={iconWithCustomSize}
            style={{fontSize: '16px'}}
        >
            {field}
        </Button>
    );
}
