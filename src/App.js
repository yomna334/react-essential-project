
import './App.css';
// function Header(props) {

//   return (
//     <div>{props.name}'s header</div>
//   )
// }
// const dishes = ["macroni,fried chicken",
//   "fishes,rice",
//   "meat,vegetables"]
// const dishObjs = dishes.map((dish, id) => ({ id: id, title: dish }));
// console.log(dishObjs);
// function Main(props) {

//   return (
//     <ul style={{ textAlign: "left" }}>
//       {props.dishes.map((dish) => (<li key={dish.id}>{dish.title}</li>))}</ul>
//   )
// }
// function Footer(props) {

//   return (
//     <div>{props.date}</div>
//   );
// }

// function App() {
//   return (
//     <div className="App">

//       <Header name="ymna" />
//       <Main dishes={dishObjs} />
//       <Footer date={new Date().getFullYear()} />
//     </div>
//   );
// }
/////////////////////////////////////////////////////
function SuperSecretComponent(){
  return (<h1>Secret information for authorized users</h1>)
  }
  function RegularComponent(){
    return (<h1>everyone can see this component</h1>)
    }
  function App(props) {
    console.log(props.authorized)
    // if(props.authorized){

    //   return (
    //     <SuperSecretComponent/>
    //   );
    // }
    // else{

    //   return(<RegularComponent/>)
    // }
    return(<>
    {props.authorized? <SuperSecretComponent/>:<RegularComponent/>}

    </>)};
export default App;
