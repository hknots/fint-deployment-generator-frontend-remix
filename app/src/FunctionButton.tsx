import Button from "@mui/material/Button";

export default function FunctionButton({field}: any) {
    return (
        <Button
            variant="contained"
            className=""
        >
            {field}
        </Button>
    );
}
