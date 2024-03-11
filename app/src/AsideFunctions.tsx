import FunctionButton from "~/src/FunctionButton";

export default function AsideFunctions() {
    const buttonFields = ["Env", "EnvFrom", "Prometheus", "OnePassword", "Kafka", "Database", "Url", "Ingress", "Advanced"];

    return (
        <aside className="flex flex-col flex-shrink-0 gap-2 w-96 h-full bg-amber-200">
            <div className="grid grid-cols-2 auto-rows-max gap-2 p-2 w-full">
                {buttonFields.map((field) => (
                    <FunctionButton
                        key={field}
                        field={field}
                    />
                ))}
            </div>
        </aside>
    )
}