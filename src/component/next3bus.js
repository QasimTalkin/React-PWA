
    import React from 'react'

    const Next3bus = ({ next3buses }) => {
      // if (next3buses.Trips.Trip){
      return (
        <div>
          <center><h1>Next 3 buses #3#</h1></center>
          {next3buses.map((next3bus) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{next3bus.TripDestination}</h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">{next3bus.GetNextTripsForStopResult.StopNo}</h6>
                <p class="card-text">{next3bus.GetNextTripsForStopResult.StopNo}</p> */}
              </div>
            </div>
          ))}
        </div>
      )
    // };

  }




    export default Next3bus