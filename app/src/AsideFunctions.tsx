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
        <aside className="flex-shrink-0 grid grid-cols-2 auto-rows-max gap-2 p-2 w-96 bg-slate-500">
            {Object.entries(buttonFields).map(([field, icon]) => (
                <FunctionButton field={field} icon={icon}/>
            ))}
        </aside>
    )
}