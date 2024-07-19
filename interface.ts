interface users{
    email:string,
    userid:number,
    googleid?:string,
    //strattrail:()=>string
    starttrail():string
    getcoupon(couponname:string,value:number):number
}

//reopening of interface
interface users{
    githubtoken:string
}
//inheritance property for interface
interface Admin extends users{
    role:"admin"
}
const hitesh :Admin={email:"ifufu",userid:222,role:"admin",
    githubtoken:"github",
    starttrail:()=>{
       return "trail started"},
    getcoupon: (name:"hitesg",off:10)=>{
        return 10
        }
        
    }


export{}