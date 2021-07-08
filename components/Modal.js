import ShowCard from "./cards/ShowCard";

export default function Modal({ open, children, onClose }) {
	return (
		<>
			{open && (
				<ShowCard selector="#modal">
					<div className="backdrop">
						<div className="modal">
							<a href="#" onClick={onClose}>
								<i className="fas fa-times" />
							</a>
							<div>{children}</div>
						</div>
					</div>
				</ShowCard>
			)}
		</>
	);
}
