const app = Vue.createApp({
    // template:"<h2>I am the template</h2>"
    data() {
        return {
            showBooks: true,
            title: "12 rules of Power",
            author: "Jordan Peterson",
            age: 55
        }
    },

    methods: {
        changeTitle(title) {
            this.title = title
        },
        hideBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvents(event, data) {
            console.log(event)
            if (data) {
                console.log(data)
            }
        }
    }
});

app.mount("#app")