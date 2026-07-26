type Resident = {
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

type Props = {
  residents: Resident[];
};

function ResidentTable({ residents }: Props) {

  return (

    <section className="resident-card">

      <h3>📋 Data Pembayaran Warga</h3>

      <div className="table-wrapper">

        <table className="resident-table">

          <thead>

            <tr>

              <th>No</th>
              <th>Blok</th>
              <th>Nama KK</th>

              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>Mei</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Agu</th>
              <th>Sep</th>
              <th>Okt</th>
              <th>Nov</th>
              <th>Des</th>

            </tr>

          </thead>

          <tbody>

            {residents.map((r) => (

              <tr key={r.no}>

                <td>{r.no}</td>

                <td>{r.blok}</td>

                <td>{r.nama}</td>

                <td>{r.januari}</td>
                <td>{r.februari}</td>
                <td>{r.maret}</td>
                <td>{r.april}</td>
                <td>{r.mei}</td>
                <td>{r.juni}</td>
                <td>{r.juli}</td>
                <td>{r.agustus}</td>
                <td>{r.september}</td>
                <td>{r.oktober}</td>
                <td>{r.november}</td>
                <td>{r.desember}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>

  );

}

export default ResidentTable;