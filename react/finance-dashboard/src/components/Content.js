import CardPanels from './CardPanels';
import './Content.css';
import Header from './Header';
import {FlatColorIconsDonate,FlatColorIconsSalesPerformance,IconParkOutlineExpenses,TwemojiCreditCard,MdiFaceManProfile,MdiFaceWomanProfile,
    CarbonUserProfile,EtProfileFemale,EtProfileMale,IcBaselineNavigateNext
} from './Icons.js';
function Content() {
    return (
        <div className="Content">
            <Header></Header>
            <div className="side">
                <div className="balances">
                    <CardPanels name="Balance" value="$2190.19" className="special" icon="EpWalletFilled"></CardPanels>
                    <CardPanels name="Income" value="$21.30" icon="FlatColorIconsDonate"></CardPanels>
                    <CardPanels name="Savings" value="$1875.19" icon="FlatColorIconsSalesPerformance"></CardPanels>
                    {/* <div className="card">
                        <div className="icon">
                            <FlatColorIconsSalesPerformance></FlatColorIconsSalesPerformance>
                        </div>
                        <h4>Savings</h4>
                        <h1>$1875.19</h1>
                    </div> */}
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





export default Content;