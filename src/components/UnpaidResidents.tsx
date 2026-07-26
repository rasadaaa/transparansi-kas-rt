type Resident = {
  blok: string;
  nama: string;
};

type Props = {
  residents: Resident[];
};

function UnpaidResidents({ residents }: Props) {
  return (
    <section className="unpaid-card">

      <h3>
        📌 Daftar KK Belum Bayar ({residents.length})
      </h3>

      <table className="unpaid-table">

        <thead>
          <tr>
            <th>Blok Rumah</th>
            <th>Nama KK</th>
          </tr>
        </thead>

        <tbody>

          {residents.length === 0 ? (

            <tr>
              <td colSpan={2}>
                Semua warga sudah bayar 🎉
              </td>
            </tr>

          ) : (

            residents.map((item, index) => (

              <tr key={index}>
                <td>{item.blok}</td>
                <td>{item.nama}</td>
              </tr>

            ))

          )}

        </tbody>

      </table>

    </section>
  );
}

export default UnpaidResidents;