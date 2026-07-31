import { useEffect, useState } from "react";
import { getDashboardData } from "../services/api";

export type ChartData = {
  labels: string[];
  pemasukan: number[];
  pengeluaran: number[];
  saldo: number[];
};

export type Resident = {
  blok: string;
  nama: string;
};

export type ResidentData = {
  no: number;
  blok: string;
  nama: string;
  januari: string;
  februari: string;
  maret: string;
  april: string;
  mei: string;
  juni: string;
  juli: string;
  agustus: string;
  september: string;
  oktober: string;
  november: string;
  desember: string;
};

export type ReportItem = {
  tanggal: string;
  keterangan: string;
  masuk: number;
  keluar: number;
  saldo: number;
  linkBukti: string;
};

export type ReportData = {
  saldoAwal: number;
  transaksi: ReportItem[];
  totalMasuk: number;
  totalKeluar: number;
  saldoAkhir: number;
};

export type DashboardData = {
  saldoAwal: number;
  pemasukan: number;
  pengeluaran: number;
  saldoAkhir: number;

  chart: ChartData;

  unpaidResidents: Resident[];

  residents: ResidentData[];

  report: ReportData;
};

export function useDashboard(bulan: string, tahun: number) {

  const [loading, setLoading] = useState(true);

  const [dashboard, setDashboard] = useState<DashboardData>({
    saldoAwal: 0,
    pemasukan: 0,
    pengeluaran: 0,
    saldoAkhir: 0,

    chart: {
      labels: [],
      pemasukan: [],
      pengeluaran: [],
      saldo: [],
    },

    unpaidResidents: [],

    residents: [],

    report: {
      saldoAwal: 0,
      transaksi: [],
      totalMasuk: 0,
      totalKeluar: 0,
      saldoAkhir: 0,
    },
  });

  useEffect(() => {

    async function loadDashboard() {

      setLoading(true);

      const data = await getDashboardData(
        bulan,
        tahun
      );

      if (data.success) {
        setDashboard(data);
      }

      setLoading(false);

    }

    loadDashboard();

  }, [bulan, tahun]);

  return {
    loading,
    dashboard,
  };

}