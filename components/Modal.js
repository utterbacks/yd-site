import ShowCard from "./cards/ShowCard";

export default function Modal({ open, children, onClose }) {
	return (
		<>
			{open && (
				<ShowCard selector="#modal">
					<div className="backdrop">
						<div className="modal">
							<i className="fas fa-times" onClick={onClose} />
							{children}
						</div>
					</div>
				</ShowCard>
			)}
		</>
	);
}
