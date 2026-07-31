import axios from "axios";

/************************************************
 * GOOGLE APPS SCRIPT API
 ************************************************/

const API_URL =
  "https://script.google.com/macros/s/AKfycbzETRfwkKAwMc94qDi_xAmpJCQ6ES7uLdK9wwHOh01IsUTPZhyh6pDdoM2VlKQhBTZM/exec";

/************************************************
 * DASHBOARD
 ************************************************/

export async function getDashboardData(
  bulan = "Januari",
  tahun = 2026
) {

  try {

    const { data } = await axios.get(
      `${API_URL}?bulan=${bulan}&tahun=${tahun}`
    );

    return data;

  } catch (error) {

    console.error(error);

    return {

      success:false,

      saldoAwal:0,
      pemasukan:0,
      pengeluaran:0,
      saldoAkhir:0,

      chart:{
        labels:[],
        pemasukan:[],
        pengeluaran:[],
        saldo:[]
      },

      unpaidResidents:[],

      residents:[],

      report:{
        saldoAwal:0,
        transaksi:[],
        totalMasuk:0,
        totalKeluar:0,
        saldoAkhir:0
      }

    };

  }

}

/************************************************
 * DOWNLOAD PDF
 ************************************************/

export function downloadReportPDF(
  bulan:string,
  tahun:number
){

  const url =
`${API_URL}?action=pdf&bulan=${bulan}&tahun=${tahun}`;

  window.open(url,"_blank");

}