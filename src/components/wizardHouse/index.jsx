function WizardHouse({ book }) {
  return (
    <div className="book">
      <img className="pics" src={book.attributes.cover} alt="" />
      <h1>{book.attributes.title}</h1>

      <p>{book.attributes.summary}</p>
      <a href={book.attributes.wiki}> {book.attributes.wiki}</a>
      <hr />
    </div>
  );
}

export default WizardHouse;
