import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count:0,
      // count2:2

      name: "Dummy",
      location: "Default",
      avatar_url: "https//demo...",
    };

    console.log(this.props.name + "Child Constructor");
  }

//   async componentDidMount() {
//     console.log(this.props.name + "Child CDM");
//     const data = await fetch("https://api.github.com/users/SamalAdarsh");
//     const json = await data.json();

//     this.setState({
//       userInfo: json,
//     });

//     console.log(json);
//   }

componentDidMount(){

    this. timer = setInterval (()=>{
        console.log("Heyyyyyy")
    },1000);
}
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Unmount");
clearInterval(this.timer);
  }

  render() {
    // const{name,location} = this.props;

    // const{count,count2} = this.state;

    // const {name,location} = this.state.userInfo;

    console.log(this.props.name + "Child Render");

    // console.log(this.state.userInfo?.name);

    // const { name, location, avatar_url } = this.state.userInfo || {};

    return (
      <div className="user-card">
        {/* <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1>
        <button onClick={()=>{
         this.setState({

            count : this.state.count +1,
            count2 : this.state.count2 +1,
         })

        }}>Click Count</button> */}

        {/* <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: adarshsamal2021@gmail.com</h4> */}
      </div>
    );
  }
}

export default UserClass;
