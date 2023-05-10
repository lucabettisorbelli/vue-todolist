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
        }
    }
}).mount('#app')