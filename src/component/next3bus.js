
    import React from 'react'

    const Next3bus = ({ next3buses }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {next3buses.map((next3bus) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{next3bus.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{next3bus.email}</h6>
                <p class="card-text">{next3bus.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Next3bus