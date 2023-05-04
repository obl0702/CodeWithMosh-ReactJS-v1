import { useState } from "react";

interface ListItemProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

//function ListGroup(props: ListItemProps) {
function ListGroup({items, heading, onSelectedItem}: ListItemProps) {
    
    

    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no item found.</p> }
      <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} 
                onClick={()=> {
                  setSelectedIndex(index);
                  onSelectedItem(item);
                }}>{item}</li>
            ))}
      </ul>
    </>
  );
}
export default ListGroup;
