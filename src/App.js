import './App.css';
import Contacts from './UserCV/Contacts.jsx';
import PersonalInfo from './UserCV/PersonalInfo.jsx';
import Experience from './UserCV/Experience.jsx';
import profile from './profile.jpg';

function App() {
  return (
    <div className="App">
      <div className='gray'>
        <img src={profile} alt="logo"/>
     <Contacts className="conatcts"/>
     <Experience className="exper"/>
     </div>
     <PersonalInfo className="personal"/>
    </div>
  );
}

export default App;
