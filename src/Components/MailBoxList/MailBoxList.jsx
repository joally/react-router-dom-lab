import { Link } from "react-router";


const MailboxList = (props) => {
    return(
        <>
        <h2>Mailboxes</h2>
       
        <ul>
            {props.mailboxes.map((currentMailbox) => (

            <li key={currentMailbox._id}>
                <Link to={`/mailbox/${currentMailbox._id}`}>Mailbox {currentMailbox.id}
                </Link>
            </li>
            ))};

        </ul>
        </>
    );
};

export default MailboxList;