import { Link, useParams } from "react-router-dom";
import dummyImg from "../../../assets/img/tes.jpg";

function JurnalCard({ id, title, date, description, img }) {
  return (
    <>
      <div className="card w-52 bg-base-100 shadow-xl m-3">
        <figure>
          <img src={img ? img : dummyImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title ? title : "DFjk"}</h2>

          <p className="date text-xs">{date ? date : "12/12/2021"}</p>
          <div className="card-actions justify-center items-center">
            <Link to={`/jurnal/${id}`}>
              <div className="btn text-xs cursor-pointer">
                LIHAT SELENGKAPNYA
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default JurnalCard;
