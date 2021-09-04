import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './img/01.jpg';



const font = {
  fontSize: '1.2rem',
  color: 'blue',
  textShadow: '0 4px 8px #000'
}

ReactDOM.render(<>

  <div className="main">
    
    <div className="fgroup">
      <label>temp</label><input type="text" id="temp"/>
    </div>
    <div className="fgroup">
      <label>Location</label><input type="text" id="location"/>
    </div>
    <div className="fgroup">
      <label>date</label><input type="date" id="date"/></div>

    <button id="btn">Submit</button>

    <div id="outputdiv">

      <div><label id="lb01"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={font} id="01"></span></div>
      <div><label id="lb02"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="02"></span></div>
      <div> <label id="lb03"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="03"></span></div>

    </div>

  </div>      {/*------------------class main ends --------------------*/}  
  


</>, document.getElementById('root'));



const myfun = () => {
  const temp = document.getElementById('temp').value.trim();
  const tempLen = document.getElementById('temp').value.trim().length;
  const loc = document.getElementById('location').value.trim();
  const locLen = document.getElementById('location').value.trim().length;
  const dte = document.getElementById('date').value;
  console.log(dte);

  const regEx= /[\W]/;

  if (temp == '') {
    alert('temp should not be blank ');
    return false;
  }
  else if (tempLen > 2) {

    alert('temp connot be in three or more digit ');
    return false;
  }
  else if (isNaN(temp)) {
    alert('temp should not be in string format and nor contain spacial symbol');
    return false;
  }

 if(loc==''){

   alert('user must provide location ifo');
   return false;

 }
 else if(locLen>20){
            alert('name must not exeed 20 char');
            return false;
 }
 else if(regEx.test(loc)){
       alert('numbers and special symbles are not allowed in location');
       return false;
 }
 
  if(dte==''){
         alert('user must provide date');
         return false;
  }



  document.getElementById('01').innerHTML = `${temp} <span style="color:green">degree celcies</span>`;
  document.getElementById('02').innerText = `${loc}`;
  document.getElementById('03').innerText = `${dte}`;


  document.getElementById('outputdiv').style.borderTop = "1px solid green";
  document.getElementById('outputdiv').style.borderBottom = "1px solid green";
  document.getElementById('lb01').innerText = 'Temperature';
  document.getElementById('lb02').innerText = 'Location';
  document.getElementById('lb03').innerText = 'Date';

  cls();

}
document.getElementById('btn').onclick = myfun;



function cls() {
  document.getElementById('temp').value = '';
  document.getElementById('location').value = '';
  document.getElementById('date').value = '';
}
