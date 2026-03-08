// Build URL from parts so SES/lockdown cannot strip a single literal; fallback from HTML if present
function getApiBase() {
  var el = document.documentElement.getAttribute("data-api-base");
  if (el && typeof el === "string" && el.indexOf("http") === 0) return el;
  var scheme = "https" + "://";
  var host = "calculator-api-jyu3.onrender.com";
  return scheme + host;
}

async function add() {
  const a = document.getElementById("first_num").value;
  const b = document.getElementById("second_num").value;

  const res = await fetch(`${getApiBase()}/sum?a=${a}&b=${b}`);
  const data = await res.json();

  document.getElementById("response").innerHTML = data.ans;
}

async function subs() {
  const a = document.getElementById("first_num").value;
  const b = document.getElementById("second_num").value;

  const res = await fetch(`${getApiBase()}/sub/${a}/${b}`);
  const data = await res.json();

  document.getElementById("response").innerHTML = data.ans;
}

async function mult() {
  const a = document.getElementById("first_num").value;
  const b = document.getElementById("second_num").value;

  const res = await fetch(`${getApiBase()}/mul`, {
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

  const res = await fetch(`${getApiBase()}/div`, {
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