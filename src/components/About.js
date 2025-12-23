import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

// const About = () => {
//   return (
//     <div className="about">
//       <h1>This About us Page</h1>
//         <User name={"Adarsh(functional)"} location={"Pune(functional)"}/>
//         <UserClass name={"Adarsh(class)"} location={"Pune(class)"}/>
//     </div>

//   );
// };

class About extends Component {

constructor(props){

    super(props);

    console.log("Parent Constructor");

}

  componentDidMount(){
 
    console.log("Parent CDM");


}

  render() {

     console.log("Parent Render");
    return (
      <div className="about">
        <h1>This About us Page</h1>
        {/* <User name={"Adarsh(functional)"} location={"Pune(functional)"} /> */}
        {/* <UserClass name={"First(class)"} location={"Pune(class)"} /> */}
        {/* <UserClass name={"Second(class)"} location={"Pune(class)"} /> */}
        <User/>
      </div>
    );
  }
}

export default About;
