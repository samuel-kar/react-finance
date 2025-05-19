import { createFileRoute } from "@tanstack/react-router";
import { Aboutinfo } from "@/components/Aboutinfo";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center mt-20 px-4">
      <Aboutinfo />
    </div>
  );
}
