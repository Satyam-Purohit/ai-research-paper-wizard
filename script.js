(function(){const g1=document.getElementById("generate");const g2=document.getElementById("prompt");const g3=document.getElementById("output");
g1.addEventListener("click",async function(){
g3.innerHTML="⏳ Generating...";
try{
let r=await fetch("https://ai-research-paper-wizard.onrender.com/api/generate",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({prompt:g2.value})
});
let j=await r.json();
g3.innerHTML="<pre>"+j.result+"</pre>";
}catch(e){
console.error(e);
g3.innerHTML="❌ Something went wrong.";
}
});
})();