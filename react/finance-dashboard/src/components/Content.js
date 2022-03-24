import './Content.css';
function Content() {
    return (
        <div className="Content">
            <div className="header">
                <h1>Dashboard</h1>
                <input></input>
                <Profile></Profile>
            </div>
            <div className="side">
                <div className="balances">
                    <div className="card special">
                        <div className="icon">
                            <EpWalletFilled></EpWalletFilled>
                        </div>
                        <h4>Balance</h4>
                        <h1>$2190.19</h1>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FlatColorIconsDonate></FlatColorIconsDonate>
                        </div>
                        <h4>Income</h4>
                        <h1>$21.30</h1>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FlatColorIconsSalesPerformance></FlatColorIconsSalesPerformance>
                        </div>
                        <h4>Savings</h4>
                        <h1>$1875.19</h1>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <IconParkOutlineExpenses className="yellow"></IconParkOutlineExpenses>
                        </div>
                        <h4>Expenses</h4>
                        <h1>$19.112</h1>
                    </div>
                </div>
                <div className="panels">
                    <div className="card large"></div>
                    <div className="card medium"></div>
                </div>
                <div className="transactions card">
                </div>
            </div>
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


export function FlatColorIconsDonate(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" {...props}><path fill="#E69329" d="m11.7 21.6l5.1 9.9l9.5-3.9l4.4-12.7l-14.8.8z"></path><circle cx="15" cy="36" r="7.8" fill="#546E7A"></circle><g fill="#90A4AE"><path d="M15 27c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7z"></path><path d="M14 33h2v8h-2z"></path></g><g fill="#FFB74D"><path d="M12.9 36c1 1.9 3.2 2.7 5.1 1.7l16.5-8.5c1-.5 1.7-1.2 2.2-1.9c1.7-3.2 5.6-10.7 8.2-17.2l-18.2 8.7l-4.8 7.2l-6.8 3.6c-2.6 1.3-3.4 4.2-2.2 6.4z"></path><path d="M30.2 3L13.7 9.3c-.7.2-1.5 1-2.2 1.7l-5.6 7.5c-1 1.5-1.2 3.4-.5 5.1c.4 1 1.7 3.4 3.1 6.1C10.1 28 12.4 27 15 27c.4 0 .9 0 1.3.1l-2.1-4.2l4.6-4.1h8s15.5-2.2 18.2-8.7L30.2 3z"></path></g><path fill="#FFCDD2" d="M18.2 36c-1.3.6-2.8 0-3.3-1.3c-.6-1.3 0-2.8 1.3-3.3c1.2-.6 3.2 4 2 4.6z"></path></svg>
    )
}


export function EpWalletFilled(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}><path fill="currentColor" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544l128 160H384l256-160z"></path></svg>
    )
}


export function FlatColorIconsSalesPerformance(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" {...props}><g fill="#FFA000"><path d="M38 13c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 10c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2V8c0 1.1-2.7 2-6 2zm0 6c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 19c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 22c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 25c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 28c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 31c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 34c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 37c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M38 40c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path></g><g fill="#FFC107"><ellipse cx="38" cy="8" rx="6" ry="2"></ellipse><path d="M38 12c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5z"></path></g><g fill="#FFA000"><path d="M10 19c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M10 16c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2zm0 6c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M10 25c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M10 28c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M10 31c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M10 34c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M10 37c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M10 40c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path></g><g fill="#FFC107"><ellipse cx="10" cy="14" rx="6" ry="2"></ellipse><path d="M10 18c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5z"></path></g><g fill="#FFA000"><path d="M24 28c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M24 25c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2zm0 6c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M24 34c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M24 37c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path><path d="M24 40c-3.3 0-6-.9-6-2v2c0 1.1 2.7 2 6 2s6-.9 6-2v-2c0 1.1-2.7 2-6 2z"></path></g><g fill="#FFC107"><ellipse cx="24" cy="23" rx="6" ry="2"></ellipse><path d="M24 27c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5zm0 3c-2.8 0-5.1-.6-5.8-1.5c-.1.2-.2.3-.2.5c0 1.1 2.7 2 6 2s6-.9 6-2c0-.2-.1-.3-.2-.5c-.7.9-3 1.5-5.8 1.5z"></path></g></svg>
    )
}


export function IconParkOutlineExpenses(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M31 34h12m-5 5l5-5l-5-5"></path><path d="M43 26V10a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h20.47"></path><path d="m15 15l5 6l5-6M14 27h12m-12-6h12m-6 0v12"></path></g></svg>
    )
}
export default Content;