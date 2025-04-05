import{useState} from'react';
import { useNavigate } from 'react-router';


const initialState = {
_id: "",
boxSize:'',
boxOwner:'',

};

const MailboxForm =(props) => {
    const[formData,setFormData] = useState(initialState);
    const navigate = useNavigate();
    const handleSubmit =(evt) => {
        evt.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    }
    const handleChange = (evt) =>{
        setFormData({
            ...formData, [evt.target.id]:evt.target.value
        });
    };

    return(
        <main>
            <h2>New Mailbox</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='id'>ID:</label>
                    <input
                        type='number'
                        id='id'
                        name='id'
                        defaultValue={formData.id}
                        onChange={handleChange}
                        />
                         <label htmlFor='boxSize'>Box Size:</label>
                    <select
                        type='text'
                        id='boxSize'
                        name='boxSize'
                        value={formData.boxSize}
                        onChange={handleChange}
                        >
                        
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>  
                         <label htmlFor='boxOwner'>Box Owner:</label>
                    <input
                        type='text'
                        id='boxOwner'
                        name='boxOwner'
                        value={formData.boxOwner}
                        onChange={handleChange}
                        />
                        <button type='submit'>Submit</button>

               </form>     
        </main>
    );
};

export default MailboxForm;

