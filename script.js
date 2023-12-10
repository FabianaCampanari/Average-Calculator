function calcular() {
  var elementoAprov = document.getElementById("mediaDasNotas").value;
  var elementoNota1 = document.getElementById("primeiraNota").value;
  var elementoNota2 = document.getElementById("segundaNota").value;
  var elementoNota3 = document.getElementById("terceiraNota").value;
  var elementoNota4 = document.getElementById("QuartaNota").value;

  var aprov = parseFloat(elementoAprov);
  var n1 = parseFloat(elementoNota1);
  var n2 = parseFloat(elementoNota2);
  var n3 = parseFloat(elementoNota3);
  var n4 = parseFloat(elementoNota4);

  var media = ((n1 + n2 + n3 + n4) / 4).toFixed(2);

  var txt = media + " ";

  var passou;

  if (media >= aprov) {
    passou = "Congratulations, you've been approved!";
  } else {
    passou = "What a pity, you were disapproved...";
  }

  console.log(txt);

  if (txt !== "NaN ") {
    var mostrarElemento1 = document.getElementById("notareal");
    mostrarElemento1.innerHTML = txt;

    var mostrarElemento2 = document.getElementById("passou");
    mostrarElemento2.innerHTML = passou;
  } else {
    alert("Complete all the fields correctly!");
  }
}
