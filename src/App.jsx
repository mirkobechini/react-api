import axios from "axios"
import { useState, useEffect } from "react"

//endpoint
const actorEP = "https://lanciweb.github.io/demo/api/actors/"
const actressEP = "https://lanciweb.github.io/demo/api/actess/"



function App() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    axios.get(actorEP)
      .then((res) => {
        console.log(res.data);
        setActors(res.data)

      })
  }, [])

  return (
    <>
      <header>
        <div className="container d-flex justify-content-center">
          <strong>Attori</strong>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            {actors.map(actor =>
              <div className="col-12 col-sm-6 col-md-4 mb-3" key={actor.id}>
                <div className="card h-100">
                  <img src={actor.image} className="card-img-top" />
                  <div className="card-body bg-dark">
                    <ul class="list-group list-group-flush rounded-1">
                      <li class="list-group-item bg-dark text-white">Name: {actor.name}</li>
                      <li class="list-group-item bg-dark text-white">Year: {actor.birth_year}</li>
                      <li class="list-group-item bg-dark text-white">Nationality: {actor.nationality}</li>
                      <li class="list-group-item bg-dark text-white">Bio: {actor.biography}</li>
                      <li class="list-group-item bg-dark text-warning">Awards: {actor.awards.map(award =>
                        `${award} `
                      )}</li>
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
