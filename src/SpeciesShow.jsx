export function SpeciesShow(props) {
  return (
    <div>
      <img src={props.species.img} className="fish-img"></img>
      <h3>{props.species.name}</h3>
      <p>{props.species.length}</p>
      <p>{props.species.weight}</p>
      <p>{props.species.habits}</p>
    </div>
  );
}
