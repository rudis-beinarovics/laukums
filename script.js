//let mala1
//let mala2
//let mala3

function nolasa() {
  const malas = document.getElementsByClassName("mala");
  const m1 = parseFloat(mala1.value);
  const m2 = parseFloat(mala2.value);
  const m3 = parseFloat(mala3.value);
  if (m1 > 0 && m2 > 0 && m3 > 0) {
    console.log({m1,m2,m3});
    return {m1,m2,m3};
  } else {
    console.log(false);
    return false;
  }
}

function vaiir(){
const m = nolasa();
m1=m.m1;m2=m.m2; m3=m.m3; 
let mm= Math.max(m1,m2,m3);
let p2= m1+m2+m3;
let pm= p2-mm;
//console.log(pm);
//console.log(mm);
if (mm < pm) {
  return {m1,m2,m3};
} else {x``
  console.log(false);
  return false;
}
}

function per(m1,m2,m3){
    const m = nolasa();
    m1=m.m1;m2=m.m2; m3=m.m3;  
    console.log(m1,m2,m3);
  const p=m1+m2+m3;
  console.log(p)
  return p;
}

function lauk(m1,m2,m3) {
  const m = nolasa();
  const p = per()
  var s = p/2;
  m1=m.m1;m2=m.m2; m3=m.m3;

  var area = Math.sqrt(s*(s-m1)*(s-m2)*(s-m3))
  //console.log()
  console.log(area);
  return area;



}
function druka(){
  const area=lauk()
  const p=per()
let rindas = document.querySelector('.rindas'); 
 if(area>0 && p>0){
rindas.innerHTML += `
<tr>
    <td>${p}</td>
    <td>${area}</td>
</tr>`
} 
 else {
  let rindas = document.querySelector('.rindas'); 
  let area = "";
  let p = "Trijsturis neeksiste"
  rindas.innerHTML += `
<tr>
    <td>${p}</td>
    <td>${area}</td>
</tr>`
}
}
