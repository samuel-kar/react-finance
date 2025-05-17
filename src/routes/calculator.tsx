import { createFileRoute } from "@tanstack/react-router";
import { Savingcalculator } from "@/components/Savingcalculator";

export const Route = createFileRoute("/calculator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Savingcalculator />;
}
