const ListItem = (props) => {
    return (
      <li>
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
          <img src={props.imageUrl} alt={props.alt} />
        </a>
      </li>
    );
  };
  
  export default ListItem;
  