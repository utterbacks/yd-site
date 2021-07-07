import Modal from "./Modal";
import React, { useState } from "react";

export default function Shows(props) {
	const [showDisplay, setShowDisplay] = useState(false);

	const displayShowCard = (show) => {
		showDisplay ? setShowDisplay(false) : setShowDisplay(true);
	};

	return (
		<section className="shows">
			<ul className="shows-container">
				{props.shows.map((show) => {
					return (
						<>
							<li key={show.id} onClick={() => displayShowCard(show)}>
								{" "}
								{show.dateOfEvent} - {show.nameOfEvent}
							</li>
							<Modal open={showDisplay} onClose={() => setShowDisplay(false)}>
								{show.dateOfEvent}
							</Modal>
						</>
					);
				})}
			</ul>
			<h1>{props.heading}</h1>
		</section>
	);
}

// Bart: shows container has many show cards show card will date, time, and
// venue listed in shows container on click, show card will display as modale if
// there are more than 6 shows listed, we'll implement pagination pagination for
// V2?
//
// Stephen: Might be nicer if it was a scroll container after 6 shows or so.
// Gives the end user one less button to click.
