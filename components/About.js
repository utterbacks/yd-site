import MemberCard from './cards/MemberCard'


export default function About(props) {

  console.log(props.members)
  return (
    <section className="about">
      <h1>Who We Are</h1>
      <div className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">

          {props.members.map((member, index) => {
            return (<MemberCard member={member} key={index} />)
          })}

        </ol>
      </div>
    </section>
  )
}
