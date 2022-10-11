<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulario de Prueba</title>
    </head>

    <body>
        <h1>Datos de la Persona</h1>
        <form action="SvPersona" method="POST">
            <p><label>Dni:  </label> <input type="text" name="Dni"></p>
            <p><label>Nombre:   </label> <input type="text" name="nombre"></p>
            <p><label>Apellido: </label> <input type="text" name="apellido"></p>
            <p><label>Teléfono: </label> <input type="text" name="telefono"></p>
                  <button type="submit" >Enviar</button>
        </form>
        
        
        <h1>Ver lista de personas</h1>
         <p>Si desea ver todas las personas haga click en el boton mostrar personas</p>
         <form action="SvPersona" method="GET">
                 <button type="submit"  >Mostrar Personas </button>
         </form>
         
         
         <h1>Eliminar personas</h1>
          <p> Ingrese el id de la persona a eliminar</p>
                <form action="  " method="   ">
                     <p><label>Id: </label> <input type="text" name="dni_elim"></p>
                 <button type="submit"  >Eliminar</button>
                </form>
         
        
    </body>
</html>
