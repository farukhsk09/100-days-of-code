function Header() {
    return (
    <div className="header">
        <h1>Dashboard</h1>
        <input></input>
        <Profile></Profile>
    </div>
    );
}

function Profile() {
    return (
        <div className="profile">
            chat icon
            <div className="notification">notification</div>
            <div className="menu">profile</div>
        </div>
    );
}
export default Header;