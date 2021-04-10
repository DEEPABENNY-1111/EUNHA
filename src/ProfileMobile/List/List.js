import React from "react";
import Info from "./../Info/info"
import "./index.scss";
function List({Title,...props}) {
    
    return(
     <div className="dataBox">
         <div className="titleBox">
                 <h4 className="title">{Title}</h4>
                 <Info isVisible={false}/>
         </div>
     </div>
    );
}

export default List;
