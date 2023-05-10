const { createApp } = Vue

createApp({
    data() {
        return {
            newElement: "",
            listaSpesa: [
                {
                    prodotto: "banane", comprato : "done"
                },
                {
                    prodotto: "mele", comprato : "done"
                },
                {
                    prodotto: "pere", comprato : "done"
                },
            ]
                }
    },
    methods: {
        pushElement() {
            this.listaSpesa.push(this.newElement)
        }
    }
}).mount('#app')