// ==================================\/ destrucure member from props to shorten props calls
export default function MemberCard({ member }) {
	return (
		<div
			className="brady-bunch-frame"
			style={{
				backgroundImage: `url(${member.Pic.formats.medium.url})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="info-window">
				<div className="actual-info">
					<h4>{member.Name}</h4>
					<p>{member.Instrument}</p>
				</div>
			</div>
		</div>
	);
}
{
	/* =============================================================================== */
}

{
	/* <div className="brady-bunch-frame">
				<img src="/images/Stephen.jpg" className="image" />
				<div className="info-window">
					<div className="actual-info">
						<h4>Stephen</h4>
						<p>Drums/Vocals</p>
					</div>
				</div>
			</div>
			<div className="brady-bunch-frame">
				<img src="/images/Bart3.jpg" className="image" />
				<div className="info-window">
					<div className="actual-info">
						<h4>Bart</h4>
						<p>Bass</p>
					</div>
				</div>
			</div>
			<div className="brady-bunch-frame">
				<img src="/images/Ben2.jpg" className="image" />
				<div className="info-window">
					<div className="actual-info">
						<h4>Ben</h4>
						<p>Guitar</p>
					</div>
				</div>
			</div>
		</> */
}
{
	/* 
		// <li style={{ background: `url(${props.member.Pic.formats.medium.url})` }}>
		// 	<h4>{props.member.Name}</h4>
		// 	<p>{props.member.Instrument}</p>
		// </li> */
}
