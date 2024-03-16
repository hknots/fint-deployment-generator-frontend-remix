import FunctionButton from "~/src/FunctionButton";
import {
    AllInbox,
    AutoGraph,
    ControlPoint,
    ControlPointDuplicate,
    Engineering,
    Link,
    Lock,
    Share,
    Storage
} from "@mui/icons-material";

export default function AsideFunctions() {
    const buttonFields = {
        Env: <ControlPoint/>,
        EnvFrom: <ControlPointDuplicate/>,
        Prometheus: <AutoGraph/>,
        "1-Password": <Lock/>,
        Kafka: <AllInbox/>,
        Database: <Storage/>,
        Url: <Link/>,
        Ingress: <Share/>,
        Advanced: <Engineering/>,
    }

    return (
        <aside className="flex flex-shrink-0 justify-between flex-col h-full bg-slate-500 p-2">
            <div className="grid grid-cols-2 auto-rows-max gap-2 w-96">
                {Object.entries(buttonFields).map(([field, icon]) => (
                    <FunctionButton field={field} icon={icon}/>
                ))}
            </div>
            <div className="grid mt-8 grid-cols-2 w-full gap-2">
                <FunctionButton field="Display"/>
                <FunctionButton field="Download"/>
            </div>
        </aside>
    )
}