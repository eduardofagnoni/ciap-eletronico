
$("#btn-enviar").click(function (e) {

    e.preventDefault();

    $.ajax({
        url: "com-autenticacao.asp",
        data: $("#contato-form-fale-conosco").serialize(),
        cache: false,
        type: "POST",
        dataType: "html",
        beforeSend: function() {
            $('.loading').show();
        },
        success: function (response) {
            console.log("Response", response);
            $('#contato-form-fale-conosco').hide();
            $('.loading').hide();
            $('.confirma').show();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Erro: " + thrownError + "--" + xhr.status);
            $('.loading').hide();
        }
    })
})