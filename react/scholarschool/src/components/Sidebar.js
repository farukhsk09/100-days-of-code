import './Sidebar.css';

function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="heading">
                <img className="logo-main-page"></img>
                <h1>scholaris...</h1>
            </div>
            <ul>
                <li>Dashboard</li>
                <li>Calendar</li>
                <li>Inbox</li>
                <li>Forms</li>
                <li>Classes</li>
            </ul>
        </div>
    );
}

export default Sidebar;