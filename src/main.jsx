import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { USE_MOCK_SERVICE_WORKER } from "./utils/constants/config";
const queryClient = new QueryClient();

async function enableMocking() {
  if (USE_MOCK_SERVICE_WORKER) {
    const { worker } = await import("./mocks/browser");
    return worker.start({
      onUnhandledRequest: "bypass"
    });
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
enableMocking().finally(() => {
  root.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
});
