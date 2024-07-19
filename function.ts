function addTwo(num){
    num.toUppercase()
    return num+2
}

function getupper(val:string){
    return val.toUpperCase()
}
function signupuser(name:string,email:string,isPaid:boolean){}
let loginUser=(name:string,email:string,isPaid:boolean=false)
addTwo(5)
getupper("hdfuvygfyvgygv")
signupuser("dhvachdac","hvdjuyda",true)


//return type
function getValue(myval:number):boolean{
    if(myval>5){
        return true
    }
    return "200 ok"
}

//arrow function
const gethello=(s:string):string=>{
    return ""
}


//array function automatically switches to different types based on the types present in the array
//array for string
const heros=["thor","spiderman","ironman"]
heros.map(hero=>{
    return `hero is${hero}`
})


//when we hover over it it says the type is number and in the above case it is 
//tell that type of that is string 
const heross=[1,2,3,4]
heross.map(hero=>{
    return `hero is${hero}`
})
//void return nothing
function consoleerror(errmsg:string):void{
    console.log(errmsg)
}
//never return any msg function throw error or the forceful termination of program
function handleerror(errmsg:string):never{
    throw new Error(errmsg)
}




export{}
