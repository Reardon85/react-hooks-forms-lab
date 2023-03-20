import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [formItem, onSetFormItem] = useState({
    name:"",
    category:"Produce"
  })

  const handleOnChange = (e) => {

    const newObj =  {
      ...formItem,
      [e.target.name]: e.target.value 
    }
    onSetFormItem(newObj)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formItem.name,
      category: formItem.category,
    };

    onItemFormSubmit(newItem);

  }



  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formItem.name} onChange={handleOnChange}/>
      </label>

      <label>
        Category:
        <select name="category" value ={formItem.category} onChange={handleOnChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
