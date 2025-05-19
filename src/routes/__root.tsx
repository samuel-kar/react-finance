import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar"; //
import "../styles.css";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <div
          className="min-h-screen flex flex-col bg-cover bg-center"
          style={{ backgroundImage: "url('wave-haikei.png')" }}
        >
          <Navbar />
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </QueryClientProvider>
    </>
  ),
});
