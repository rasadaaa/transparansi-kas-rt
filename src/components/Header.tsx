type HeaderProps = {
  page: string;
  setPage: (page: string) => void;
};

function Header({
  page,
  setPage,
}: HeaderProps) {

  return (

    <header className="header">

      <div className="logo">

        <h2>🏡 Transparansi Kas RT 12</h2>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#6b7280",
            fontWeight: 500,
          }}
        >
          Perumahan Griya Bukit Intan
        </p>

      </div>

      <nav className="nav-menu">

        <button
          className={
            page === "dashboard"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={
            page === "report"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setPage("report")}
        >
          Laporan Keuangan
        </button>

      </nav>

    </header>

  );

}

export default Header;