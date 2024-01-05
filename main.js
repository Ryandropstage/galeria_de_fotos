$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefoult();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novaIten = $('<li></li>');
        $(`<img src="${endereçoDaNovaImagem }"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imgem-link">
                <a href= "${endereçoDaNovaImagem}" target= "_blank" title="ver imagem em tamanho real
                    Ver imagem em tamanho real 
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
    })
})