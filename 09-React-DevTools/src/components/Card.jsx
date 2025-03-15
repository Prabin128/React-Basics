import Details from './Detail.jsx'
function Card(props){
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>     {/* //"Senior Developer" */}
                <img className="circle-img" src={props.image} alt= {props.name} />     {/* image= image 1    , name = "Senior Developer*/}
            </div>
            <div className="bottom">
                {/* Use the Detail component for phone and email */}
                <Details detailInfo = {props.phone}/>         {/*phone = '00000000000' */}
                <Details detailInfo ={props.email} />         {/* email  =  'seniordev123@example.com' */}
                <Details  detailInfo = {props.address} />     {/* address  =  'universe, Solar System' */}  
            </div>
        </div>
    )
}

export default Card;