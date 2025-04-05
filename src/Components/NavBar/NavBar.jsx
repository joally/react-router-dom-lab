import{Link} from 'react-router';

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to ='/'>Home</Link>
                    </li>
                <li>
                    <Link to = '/Mailboxes'>Mailboxes</Link>
                    </li>
                <li>
                    <Link to = '/new-Mailbox'>New Mailbox</Link>
                    </li>
            </ul>
        </nav>
    )
};
export default NavBar;