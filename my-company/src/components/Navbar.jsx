import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <div style = {{ padding: '20px', alignContent: 'center', border: '1px solid black' }}>
        <nav style = {{backgroundColor:'black', display:'flex', justifyContent:'center', padding: '10px'}}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
    </div>
    )
} 


export default Navbar;

