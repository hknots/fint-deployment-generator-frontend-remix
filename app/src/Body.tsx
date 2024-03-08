import AsideFunctions from "~/src/AsideFunctions";
import EditWindow from "~/src/EditWindow";

export default function Body() {
    return (
        <div className="flex flex-row w-full h-full bg-amber-100">
            <AsideFunctions/>
            <EditWindow/>
        </div>
    );
}
