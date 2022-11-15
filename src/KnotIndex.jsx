export function KnotIndex(props) {
  return (
    <div className="login-bg mt-5 species-list">
      <h3>Popular Knots</h3>
      {props.knots.map((knot) => (
        <div key={knot.id}>
          <a
            className="btn btn-light mt-4"
            onClick={() => props.onSelectKnot(knot)}
            href="#"
          >
            {knot.name}
          </a>
        </div>
      ))}
    </div>
  );
}
