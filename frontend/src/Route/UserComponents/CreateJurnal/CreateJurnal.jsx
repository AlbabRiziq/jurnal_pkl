function CreateJurnal() {
  return (
    <div className="w-96 flex flex-col items-center justify-center p-3">
      <h2 className="font-bold text-2xl mt-5 text-[#1e2835]">BUAT JURNAL</h2>
      <form action="" className="flex flex-col w-full">
        <p>GAMBAR</p>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs my-2"
        />
        <p>JUDUL</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs my-2"
        />
        <p>DESKRIPSPI</p>
        <textarea
          className="textarea textarea-bordered w-full max-w-xs my-2"
          placeholder="Bio"
        ></textarea>
      </form>
    </div>
  );
}

export default CreateJurnal;
