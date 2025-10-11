import axios from "axios"
import { useState, useEffect } from "react"

//endpoint
const actorEP = "https://lanciweb.github.io/demo/api/actors/"
const actressEP = "https://lanciweb.github.io/demo/api/actors/"



function App() {

  const [actors, setActors] = useState([])
  const [endpoint, setEndpoint] = useState(actorEP)
  useEffect(() => {
    axios.get(endpoint)
      .then((res) => {
        console.log(res.data);
        setActors(res.data)

      })
  }, [endpoint])

  function handleClick(e) {
    (e.target.value === "male") ? setEndpoint(actorEP) : setEndpoint(actressEP)
  }

  return (
    <>
      <header>

        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">Attori/Attrici</a>

            <button className="btn btn-primary" value="male" onClick={(e) => handleClick(e)}>Male</button>
            <button className="btn btn-danger" value="female" onClick={(e) => handleClick(e)}>Female</button>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            {actors.map(actor =>
              <div className="col-12 col-sm-6 col-md-4 mb-3" key={actor.id}>
                <div className="card h-100">
                  <img src={actor.image} className="card-img-top" />
                  <div className="card-body bg-dark">
                    <ul className="list-group list-group-flush rounded-1">
                      <li className="list-group-item bg-dark text-white fw-bold mb-1">
                        {actor.name}
                        <span className="badge bg-primary-subtle text-dark ms-2">{actor.birth_year}</span>
                      </li>
                      <li className="list-group-item bg-dark text-white mb-1">Nationality: {actor.nationality}</li>
                      <li className="list-group-item bg-info-subtle border rounded border-info text-dark mb-1">{actor.biography}</li>
                      <li className="list-group-item bg-warning-subtle border rounded border-warning text-warning mb-1">Awards:
                        <ul className="list-group list-group-flush">
                          {actor.awards.map(award =>
                            <li className="list-group-item border-0 bg-warning-subtle text-warning">{award} </li>
                          )}
                        </ul>
                      </li>
                      <li className="list-group-item bg-danger-subtle text-danger border rounded border-danger mb-1">Movies:
                        <ul className="list-group list-group-flush">
                          {actor.known_for.map(movie =>
                            <li className="list-group-item border-0 bg-danger-subtle text-danger">{movie} </li>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
