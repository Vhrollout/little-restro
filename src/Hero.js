import chef from "./Assets/greek salad.jpg";
import Image from 'react-bootstrap/Image';


export default function HeroElement() {
    const myStyle = {
       width: "100%"
       };

  return (
    <div style={myStyle}>
      <div className="text">
      <div className="preHeader">
      <header>
        <h1 className="heading">Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Celebrate every occasion with best <br/>of the class cuisins from <br/>different continents brings<br/> unique flavor that lasts with your memory.</p>
        <button style={{ backgroundColor: "#F4CE14",fontWeight: "bold", marginTop: "2rem"}}>Reserve my table</button>
      </header>
    </div>
   <div className="imgDiv" style={{display: "inline", }}>
    <Image className="chef" src={chef} alt="plate with food" fluid/>
   </div>
      </div>
    </div>
  );
}