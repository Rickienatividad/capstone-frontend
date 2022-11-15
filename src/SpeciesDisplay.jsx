export function SpeciesDisplay(props) {
  return (
    <div className="login-bg species-list mt-5">
      <h3>Freshwater Species</h3>
      <div className="mt-5"></div>
      {props.species.map((specie) => (
        <div key={specie.id}>
          <a
            onClick={() => props.onSelectSpecies(specie)}
            className="btn btn-light mb-2 mt-4"
            href="#"
          >
            {specie.name.substring(0, 16)}
          </a>
        </div>
      ))}
    </div>
  );
}
