// Formats a number with a metric prefix, e.g. 0.005 A -> "5 mA".
function formatValue(value, unit) {
  var abs = Math.abs(value);
  var prefixes = [[1, ""], [1e-3, "m"], [1e-6, "µ"], [1e-9, "n"]];
  if (abs === 0) {
    return "0 " + unit;
  }
  for (var i = 0; i < prefixes.length; i++) {
    if (abs >= prefixes[i][0]) {
      return round(value / prefixes[i][0]) + " " + prefixes[i][1] + unit;
    }
  }
  return round(value / 1e-9) + " n" + unit;
}

function round(n) {
  return String(Math.round(n * 1000) / 1000);
}

function readNumber(id) {
  var text = document.getElementById(id).value.trim();
  return text === "" ? NaN : Number(text);
}

function showResult(html, isError) {
  var box = document.getElementById("result");
  box.className = isError ? "result error" : "result";
  box.innerHTML = html;
}

function calculate(event) {
  event.preventDefault();
  var vin = readNumber("vin");
  var r1 = readNumber("r1") * Number(document.getElementById("r1-unit").value);
  var r2 = readNumber("r2") * Number(document.getElementById("r2-unit").value);

  if (isNaN(vin) || isNaN(r1) || isNaN(r2)) {
    showResult("Please fill in all three values with numbers.", true);
    return;
  }
  if (vin < 0) {
    showResult("Vin can't be negative. Enter 0 or more volts.", true);
    return;
  }
  if (r1 <= 0 || r2 <= 0) {
    showResult("R1 and R2 must both be greater than zero.", true);
    return;
  }

  var total = r1 + r2;
  var vout = vin * r2 / total;
  var current = vin / total;

  showResult(
    "<p><strong>Output voltage (Vout):</strong> " + formatValue(vout, "V") + "</p>" +
    "<p><strong>Current through the divider:</strong> " + formatValue(current, "A") + "</p>" +
    "<p class=\"muted\">Vout = Vin × R2 ÷ (R1 + R2) = " +
    round(vin) + " × " + round(r2) + " ÷ (" + round(r1) + " + " + round(r2) + ") = " +
    formatValue(vout, "V") + " (resistances in ohms)</p>",
    false
  );
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("divider-form").addEventListener("submit", calculate);
});
