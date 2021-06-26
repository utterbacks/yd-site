import MemberCard from "./cards/MemberCard";
// ==============================\/ destrucure member from props to shorten props calls
export default function About({ members }) {
	// console.log(members);
	return (
		<section className="about">
			<h1>Who We Are</h1>

			{/* .brady-bunch is the container for the frames */}

			<div className="brady-bunch" aria-label="Gallery">
				{members.map((member, index) => {
					return <MemberCard member={member} key={index} />;
				})}

				{/* <MemberCard /> */}
			</div>
		</section>
	);
}
