
let v

function nolasa() {
  const malas = document.getElementsByClassName("mala");
  const m1 = parseFloat(mala1.value);
  const m2 = parseFloat(mala2.value);
  const m3 = parseFloat(mala3.value);
  if (m1 > 0 && m2 > 0 && m3 > 0) {
    return { m1, m2, m3 };
  } else {
    console.log(false);
    return false;
  }
}

function vaiir() {
  const m = nolasa();
  m1 = m.m1; m2 = m.m2; m3 = m.m3;
  let mm = Math.max(m1, m2, m3);
  let p2 = m1 + m2 + m3;
  let pm = p2 - mm;
  if (mm < pm) {
    return { m1, m2, m3 };
  } else {
    ``
    console.log(false);
    return false;
  }
}
function trijveids() {
  const m = nolasa();
  v=""
  m1 = m.m1; m2 = m.m2; m3 = m.m3;
  console.log({ m1, m2, m3 });
  if (m1 == m2 && m2 == m3) {
    v += "Vienadmalu trijsturis";
  } else {
    if (m1 == m2 || m1 == m3 || m2 == m3) {
      v += "Vienadsanu trijsturis";
    } else {
      v += "Vienkars trijsturis";
    }
  }
    console.log(v);
    return v;
   
}






function per(m1, m2, m3) {
  const m = nolasa();
  m1 = m.m1; m2 = m.m2; m3 = m.m3;
  const p = m1 + m2 + m3;
  return p;
}

function lauk(m1, m2, m3) {
  const m = nolasa();
  const p = per()
  var s = p / 2;
  m1 = m.m1; m2 = m.m2; m3 = m.m3;

  var area = Math.sqrt(s * (s - m1) * (s - m2) * (s - m3))
  return area;



}
function druka() {
  const area = lauk()
  const p = per()
  const v=trijveids()

  let rindas = document.querySelector('.rindas');
  if (area > 0 && p > 0) {
    rindas.innerHTML += `
<tr>
<td>${v}</td>
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
<td>${v}</td>
    <td>${p}</td>
    <td>${area}</td>
</tr>`
  }
}

