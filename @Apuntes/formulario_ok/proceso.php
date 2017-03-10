<?php



//$to ="daniel@trebol.com";
$to ="email@dominio.com";

$headers = "Content-Type: text/html; charset=iso-8859-1\n"; 
$headers .= "From:".$_POST['nombre']."\r\n";			

$tema="Contacto desde el Sitio Web";


$mensaje=
"
<table border='0' cellspacing='2' cellpadding='2'>
  <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Nombre:</strong></td>
    <td width='80%' align='left'>$_POST[nombre]</td>
  </tr>
    <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Apellidos:</strong></td>
    <td width='80%' align='left'>$_POST[apellidos]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>E-mail:</strong></td>
    <td align='left'>$_POST[email]</td>
  </tr>
   <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Asunto</strong></td>
    <td width='80%' align='left'>$_POST[telefono]</td>
  </tr>
  
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Comentario:</strong></td>
    <td align='left'>$_POST[mensaje]</td>
  </tr>
  
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Sexo:</strong></td>
    <td align='left'>$_POST[sexo]</td>
  </tr>
  
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Color:</strong></td>
    <td align='left'>$_POST[color]</td>
  </tr>
  
</table>
";
     
     
     
     
@mail($to,$tema,$mensaje,$headers); 






?>