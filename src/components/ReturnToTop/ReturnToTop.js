
import './ReturnToTop.css';
const ReturnToTop = function(props){

    const toId = "#" + props.idName;

    return(
        <div className="returnToTop">
        <button className="returnToTop-button"><a href={toId} className="returnToTop-text">Return To Top</a></button>
        </div>
    )

}

export default ReturnToTop;