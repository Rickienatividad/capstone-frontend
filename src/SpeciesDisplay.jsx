export function SpeciesDisplay(props) {
  return (
    <div>
      {props.species.map((specie) => (
        <div key={specie.id}>
          <a href="#">{specie.name}</a>
        </div>
      ))}
    </div>
  );
}
