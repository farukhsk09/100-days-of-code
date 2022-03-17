import './Content.css';
import Card from './Card';
function Content() {
    return (
        <div className='content'>
            <div className='top-layer'>
                <div className='sub-layer'>
                    <input></input>
                    <div className='notification'><PhWarningOctagonFill></PhWarningOctagonFill>Duress</div>
                </div>
                <div className='profile'>
                    
                </div>
            </div>
            <div className='content-layer'>
                <div className='quick-actions'>
                    <Card premise='Start' button='+'></Card>
                    <Card premise='Quiz' button='?'></Card>
                    <Card premise='Survey' button='%'></Card>
                    <Card premise='Permission Slip' button='//'></Card>
                    <Card premise='Bulletin' button='+'></Card>
                    <Card premise='Medical' button='*'></Card>
                </div>
                <div className='filters'></div>
            </div>
        </div>
    );
}



export function PhWarningOctagonFill(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="m227.3 80.2l-51.5-51.5a16.1 16.1 0 0 0-11.3-4.7h-73a16.1 16.1 0 0 0-11.3 4.7L28.7 80.2A16.1 16.1 0 0 0 24 91.5v72.9a16.1 16.1 0 0 0 4.7 11.4l51.5 51.5a16.1 16.1 0 0 0 11.3 4.7h73a16.1 16.1 0 0 0 11.3-4.7l51.5-51.5a16.1 16.1 0 0 0 4.7-11.4V91.5a16.1 16.1 0 0 0-4.7-11.3ZM120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"></path></svg>
    )
  }

export default Content;