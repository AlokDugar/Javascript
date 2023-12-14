let par = document.getElementById('para');
let btn = document.getElementById('but');
function changeClr() {
  if (btn.innerText == 'RED') {
    par.style.color = 'Red';
    btn.innerHTML = 'BLACK';
  } else {
    par.style.color = 'Black';
    btn.innerHTML = 'RED';
  }
}

let im = document.getElementById('img');
let but = document.getElementById('addimage');
function addImage() {
  if (but.innerText == 'Display') {
    im.src = './hi.png';
    but.innerHTML = 'Hide';
  } else {
    im.src = '';
    but.innerHTML = 'Display';
  }
}

let pass = document.getElementById('password');
let mode = 'hide';
let i = document.getElementById('pass_img');
function showPass() {
  if (mode == 'hide') {
    pass.setAttribute('type', 'text');
    i.setAttribute('class', 'fa-solid fa-eye-slash');
    mode = 'show';
  } else if (mode == 'show') {
    pass.setAttribute('type', 'password');
    i.setAttribute('class', 'fa-solid fa-eye');
    mode = 'hide';
  }
}

function checkPass() {
  let p = document.getElementById('password').value;
  let cp = document.getElementById('cpassword').value;
  let cpass = document.getElementById('cpassword');
  if (p == cp) {
    cpass.classList.add('success');
    console.log('matched!');
  } else {
    cpass.classList.remove('success');
    cpass.classList.add('error');
    console.log('invalid!');
  }
}

let text = 'freelancer';

j = 0;
function addText(j) {
  if (j < text.length) {
    document.getElementById('addAnim').innerHTML += text[j];
    j++;
    console.log(j);
    setTimeout(addText, 200000);
  }
}

function remText(j, a) {
  if (j >= 0) {
    console.log(j);
    document.getElementById('addAnim').innerHTML = a.join('');
    j--;
    a.pop();
  }
  setTimeout(remText, 200000);
}

mode = 'Remove';
function showText() {
  if (mode == 'Remove') {
    let j = text.length;
    let a = Array.from(text);
    while (j >= 0) {
      remText(j, a);
      j--;
    }
    document.getElementById('rem_but').innerText = 'Add in sequence';
    mode = 'Add';
  } else if (mode == 'Add') {
    j = 0;
    while (j < text.length) {
      addText(j);
      j++;
    }
    document.getElementById('rem_but').innerText = 'Remove in sequence';
    mode = 'Remove';
  }
}
j = 0;
while (j < text.length) {
  addText(j);
  j++;
}
