function AttorneyForm() {
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
          type="text"
          placeholder="Attorney Firm Name"
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

        <button className=" btn btn-primary">Submit</button>
      </form>
    </>
  );
}
export default AttorneyForm;
