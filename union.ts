//unio means we can assign more types to a variable using pipe sign
let score:number|string=33
score=77
score="88"


type users={
    name:number
    id:number    
}
type admin={
    name:string
    id:string
}
let jahana:users|admin={name:"hsdbvhbd",id:"snoskn"}
jahana={name:"sdvhsdb",id:"dhvsdhvhs"}

function getdbid(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
}



const data1:number[]=[1,2,3,4]
const data2:string[]=["susd","sjvksuv","jdhafh","hgsfiysgf"]
const data3:string[]|number[]|boolean[]=["susd","sjvksuv",12,44,true]
//this is not an error(automatic)

//assigning constant values that cannot allow to change

let seatAllotment:"adfd"|"shdjhsdv"|"hsbhkvsbv"
seatAllotment="adfd"
seatAllotment="fsjgkfs"


export{}