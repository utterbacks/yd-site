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
					const showDate = new Date(show.dateOfEvent);
					const day = showDate.getDate() + 1;
					const month = showDate.getMonth() + 1;
					const year = showDate.getFullYear();
					return (
						<>
							<li key={show.id}>
								{" "}
								{month}/{day}/{year} - {show.venue}
							</li>
							<a href="#" onClick={() => displayShowCard(show)}>
								See Details
							</a>
							<Modal open={showDisplay} props={show} onClose={() => setShowDisplay(false)}></Modal>
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
