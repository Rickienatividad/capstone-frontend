export function SpeciesDisplay(props) {
  return (
    <div className="login-bg species-list">
      <h3>Freshwater Species</h3>
      {props.species.map((specie) => (
        <div key={specie.id}>
          <a
            onClick={() => props.onSelectSpecies(specie)}
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
