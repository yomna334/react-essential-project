import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const [checkList]=["boots","tents","headLamp"];
console.log([checkList])
ReactDOM.render(
// React.createElement("h1",{style:{color:"blue"}},"hello"),
// React.createElement("ul",
// null,
// React.createElement("li",null,"bag"),
// React.createElement("li",null,"purse"),
// )

<App authorized={false}/>
,
  document.getElementById('root')

);
