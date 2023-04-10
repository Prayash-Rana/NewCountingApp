
const date = new Date();
const fullDate = date.getDate();
const monthName = date.getMonth() + 1;
const currentYear = date.getFullYear();

function CardBox(props){
    const {titleText,descText} =props;
    return <div className="card">
                <h3 className='cardTitle'>{titleText}</h3>
                <p className='cardDesc'>{descText}</p>
                <h4 className='cardDate'>{fullDate + "/" + monthName + "/" + currentYear}</h4>

            </div>
}

export default CardBox;

