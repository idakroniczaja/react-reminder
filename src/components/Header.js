import React from "react";
import Button from './Button'

function Header({onAdd, showAdd}) {
  return (
    <div>
      <h1>Task tracker</h1>
      <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
 
    </div>
  );
}

export default Header;
