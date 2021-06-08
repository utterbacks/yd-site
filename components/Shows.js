import ShowCard from './cards/ShowCard'


export default function Shows(props) {
  return (
    <section className="shows">
      <ul className="shows-container">
        {props.shows.map(show => {
          return <li >{show.dateOfEvent} - {show .nameOfEvent}</li>
        })}



      </ul>
      <h1>{props.heading}</h1>
    </section>
  )
}


// shows container has many show cards
// show card will date, time, and venue listed in shows container
// on click, show card will display as modale
// if there are more than 6 shows listed, we'll implement pagination
// pagination for V2?