const { createApp } = Vue

createApp({
    data() {
        return {
            newElement: {
                prodotto: "",
                comprato: false,
            },
            listaSpesa: [
                {
                    prodotto: "banane",
                    comprato : false
                },
                {
                    prodotto: "mele", 
                    comprato : false
                },
                {
                    prodotto: "pere", 
                    comprato : false
                },
            ]
                }
    },
    methods: {
        pushElement() {
            
            this.listaSpesa.unshift({

                prodotto: this.newElement.prodotto,
                comprato: false

            });

            this.newElement.prodotto = "";
        },
        changeStyle (i) {

            this.listaSpesa.splice(i,1)

        },
        showProduct(i) {

            this.listaSpesa[i].comprato = !this.listaSpesa[i].comprato 

        },
        changeClass (i) {

            let risultato = "green"

            if(this.listaSpesa[i].comprato == true) {
                risultato = "red"
            } 

            return risultato;
        }
        }
    
}).mount('#app')