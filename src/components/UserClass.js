import React from "react";
class UserClass extends React.Component {

  constructor(props){

    super(props);

    this.state= {
        count:0,
        count2:2
    }

    console.log(this.props.name + "Child Constructor");
  }  

  componentDidMount(){
 
    console.log(this.props.name + "Child CDM");


}
  
  render() {

    const{name,location} = this.props;
    const{count,count2} = this.state;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1>
        <button onClick={()=>{
         this.setState({

            count : this.state.count +1,
            count2 : this.state.count2 +1,
         })

        }}>Click Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: adarshsamal2021@gmail.com</h4>

       
      </div>
    );
 
  
    
  }
}

export default UserClass;
