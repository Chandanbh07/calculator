const API = "https://calculator-api-jyu3.onrender.com";

async function add() {
  const a = document.getElementById("first_num").value;
  const b = document.getElementById("second_num").value;

  const res = await fetch(`${API}/sum?a=${a}&b=${b}`);
  const data = await res.json();

  document.getElementById("response").innerHTML = data.ans;
}

async function subs() {
  const a = document.getElementById("first_num").value;
  const b = document.getElementById("second_num").value;

  const res = await fetch(`${API}/sub/${a}/${b}`);
  const data = await res.json();

  document.getElementById("response").innerHTML = data.ans;
}

async function mult() {
  const a = document.getElementById("first_num").value;
  const b = document.getElementById("second_num").value;

  const res = await fetch(`${API}/mul`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ a, b })
  });

  const data = await res.json();

  document.getElementById("response").innerHTML = data.ans;
}

async function divi() {
  const a = document.getElementById("first_num").value;
  const b = document.getElementById("second_num").value;

  const res = await fetch(`${API}/div`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ a, b })
  });

  const data = await res.json();

  if (data.error) {
    document.getElementById("response").innerHTML = data.error;
  } else {
    document.getElementById("response").innerHTML = data.ans;
  }
}