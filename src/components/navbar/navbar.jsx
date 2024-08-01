import "./navbar.scss"
import mvimg from "../../assets/images/mv.jpeg"
function Navbar() {
  return (
    <>
   <div className="header">
      <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <a href="#home" class="logo"> <img src={mvimg}  height={50} width={100}/> </a>
      <ul id="navigation">
        <li><a href="#home" class="btn active">Login</a>
        </li>
        {/* <li><a href="#about" class="btn">About</a></li>
        <li><a href="#menu" class="btn">Menu</a></li>
        <li><a href="#order" class="btn">Order</a></li>
        <li><a href="#contact" class="btn">Contact</a></li> */}
      </ul>
    </nav>
  </div>
    </>
  );
}
export default Navbar;
