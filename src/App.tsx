import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainPage from "./pages/mainPage.tsx";

const client = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={client}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
