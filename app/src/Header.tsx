import React, { useState } from 'react';
import { Autocomplete, TextField, Button } from "@mui/material";

export default function Header() {
    const [inputValue, setInputValue] = useState(""); // State for text field value
    const allowedValuesSet = new Set(["AllowedValue1", "AllowedValue2"]);

    const notImportable = !allowedValuesSet.has(inputValue);

    const handleInputChange = (event, newInputValue) => {
        setInputValue(newInputValue);
    };

    return (
        <div className="w-full h-header pl-96 flex bg-amber-200">
            <div className="m-auto flex items-center gap-4">
                <Autocomplete
                    freeSolo
                    disablePortal
                    id="combo-box-demo"
                    options={Array.from(allowedValuesSet)}
                    value={inputValue}
                    onInputChange={handleInputChange}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Project"
                        />
                    )}
                />
                <Button
                    variant="contained"
                    disabled={notImportable}
                    onClick={() => console.log("Button clicked")}
                >
                    Import
                </Button>
            </div>
        </div>
    );
}
