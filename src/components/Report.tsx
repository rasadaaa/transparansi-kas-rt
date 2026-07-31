import BuktiTransaksi from "./BuktiTransaksi";
import { downloadReportPDF } from "../utils/pdf";

type ReportItem = {
  tanggal: string;
  keterangan: string;
  masuk: number;
  keluar: number;
  saldo: number;
  linkBukti: string;
};

type ReportData = {
  saldoAwal: number;
  transaksi: ReportItem[];
  totalMasuk: number;
  totalKeluar: number;
  saldoAkhir: number;
};

type Props = {
  report: ReportData;
  bulan: string;
  tahun: number;
};

function rupiah(nominal: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nominal);
}

function formatTanggal(value: string) {

  const d = new Date(value);

  if (isNaN(d.getTime())) return value;

  return d.toLocaleDateString("id-ID");

}

function Report({
  report,
  bulan,
  tahun,
}: Props) {

  return (

    <>

      <section className="resident-card">

        <h2>📄 Laporan Keuangan</h2>

        <br />

        <h3>Saldo Awal</h3>

        <h2>{rupiah(report.saldoAwal)}</h2>

        <br />

        <div className="table-wrapper">

          <table className="resident-table">

            <thead>

              <tr>

                <th>Tanggal</th>

                <th>Keterangan</th>

                <th>Masuk</th>

                <th>Keluar</th>

                <th>Saldo</th>

              </tr>

            </thead>

            <tbody>

              {report.transaksi.map((item,index)=>(

                <tr key={index}>

                  <td>{formatTanggal(item.tanggal)}</td>

                  <td>{item.keterangan}</td>

                  <td>

                    {item.masuk===0
                      ? "-"
                      : rupiah(item.masuk)}

                  </td>

                  <td>

                    {item.keluar===0
                      ? "-"
                      : rupiah(item.keluar)}

                  </td>

                  <td>{rupiah(item.saldo)}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <br />

        <div className="summary-grid">

          <div className="card pemasukan">

            <h3>Total Pemasukan</h3>

            <h2>{rupiah(report.totalMasuk)}</h2>

          </div>

          <div className="card pengeluaran">

            <h3>Total Pengeluaran</h3>

            <h2>{rupiah(report.totalKeluar)}</h2>

          </div>

          <div className="card akhir">

            <h3>Saldo Akhir</h3>

            <h2>{rupiah(report.saldoAkhir)}</h2>

          </div>

        </div>

        <br />

        <button
          className="download-btn"
          onClick={() =>
            downloadReportPDF(
              report,
              bulan,
              tahun
            )
          }
        >
          📄 Download PDF
        </button>

      </section>

      <br />

      <BuktiTransaksi
        transaksi={report.transaksi}
      />

    </>

  );

}

export default Report;