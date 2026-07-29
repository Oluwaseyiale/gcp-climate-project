/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element #root was not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<MantineProvider>
			<QueryClientProvider client={queryClient}>
				<App />
				<ToastContainer position="top-right" autoClose={3500} />
			</QueryClientProvider>
		</MantineProvider>
	</StrictMode>
);
