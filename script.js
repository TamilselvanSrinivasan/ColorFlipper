const btn=document.getElementById('btn')
const colortext=document.getElementById('color')
const main=document.getElementById('main')

const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function()
{
    let s="#"
    for(let i=1;i<=6;i++)
    {
        s+=ranhex()
    }
    full.style.backgroundColor=s
    colortext.innerHTML=s
})

function ranhex()   
{
    let randomindex=Math.floor(Math.random()*16)
    return hex[randomindex]
}
