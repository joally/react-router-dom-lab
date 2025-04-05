import { useParams} from 'react-router';


const MailboxDetails = (props) =>{
    const{ mailboxId} = useParams();
    const selectedbox = props.mailboxes.find((mailbox) =>(
        mailbox._id=== parseInt(mailboxId)
    ));
   return(
    <>
    <section className='mail-box'>
    <h2>{selectedMailbox.id}</h2>
    <dl>
    <dt>Size:</dt> 
    <dd>{selectedbox.boxSize}</dd>
    <dt>Owner:</dt>
    <dd>{selectedbox.boxOwner}</dd>
    </dl>
    </section>

    </>
   )

};
export default MailboxDetails;