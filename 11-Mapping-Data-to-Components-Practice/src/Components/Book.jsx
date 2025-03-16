function Book(props){
    return(
        <div className="book">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Book;