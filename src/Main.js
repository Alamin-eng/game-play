export default function Main({props}) {
  return (
    <div className="main">
      {props.map((el, index) => {
        return (
          <div className="main-card" key={index} data-aos="zoom-in">
            <img src={`${el.thumbnail}`} alt="game" data-aos="fade-out"></img>
            <h3>{el.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
