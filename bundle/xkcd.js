fetch("https://fwd.innopolis.university/api/hw2?"+new URLSearchParams({email:"l.meshcheriakov@innopolis.university"})).then((e=>e.text())).then((e=>fetch("https://fwd.innopolis.university/api/comic?"+new URLSearchParams({id:e})))).then((e=>e.json())).then((e=>{let t=document.getElementById("xkcd-title");t&&(t.innerText=e.safe_title);let n=document.getElementById("xkcd-image");n instanceof HTMLImageElement&&(n.src=e.img,n.alt=e.alt,n.style.display="");let i=new Date(parseInt(e.year),parseInt(e.month),parseInt(e.day)),a=document.getElementById("xkcd-date");a&&(a.innerText="Published at "+i.toLocaleDateString(),a.style.display="")}));