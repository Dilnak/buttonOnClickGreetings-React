import React from "react";

class App extends React.Component{
   constructor(){
      super();
      this.state={
         data:" "
      }
      this.displayMessage=this.displayMessage.bind(this)
   };
   displayMessage(){
      this.setState({data:"Good morning Dilna"})
   }
   render()
   {
      var myStyles={
         color:"red",
      fontSize:50,
      
      }
      return(
         <div>
            <button onClick={this.displayMessage}>click here for greeting message</button>
            <h1 style={myStyles}>{this.state.data}</h1>
         </div>
      );
   }
}
export default App;