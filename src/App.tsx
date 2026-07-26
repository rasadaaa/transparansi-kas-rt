import "./App.css";

import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import ReportPage from "./pages/ReportPage";

import { usePage } from "./hooks/usePage";

function App() {

  const { page, setPage } = usePage();

  return (

    <div className="app">

      <Header
        page={page}
        setPage={setPage}
      />

      {page === "dashboard" && (

        <Dashboard />

      )}

      {page === "report" && (

        <ReportPage />

      )}

    </div>

  );

}

export default App;