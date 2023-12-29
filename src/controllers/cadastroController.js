exports.paginaInicial = (req, res) => {    
    res.send(`
    <form action="/" method="POST">
    Código de Barras: <input type="text" name="barras">
    Nome: <input type="text" name="nome">
    Quantidade: <input type="text" name="qtd">
    <button>Enviar</button>
    </form>
    `);
}