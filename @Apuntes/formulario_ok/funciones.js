$(document).ready(function () {


    $(".nombre").focus(function () {
        $(this).removeClass('error');
    });
    $(".apellidos").focus(function () {
        $(this).removeClass('error');
    });
    $(".email").focus(function () {
        $(this).removeClass('error');
    });
    $(".telefono").focus(function () {
        $(this).removeClass('error');
    });
    $(".mensaje").focus(function () {
        $(this).removeClass('error');
    });

    
    
    $(".boton_envio").click(function () {
        var nombre = $(".nombre").val();
        apellidos = $(".apellidos").val();
        email = $(".email").val();
        validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        telefono = $(".telefono").val();
        mensaje = $(".mensaje").val();
        sexo = $('input:radio[name=sexo]:checked').val();
        condiciones = $('#condiciones:checked').val();
        color = $('select[name=color]').val();

     

        if (nombre == "") {

            $(".nombre").addClass('error');

            return false;
        } else if (apellidos == "") {
            $(".apellidos").addClass('error');
            return false;
        } else if (email == "" || !validacion_email.test(email)) {
            $(".email").addClass('error');
            return false;
        } else if (telefono == "") {
            $(".telefono").addClass('error');
            return false;
        } else if (mensaje == "") {
            $(".mensaje").addClass('error');
            return false;
        } else if (sexo == undefined) {
            $("#sexo").css("border-bottom", "3px solid red");
            return false;
        } else if (condiciones == undefined) {
            $('.msg').text('Acepta las condiciones').addClass('msg_error').animate({
                'right': '130px'
            }, 300);
            //            alert("Acepta las condiciones")
            return false;
        } else if (color == "0") {
            $("#color").css("background-color", "red");
            return false;
        } else {
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre=' + nombre + '&apellidos=' + apellidos + '&email=' + email + '&telefono=' + telefono + '&mensaje=' + mensaje + '&color=' + color + '&sexo=' + sexo;
            //nombre=nombre&email=email&telefono=telefono
            $.ajax({
                type: "POST",
                url: "http://www.dominio.com/proceso.php",
                data: datos,
                success: function () {
                    $('.ajaxgif').hide();
                    $('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({
                        'right': '130px'
                    }, 300);
                },
                error: function () {
                    $('.ajaxgif').hide();
                    $('.msg').text('Hubo un error!').addClass('msg_error').animate({
                        'right': '130px'
                    }, 300);
                }
            });
            return false;
        }

    });



    $("input[id=nombre]").click(function () {
        //        alert('Evento click sobre un input text con id="nombre"');
    });

    $("#boton").click(function () {
        //        alert($('input:radio[name=sexo]:checked').val());
        //$("#formulario").submit();
    });


    $("input[name=condiciones]").click(function () {
        $('.msg').animate({
            'right': '-20px'
        }, 300);
    });









    $("input[name=sexo]").click(function () {
        $("#sexo").css("border-bottom", "0px solid red");
        //        alert("El sexo seleccionado es: " + $('input:radio[name=sexo]:checked').val());
        //        alert("El sexo seleccionado es: " + $(this).val());
    });
    
    
    
    $("#boton").click(function () {
        if ($("#formulario input[name='sexo']:radio").is(':checked')) {
            //            alert("El sexo seleccionado es: " + $('input:radio[name=sexo]:checked').val());
            // $("#formulario").submit();  
        } else {
            //            alert("Selecciona el sexo!!!");
        }
    });
    
    
    $("select[name=color]").change(function () {
        $("#color").css("background-color", "transparent");
        //        alert($('select[name=color]').val());
        $('input[name=color_favorito]').val($(this).val());
    });





    //	  $("#hombre").attr('checked', true);
    //     $('input:radio[name=sexo]').attr('checked',false);
});