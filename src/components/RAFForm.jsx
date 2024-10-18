function RAFFrom() {
  return (
    <>
      <form action="">
        <input
          className=" form-control"
          type="text"
          placeholder="Name & Surname"
        />

        <input
          className=" form-control"
          type="tel"
          placeholder="Phone number"
        />

        <input
          className=" form-control"
          type="email"
          placeholder="E-mail Adress"
        />
        <p>Is your RAF claim settled? *</p>
        <select className=" form-control form-select">
          <option>---</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input
          className=" form-control"
          type="text"
          placeholder="Attorney Conveyancing Firm:"
        />

        <input
          className=" form-control"
          type="text"
          placeholder="Your attorney's name (Name & Surname):"
        />
        <button className=" btn btn-primary">Submit</button>
      </form>
    </>
  );
}
export default RAFFrom;
