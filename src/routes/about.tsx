import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center mt-20 px-4">
      <p>123</p>
    </div>
  );
}
