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
                    <div className="card large">
                        <h4>Finances</h4>
                    </div>
                    <div className="card medium">
                        <h4>Expenses</h4>
                    </div>
                </div>
                <div className="transactions card">
                    <h4>Transactions</h4>
                </div>
            </div>

            <div className="right-panel">
            <div className="actions card">
                <h4>My Cards</h4>
                <div className="credit card special">
                    <div className="icon">
                        <TwemojiCreditCard className="icon"></TwemojiCreditCard>
                    </div>
                    <h5>XXXX XXXX XXXX 5164</h5>
                    <h5>01/24</h5>
                    <div className="logo">
                        VISA
                    </div>
                </div>
                <div className="credit card lighter">
                    <h5>Balances</h5>
                    <div className="sheet">
                        <h3>$2190.19</h3>
                        <h5 className="green">9.14</h5>
                        <h5 className="red">8.39</h5>
                    </div>
                </div>
                <div className="credit card special button">
                    + Add New Card
                </div>
            </div>
            <div className="transfer card">
                <h4>Quick Transfer</h4>
                <div className="profiles">
                    <MdiFaceManProfile></MdiFaceManProfile>
                    <MdiFaceWomanProfile></MdiFaceWomanProfile>
                    <CarbonUserProfile></CarbonUserProfile>
                    <EtProfileFemale></EtProfileFemale>
                    <EtProfileMale></EtProfileMale>
                    <IcBaselineNavigateNext></IcBaselineNavigateNext>
                </div>
                <h5>Card Number</h5>
                <div className="credit card special button">
                    Send Money
                </div>
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

export function TwemojiCreditCard(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#FFAC33" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9s0-4-4-4H4z"></path><path fill="#292F33" d="M0 10h36v5H0z"></path><path fill="#F4F7F9" d="M4 19h28v6H4z"></path><path fill="#8899A6" d="M19 24c-1.703 0-2.341-1.21-2.469-1.801c-.547.041-1.08.303-1.805.764C13.961 23.449 13.094 24 12 24c-1.197 0-1.924-.675-2-2c-.003-.056.038-.188.021-.188c-1.858 0-3.202 1.761-3.215 1.779a.997.997 0 0 1-1.397.215a1 1 0 0 1-.215-1.398C5.271 22.303 7.11 20 10 20c1.937 0 2.048 1.375 2.078 1.888l.007.109c.486-.034.991-.354 1.57-.723c.961-.61 2.153-1.371 3.75-.962c.871.223 1.007 1.031 1.059 1.336c.013.076.032.19.049.226c.007 0 .146.091.577.13c.82.075 1.721-.279 2.675-.653c.988-.388 2.01-.788 3.111-.788c3.389 0 4.767 1.635 4.913 1.821a1 1 0 1 1-1.575 1.232c-.024-.027-.93-1.054-3.337-1.054c-.723 0-1.528.315-2.381.649c-1.009.396-2.434.789-3.496.789z"></path></svg>
    )
  }



export function MdiFaceManProfile(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 6.39A9.973 9.973 0 0 0 17.42 10c.78 0 1.53-.09 2.25-.26c.21.71.33 1.47.33 2.26c0 4.41-3.59 8-8 8c-3 0-5.61-1.66-7-4.11L6.75 14v-1A1.25 1.25 0 0 1 8 11.75A1.25 1.25 0 0 1 9.25 13v1H12m4-2.25A1.25 1.25 0 0 0 14.75 13A1.25 1.25 0 0 0 16 14.25A1.25 1.25 0 0 0 17.25 13A1.25 1.25 0 0 0 16 11.75Z"></path></svg>
    )
  }


export function MdiFaceWomanProfile(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17.25 13a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M22 12c0 5.5-4.5 10-10 10H2V12C2 6.5 6.5 2 12 2s10 4.5 10 10M7 18c1.41 1.23 3 2 5 2c4.41 0 8-3.59 8-8c0-.79-.12-1.55-.33-2.26c-.72.17-1.47.26-2.25.26c-2 0-3.85-.6-5.42-1.61c0 0-1.46 5.37-3.97 4.61c-.66-.2-1.03.31-1.03 1"></path></svg>
    )
  }

export function CarbonUserProfile(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z"></path></svg>
    )
  }


export function EtProfileFemale(props) {
    return (
      <svg width="1.13em" height="1em" viewBox="0 0 36 32" {...props}><path fill="currentColor" d="M22.22 20.726a.485.485 0 0 0-.425.155a.499.499 0 0 0-.126.435c.276 1.45 1.205 3.44 4.057 4.679c.338.146.86.26 1.522.403c2.478.536 6.622 1.434 7.64 5.232a.5.5 0 0 0 .967-.26c-1.177-4.387-5.872-5.404-8.395-5.95c-.584-.127-1.089-.236-1.336-.344c-1.714-.744-2.821-1.848-3.301-3.286c4.762.354 6.918-1.543 7.013-1.629a.5.5 0 0 0-.088-.805C27 17.786 27 12.361 27 10.318C27 4.605 23.152.076 18.219.005a5.875 5.875 0 0 0-.141-.003h-.001C13.072.03 9 4.564 9 10.11c0 2.043 0 7.469-2.748 9.038a.503.503 0 0 0-.06.829c.138.107 3.188 2.441 6.941 1.732c-.502 1.378-1.594 2.438-3.258 3.161c-.241.105-.721.22-1.277.352c-2.54.604-7.269 1.729-8.453 6.147a.5.5 0 0 0 .967.259c1.029-3.844 5.217-4.839 7.718-5.435c.627-.149 1.122-.267 1.444-.406c2.852-1.239 3.78-3.229 4.057-4.679a.497.497 0 0 0-.159-.467a.497.497 0 0 0-.482-.104c-2.707.852-5.208-.32-6.301-.97C10 17.381 10 12.35 10 10.11c0-4.997 3.626-9.083 8.12-9.11l.106.006C22.658 1.069 26 5.072 26 10.318c0 2.241 0 7.283 2.622 9.469c-.903.516-2.962 1.351-6.402.939z"></path></svg>
    )
  }


export function EtProfileMale(props) {
    return (
      <svg width="1.13em" height="1em" viewBox="0 0 36 32" {...props}><path fill="currentColor" d="M.5 31.983a.503.503 0 0 0 .612-.354c1.03-3.843 5.216-4.839 7.718-5.435c.627-.149 1.122-.267 1.444-.406c2.85-1.237 3.779-3.227 4.057-4.679a.5.5 0 0 0-.165-.473c-1.484-1.281-2.736-3.204-3.526-5.416a.492.492 0 0 0-.103-.171c-1.045-1.136-1.645-2.337-1.645-3.294c0-.559.211-.934.686-1.217a.5.5 0 0 0 .243-.408C10.042 5.036 13.67 1.026 18.12 1l.107.007c4.472.062 8.077 4.158 8.206 9.324a.498.498 0 0 0 .178.369c.313.265.459.601.459 1.057c0 .801-.427 1.786-1.201 2.772a.522.522 0 0 0-.084.158c-.8 2.536-2.236 4.775-3.938 6.145a.502.502 0 0 0-.178.483c.278 1.451 1.207 3.44 4.057 4.679c.337.146.86.26 1.523.403c2.477.536 6.622 1.435 7.639 5.232a.5.5 0 0 0 .966-.26c-1.175-4.387-5.871-5.404-8.393-5.95c-.585-.127-1.09-.236-1.336-.344c-1.86-.808-3.006-2.039-3.411-3.665c1.727-1.483 3.172-3.771 3.998-6.337c.877-1.14 1.359-2.314 1.359-3.317c0-.669-.216-1.227-.644-1.663C27.189 4.489 23.19.076 18.227.005l-.149-.002c-4.873.026-8.889 4.323-9.24 9.83c-.626.46-.944 1.105-.944 1.924c0 1.183.669 2.598 1.84 3.896c.809 2.223 2.063 4.176 3.556 5.543c-.403 1.632-1.55 2.867-3.414 3.676c-.241.105-.721.22-1.277.352c-2.541.604-7.269 1.729-8.453 6.147a.5.5 0 0 0 .354.612z"></path></svg>
    )
  }

export function IcBaselineNavigateNext(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
    )
  }
export default Content;