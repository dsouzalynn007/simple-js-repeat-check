// //! Find number of times Letter/symbol is repeated

let ip=document.getElementById('ip')
let d=document.getElementById('d')
let s=document.getElementById('s')

const func=()=>{
    const myStr = s.value
    let newStr = ''
    let count = 0
    let val = ip.value.toLowerCase()
    for(let i=0; i<myStr.length; i++){
        let stmt=myStr[i].toLowerCase()
        if(stmt===val){
            newStr += stmt && stmt
            count = newStr.length
        }
    }
    d.innerHTML = newStr[0] ?
    `Letter/symbol ( ${ newStr[0]===' ' ? '&#60space&#62' : val} ) is repeated ( ${count} ) ${count===1 ? 'time' : 'times'}` :
    val && `Letter/symbol ( ${val} ) is not present in the above statement`
}
