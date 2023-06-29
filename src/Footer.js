import img from "./Assets/logor.png";


export default function Footer() {
    return(
       <div style={{width: "100%", height: "5rem", backgroundColor: "gray"}}>
        <img src={img} alt="logo of little lemon" width={100} height={70}/>
       </div>
    );
}