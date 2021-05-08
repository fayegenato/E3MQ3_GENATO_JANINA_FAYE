import { Link } from 'react-router-dom'

const Nav = ({ user }) => {
    const alertNotice = () => (alert(`Hello  ${user}`))
    return (
        <nav>
            <ul class="nav-links">
                <Link to='/' className='link'>
                    <li>Home</li>
                </Link>
                <Link to='/about' className='link'>
                    <li>About</li>
                </Link>
                <li className="user" onClick={alertNotice}>
                    Hello janinafayegenato@gmail.com
            </li>
            </ul>
        </nav>
    )
}

export default Nav