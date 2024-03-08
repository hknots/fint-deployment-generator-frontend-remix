import Typography from "@mui/material/Typography";
import React from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

export default function MetaData() {
    return (
        <div className="w-40">
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* You can add more Accordions here */}
        </div>
    )
}