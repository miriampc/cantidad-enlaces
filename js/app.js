var contenido=document.getElementById('num_enlaces');
var enlaces=document.getElementsByTagName('a');
var cantidad=0;
for (var i = 0; i <= enlaces.length; i++) {
  cantidad=i;
}
 contenido.innerHTML="Existen "+cantidad+" enlaces.";
