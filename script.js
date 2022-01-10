let mala1
let mala2
let mala3

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
function per(m1,m2,m3){
  const p=m1+m2+m3;
}
function lauk(m1,m2,m3) {
  const s=per(m1,m2,m3);
  var area = Math.sqrt(s*(s-m1)*s(s-m2)*(s-m3))
  
}
