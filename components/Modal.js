import ShowCard from "./cards/ShowCard";

export default function Modal({ open, children, onClose, props}) {
	
	return (
		<>
			{open && (
				<ShowCard selector="#modal">
					{console.log(props)}
					<div className="backdrop">
						<div className="modal">
							<a href="#" onClick={onClose}>
								<i className="fas fa-times" />
							</a>
							<div className='content-div'>

								<img style={{maxWidth: '100%'}}
								src={props.eventFlyer.url} />
							</div>
						</div>
					</div>
				</ShowCard>
			)}
		</>
	);
}
