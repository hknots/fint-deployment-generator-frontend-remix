import FunctionButton from "~/src/FunctionButton";

export default function AsideFunctions() {
    const buttonFields = ["Env", "EnvFrom", "Prometheus", "OnePassword", "Kafka", "Database", "Url", "Ingress", "Advanced"];

    return (
        <aside className="flex-shrink-0 grid grid-cols-2 auto-rows-max gap-2 p-2 w-96 bg-amber-200">
                {buttonFields.map((field) => (
                    <FunctionButton
                        key={field}
                        field={field}
                    />
                ))}
        </aside>
    )
}