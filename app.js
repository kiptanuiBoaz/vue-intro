const app = Vue.createApp({
    // template:"<h2>I am the template</h2>"
    data() {
        return {
            showBooks: true,
            title: "12 rules of Power",
            author: "Jordan Peterson",
            age: 55,
            url: "http://www.boazkiptanui.vercel.app",
            books: [
                { author: "Neil Degrasse Tyson", title: "Cosmic Queries", isFav: true },
                { author: "Barrack Obama", title: "Coming to America", isFav: false },
                { author: "Elon Musk", title: "Delivering the Falcon Heavy", isFav: true },
            ]
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
        },
        toggleClass(book) {
           book.isFav = !book.isFav;

        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter(book => book.isFav);
        }
    }
});

app.mount("#app")