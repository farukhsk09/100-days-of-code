import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faChalkboard, faFile, faHatCowboy, faHome, faInbox } from '@fortawesome/free-solid-svg-icons'



function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="heading">
                <img className="logo-main-page"></img>
                <h1><FontAwesomeIcon icon={faHatCowboy} className='icon'/>Scholaris...</h1>
            </div>
            <div className='menu'>
                <div className='options'> 
                <FontAwesomeIcon icon={faHome} className='icon'/>Dashboard</div>
                <div className='options'>
                <FontAwesomeIcon icon={faCalendar} className='icon'/>Calendar</div>
                <div className='options'>
                <FontAwesomeIcon icon={faInbox} className='icon'/>Inbox</div>
                <div className='options'>
                <FontAwesomeIcon icon={faFile} className='icon'/>Forms</div>
                <div className='options'>
                <FontAwesomeIcon icon={faChalkboard} className='icon'/>Classes</div>
            </div>
        </div>
    );
}

export default Sidebar;