import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Env() {
    const [values, setValues] = useState([
        {
            name: "test",
            value: "testing"
        }
    ])
    return (
        <div className="p-2 flex flex-col gap-2 col-span-5 row-span-3 bg-slate-500 items-center">
            <Typography variant="h5">Environment Variables</Typography>
            <div className="w-full h-full p-2">
                <div className="flex gap-2 items-center m-auto max-w-max h-20">
                    <TextField className="w-60" placeholder="Name"/>
                    <TextField className="w-60" placeholder="Value"/>
                    <Button variant="contained">Add</Button>
                </div>
            </div>
        </div>
    )
}