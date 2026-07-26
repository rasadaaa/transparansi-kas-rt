import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type ReportItem = {
  tanggal: string;
  keterangan: string;
  masuk: number;
  keluar: number;
  saldo: number;
};

type ReportData = {
  saldoAwal: number;
  transaksi: ReportItem[];
  totalMasuk: number;
  totalKeluar: number;
  saldoAkhir: number;
};

function rupiah(nominal: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nominal);
}

function tanggal(value: string) {

  const d = new Date(value);

  if (isNaN(d.getTime())) return value;

  return d.toLocaleDateString("id-ID");

}

export function downloadReportPDF(

  report: ReportData,

  bulan: string,

  tahun: number

) {

  const pdf = new jsPDF();

  pdf.setFontSize(18);

  pdf.text(
    "LAPORAN KEUANGAN RT",
    105,
    18,
    { align: "center" }
  );

  pdf.setFontSize(11);

  pdf.text(
    `Bulan : ${bulan}`,
    14,
    30
  );

  pdf.text(
    `Tahun : ${tahun}`,
    14,
    37
  );

  pdf.text(
    `Saldo Awal : ${rupiah(report.saldoAwal)}`,
    14,
    44
  );
    autoTable(pdf, {

    startY: 52,

    head: [[
      "Tanggal",
      "Keterangan",
      "Masuk",
      "Keluar",
      "Saldo"
    ]],

    body: report.transaksi.map((item) => [

      tanggal(item.tanggal),

      item.keterangan,

      item.masuk == 0
        ? "-"
        : rupiah(item.masuk),

      item.keluar == 0
        ? "-"
        : rupiah(item.keluar),

      rupiah(item.saldo)

    ]),

    theme: "grid",

    headStyles: {

      fillColor: [33, 150, 243],

      textColor: 255,

      halign: "center"

    },

    styles: {

      fontSize: 9,

      cellPadding: 2,

      overflow: "linebreak",

      valign: "middle"

    },

    columnStyles: {

      0: {
        cellWidth: 28
      },

      1: {
        cellWidth: 70
      },

      2: {
        halign: "right"
      },

      3: {
        halign: "right"
      },

      4: {
        halign: "right"
      }

    }

  });

  const akhir =
    (pdf as any).lastAutoTable.finalY + 12;
      pdf.setFontSize(11);

  pdf.text(
    `Total Pemasukan : ${rupiah(report.totalMasuk)}`,
    14,
    akhir
  );

  pdf.text(
    `Total Pengeluaran : ${rupiah(report.totalKeluar)}`,
    14,
    akhir + 8
  );

  pdf.setFontSize(13);

  pdf.setFont("helvetica", "bold");

  pdf.text(
    `Saldo Akhir : ${rupiah(report.saldoAkhir)}`,
    14,
    akhir + 18
  );

  pdf.save(
    `Laporan Keuangan ${bulan} ${tahun}.pdf`
  );

}