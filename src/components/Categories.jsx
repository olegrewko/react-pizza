import React from 'react'

// class Categories extends React.Component {
//   state = {
//     activeItem : 3
//   };
//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//     this.forceUpdate()
//   }

//   render() {
//     const {items, onClickItem } = this.props

//   return(
//     <div className="categories">
//                  <ul>
//                    <li>Все</li>
               
//                    {items.map((name, index) => (
//                   <li 
//                   className = {this.state.activeItem === index ? 'active' : ''}
//                    onClick = {() => this.onSelectItem(index)}
//                     key={`${name}_${index}`}>
//                     {name}
//                     </li>
//                   ))}
                             
//                 </ul>
//               </div>
//   )
// }}

 function Categories({items, onClickItem}) {
     
     const [activeItem, setActiveItem] =  React.useState(null);
    //  const state = React.useState(null)
    //  const activeItem = state[0]
    //  const setactiveItem = state[1]
     const onSelectItem = (index) => {
       setActiveItem(index)
     }
    
  return (
   
      <div className="categories">
            <ul>
              <li className = {activeItem === null ? 'active' : ''} 
              onClick={() => onSelectItem(null)}>Все
              </li>
           
              {items.map((name, index) => (
              <li
              className = {activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
               key={`${name}_${index}`}>
                {name}
                </li>
              ))}
                         
            </ul>
          </div>
     );
}


export default Categories;
