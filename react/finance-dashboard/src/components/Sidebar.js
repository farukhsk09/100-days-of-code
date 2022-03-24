import './Sidebar.css';
function Sidebar(){
    return (
        <div className="Sidebar">
            <div className="logo">LOGO</div>
            <ul>
                <li>Dashboard</li>
                <li>Wallet</li>
                <li>Transfer</li>
                <li>recipts</li>
                <li>Analytics</li>
            </ul>
        </div>
    );
}
export default Sidebar;