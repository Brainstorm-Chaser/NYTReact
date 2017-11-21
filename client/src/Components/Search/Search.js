import React from "react";

const Search = () =>
 <form>
   <div class="form-group">     
      <input type="topic" class="form-control" id="inputTopic" placeholder="Topic"></input>
   </div>
   <div class="form-group">     
      <input type="start" class="form-control" id="inputStart" placeholder="Start Year"></input>
   </div> 
   <div class="form-group">    
      <input type="end" class="form-control" id="inputEnd" placeholder="End Year"></input>
   </div>   
      
    </form>
;

export default Search;