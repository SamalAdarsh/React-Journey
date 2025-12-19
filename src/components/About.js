import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>This About us Page</h1>
        <User name={"Adarsh(functional)"} location={"Pune(functional)"}/>
        <UserClass name={"Adarsh(class)"} location={"Pune(class)"}/>
    </div>

  
  );
};

export default About;
