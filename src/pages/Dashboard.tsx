import { useState } from "react";

import "../App.css";

import Hero from "../components/Hero";
import Charts from "../components/Charts";
import UnpaidResidents from "../components/UnpaidResidents";
import ResidentTable from "../components/ResidentTable";


import { useDashboard } from "../hooks/useDashboard";

function formatRupiah(number: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
}

function Dashboard() {

  const [bulan, setBulan] = useState("Januari");
  const [tahun, setTahun] = useState(2026);

  const { loading, dashboard } = useDashboard(
    bulan,
    tahun
  );

  return (

    <main className="container">

      <Hero />

      <section className="filter-section">

        <div className="filter-item">

          <label>Bulan</label>

          <select
            value={bulan}
            onChange={(e) => setBulan(e.target.value)}
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
            onChange={(e) =>
              setTahun(Number(e.target.value))
            }
          >
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
          </select>

        </div>

      </section>

      <section className="summary-grid">

        <div className="card saldo">

          <h3>Saldo Awal</h3>

          <h2>

            {loading
              ? "Loading..."
              : formatRupiah(dashboard.saldoAwal)}

          </h2>

        </div>

        <div className="card pemasukan">

          <h3>Total Pemasukan</h3>

          <h2>

            {loading
              ? "Loading..."
              : formatRupiah(dashboard.pemasukan)}

          </h2>

        </div>

        <div className="card pengeluaran">

          <h3>Total Pengeluaran</h3>

          <h2>

            {loading
              ? "Loading..."
              : formatRupiah(dashboard.pengeluaran)}

          </h2>

        </div>

        <div className="card akhir">

          <h3>Saldo Akhir</h3>

          <h2>

            {loading
              ? "Loading..."
              : formatRupiah(dashboard.saldoAkhir)}

          </h2>

        </div>

      </section>

      <Charts chart={dashboard.chart} />

      <UnpaidResidents
        residents={dashboard.unpaidResidents}
      />

      <ResidentTable
        residents={dashboard.residents}
      />


    </main>

  );

}

export default Dashboard;