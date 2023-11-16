function Edit() {
  return (
    <div className="p-3">
      <h1 className="font-bold text-xl w-80">
        ISI DAN LENGKAPI IDENTITAS KAMU
      </h1>
      <div className="form mt-7">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">MASUKAN NAMA KAMU</span>
          </label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">MASUKAN NIS KAMU</span>
          </label>
          <input
            type="text"
            placeholder="NIS"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">MASUKAN KELAS KAMU</span>
          </label>
          <input
            type="text"
            placeholder="KELAS"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">MASUKAN NOMOR HP </span>
          </label>
          <input
            type="text"
            placeholder="Nomor HP"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn mt-5 btn-success w-28">KIRIM</button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
