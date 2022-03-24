import './Sidebar.css';
function Sidebar(){
    return (
        <div className="Sidebar">
            <div className="logo">LOGO</div>
            <ul>
                <li><IcBaselineDashboard></IcBaselineDashboard></li>
                <li><IonWallet></IonWallet></li>
                <li><CiTransfer></CiTransfer></li>
                <li><MdiFileMultipleOutline></MdiFileMultipleOutline></li>
                <li><IcTwotoneAnalytics></IcTwotoneAnalytics></li>
            </ul>
        </div>
    );
}


export function IcBaselineDashboard(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>
    )
  }


export function IonWallet(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104Zm320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64ZM368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"></path><path fill="currentColor" d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"></path></svg>
    )
  }

export function CiTransfer(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m9 20l-5-4l5-4v3h13v2H9v3Zm6-8V9H2V7h13V4l5 4l-5 4Z"></path></svg>
    )
  }


export function MdiFileMultipleOutline(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16 0H8C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6l-6-6m4 18H8V2h7v5h5v11M4 4v18h16v2H4c-1.1 0-2-.9-2-2V4h2Z"></path></svg>
    )
  }


export function IcTwotoneAnalytics(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5 5h14v14H5z" opacity=".3"></path><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path><path fill="currentColor" d="M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z"></path></svg>
    )
  }
export default Sidebar;