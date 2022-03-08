import './Content.css';
import Card from './Card';
function Content() {
    return (
        <div className='content'>
            <div className='top-layer'>
                <div className='sub-layer'>
                    <input></input>
                    <div className='notification'>! Duress</div>
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

export default Content;