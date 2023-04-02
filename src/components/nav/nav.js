import './nav.css'
const Nav = ()=>(
    <nav className="nav">
        <div className='container'>
            <div className = "nav-content">
                <div className="logo">ccc</div>
                <ul className="nav-links">
                    <li className="nav-item"><a className='nav-link active'>Home</a></li>
                    <li className="nav-item"><a className='nav-link'>about</a></li>
                    <li className="nav-item"><a className='nav-link'>services</a></li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Nav