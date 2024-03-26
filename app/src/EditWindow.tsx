import MetaData from "~/src/functions/Metadata";
import Env from "~/src/functions/Env";

export default function EditWindow() {
    return (
        <main className="grid grid-cols-12 grid-rows-12 gap-4 p-4 w-full h-full">
            <MetaData />
            <MetaData />
            <MetaData />
            <Env />
            <MetaData />
            <MetaData />
        </main>
    )
}
