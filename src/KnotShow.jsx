export function KnotShow(props) {
  return (
    <div>
      <h3>{props.knot.name}</h3>
      <img className="knot-img" src={props.knot.img}></img>
    </div>
  );
}
