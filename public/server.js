

 let input = document.querySelector("input");
let ansSection = document.getElementById("answerSection");
document.querySelector("button").addEventListener("click",async()=>{
  console.log("clicked")   
    // console.log ("HHHHHii Rohit")
 
    const data = await fetch(`search/${input.value}`);
    // console.log(data);
let userdiv= document.createElement("div")
userdiv.innerHTML=input.value;
userdiv.classList.add("query", "self-end", "bg-blue-500", "text-white", "p-3", "rounded-lg", "w-[60vw]", "md:w-[40vw]")

ansSection.appendChild(userdiv)

let div = document.createElement("div");
div.classList.add("answer", "self-start" ,"bg-green-500", "text-white" ,"p-3", "rounded-lg", "w-[60vw]" ,"md:w-[40vw]")

   let value = await data.text();
   div.innerHTML=value;
ansSection.appendChild(div)
   console.log(value)
  })