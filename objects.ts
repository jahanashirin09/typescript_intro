//declaration of objects
const user={
    name:"hdsufhigfh",
    email:"jfhgyergyg@gmail.com",
    isActive:true
}

//by meantion the argument in the let variable we can add the more argument other than prameter
function createuser({name:string,ispaid:boolean}){}
let newuser={name:"shddgf",ispaid:false,email:"sdgcvvsdcvdcv"}
createuser(newuser)


//function parameter return type object definition
function createcourse():{name:string,price:number}{
    return{name:"jhhvgv",price:877}
}



//type aliases
type loginData={
    name:string;
    email:string;
    isActive:boolean;

}
function createLoginData(login:loginData):loginData{
    return{name:"",email:"",isActive:true}
}

createLoginData({name:"",email:"",isActive:true})



type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });


  //READONLY(here id is read only we can only read it cannot change the value)
  type person={
    readonly id:string,
    name:string,
    email:string,
    isActive:boolean
  } 
  let myUser :person={
    id:"1234",
    email:"gdvfgv",
    name:"skhfiyg",
    isActive:false
  }
  myUser.email="hfuheg"
  myUser.id="ghisufhg"

  //OPTIONAL means that valu is optional and pt question mark to indicate the optional mark

 type persons={
    readonly id:string,
    name:string,
    email:string,
    isActive:boolean
    creditcarddetails?:number
  } 
  let myUsers :persons={
    id:"1234",
    email:"gdvfgv",
    name:"skhfiyg",
    isActive:false
  }
  myUsers.email="hfuheg"
  

  //create a new type based on the previos types
  //here caeddetails is created by the combination of cardnumber ,carddate

  type cardnumber={
    cardnumber:string
  }
  type craddate={
    craddate:string
  }
  type carddetails = cardnumber & craddate&{
    cvv: number
  }
export{}