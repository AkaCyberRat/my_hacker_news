
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: '#FF6600' }}>
            <div className="navbar-brand">

                <Link to='/' style={{ marginLeft: 10 + "%", textDecoration: 'none' }} >
                    <img src="https://cdn.iconscout.com/icon/free/png-256/hackernews-2752164-2284981.png"
                        width="30" height="30" alt=""
                        className="d-inline-block align-top border border-3 border-white rounded-2 mx-2" />
                    <span className="align-top text-white">Hacker News</span>
                </Link>

                <Link to='/news' className='ms-5 text-white' style={{ fontSize: 1 + 'rem', textDecoration: 'none' }}>
                    News    
                </Link>

            </div>


        </nav>
    )
}



export default Header