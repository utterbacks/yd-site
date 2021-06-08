export default function MemberCard(props) {
  return (
    <li id="carousel__slide" className="carousel__slide" style={{background: `url(${props.member.Pic.formats.medium.url})`}}>
      <div className="carousel__snapper"></div>
      <h4>{props.member.Name}</h4>
      <p>{props.member.Instrument}</p>
    </li>
  )
}
