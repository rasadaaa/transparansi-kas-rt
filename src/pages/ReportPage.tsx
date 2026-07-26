import { useState } from "react";

import "../App.css";

import Report from "../components/Report";

import { useDashboard } from "../hooks/useDashboard";

function ReportPage() {

  const [bulan, setBulan] = useState("Januari");
  const [tahun, setTahun] = useState(2026);

  const { dashboard } = useDashboard(
    bulan,
    tahun
  );

  return (

    <main className="container">

      <section className="filter-section">

        <div className="filter-item">

          <label>Bulan</label>

          <select
            value={bulan}
            onChange={(e)=>setBulan(e.target.value)}
          >

            <option>Januari</option>
            <option>Februari</option>
            <option>Maret</option>
            <option>April</option>
            <option>Mei</option>
            <option>Juni</option>
            <option>Juli</option>
            <option>Agustus</option>
            <option>September</option>
            <option>Oktober</option>
            <option>November</option>
            <option>Desember</option>

          </select>

        </div>

        <div className="filter-item">

          <label>Tahun</label>

          <select
            value={tahun}
            onChange={(e)=>setTahun(Number(e.target.value))}
          >

            <option value={2025}>2025</option>
            <option value={2026}>2026</option>

          </select>

        </div>

      </section>

      <Report
        report={dashboard.report}
        bulan={bulan}
        tahun={tahun}
      />

    </main>

  );

}

export default ReportPage;