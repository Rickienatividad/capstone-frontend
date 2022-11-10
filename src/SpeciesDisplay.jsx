export function SpeciesDisplay(props) {
  return (
    <div>
      {props.species.map((specie) => (
        <div key={specie.id}>
          <a
            onClick={props.onSelectSpecies}
            className="btn btn-light mb-2"
            href="#"
          >
            {specie.name.substring(0, 16)}
          </a>
        </div>
      ))}
    </div>
  );
}
