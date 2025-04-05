import {useState} from "react";
import MailboxList from "./Components/MailBoxList/MailBoxList";
import NavBar from './components/NavBar/NavBar';
import {Routes, Route} from 'react-router';
import MailboxForm from "./Components/MailBoxForm/MailBoxForm";
import MailboxDetails from "./Components/MailBoxDetails/MailBoxDetails";
import './index.css';


function App () {
  const [mailboxes, setMailboxes] = useState([]);
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length+1;
    setMailboxes([...mailboxes,newMailboxData]);
  }
  return(
  <>
  <NavBar/>
  <h1>Mailboxes List</h1>
  <Routes>
    <Route
    path='/'
    element={<h2>Mailbox List</h2>}/>
    <Route
    path='/mailboxes'
    element={<MailboxList mailboxes={mailboxes}/>}
   />
   <Route
   path='/new-mailbox'
   element={<MailboxForm addMailbox={addMailbox}/>}
   />
   <Route
   path='/mailbox/:mailboxId'
   element={<MailboxDetails mailboxes={mailboxes}/>}
   />
   <Route path="*" 
   element={<h2>Woops! 404 Nothing to see here</h2>}/>

   
  </Routes>

  </>
  )
};

export default App;


