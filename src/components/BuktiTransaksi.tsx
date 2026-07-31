type ReportItem = {
  tanggal: string;
  keterangan: string;
  masuk: number;
  keluar: number;
  saldo: number;
  linkBukti: string;
};

type Props = {
  transaksi: ReportItem[];
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

function getImageUrl(url: string) {
  if (!url) return "";

  return url.replace(
    "uc?export=view&id=",
    "thumbnail?id="
  ) + "&sz=w1200";
}

function BuktiTransaksi({ transaksi }: Props) {

  const dataBukti = transaksi.filter(
    (item) =>
      item.keluar > 0 &&
      item.linkBukti &&
      item.linkBukti !== ""
  );

  if (dataBukti.length === 0) {
    return null;
  }

  return (

    <section className="resident-card">

      <h2>📷 Bukti Transaksi</h2>

      <br />

      {dataBukti.map((item, index) => (

        <div
          key={index}
          className="bukti-card"
        >

          <h4>📅 {formatTanggal(item.tanggal)}</h4>

          <p>
            <strong>💰 Nominal :</strong>{" "}
            {rupiah(item.keluar)}
          </p>

          <p>
            <strong>📝 Keterangan :</strong>{" "}
            {item.keterangan}
          </p>

          <img
            src={getImageUrl(item.linkBukti)}
            alt={item.keterangan}
            className="bukti-image"
          />

        </div>

      ))}

    </section>

  );

}

export default BuktiTransaksi;