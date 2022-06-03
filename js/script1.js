class Produto {

    constructor() {

        this.id = 0;
        this.arrayProdutos = []

    }

    receberInfos() {

        var produto = {
            'id' : this.id,
            'nomeProduto' : document.getElementById('produto').value,
            'valorProduto' : document.getElementById('valor').value
        }
        return produto

    }

    salvar() {
        
        this.id++
        this.arrayProdutos.push(this.receberInfos())
        this.tabela()
        this.cancelar()
        document.getElementById('tbody') = ''
         
    }

    tabela() {

        var tbody = document.getElementById('tbody')
        tbody.innerHTML = ''
        
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            var tr = tbody.insertRow()

            var td_id = tr.insertCell()
            var td_produto = tr.insertCell()
            var td_valor = tr.insertCell()
            var td_acao = tr.insertCell()

            td_id.innerHTML = this.arrayProdutos[i].id
            td_produto.innerHTML = this.arrayProdutos[i].nomeProduto
            td_valor.innerHTML = `R$ ${this.arrayProdutos[i].valorProduto}`

            var imgEdit = document.createElement('img')
            imgEdit.src = 'img/caneta.png'
            imgEdit.setAttribute('onclick', 'produto.alterar(' + this.arrayProdutos[i].id + ')')

            var imgDelete = document.createElement('img')
            imgDelete.src = 'img/remover.png' 
            imgDelete.setAttribute('onclick', 'produto.deletar(' + this.arrayProdutos[i].id + ')')

            td_acao.appendChild(imgEdit)
            td_acao.appendChild(imgDelete)
        }
    }

    cancelar() {

        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''

    }

    deletar(idDelete) {
        
        if (confirm('Deseja deletar este produto?')) {
            var tbody = document.getElementById('tbody')

            for (let i = 0; i < this.arrayProdutos.length; i++) {

                if (this.arrayProdutos[i].id == idDelete) {

                    this.arrayProdutos.splice(i, 1)
                    tbody.deleteRow(i)
                }
                if (this.arrayProdutos != []) {
                    this.id = 0
                }
            }
        }
    }

    alterar(idAltera) {
        
        if (confirm('Deseja alterar este produto?')) {

            var produtoAlterado = window.prompt('Novo produto')
            var valorAlterado = window.prompt('Novo valor')

            for (let i = 0; i < this.arrayProdutos.length; i++) {

                if (this.arrayProdutos[i].id == idAltera) {

                    this.arrayProdutos[i].nomeProduto = produtoAlterado
                    this.arrayProdutos[i].valorProduto = valorAlterado

                    this.tabela().td_produto.innerHTML = this.arrayProdutos[i].nomeProduto
                    this.tabela().td_valor.innerHTML = `R$ ${this.arrayProdutos[i].valorProduto}`

                }
            }
        }
    }    
}

var produto = new Produto()
