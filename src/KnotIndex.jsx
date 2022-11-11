export function KnotIndex(props) {
  return (
    <div>
      <h3>Popular Knots</h3>
      {props.knots.map((knot) => (
        <div key={knot.id}>
          <a href="#">{knot.name}</a>
        </div>
      ))}
    </div>
  );
}
