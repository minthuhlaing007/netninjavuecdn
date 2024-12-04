const app = Vue.createApp({
	data(){
		return{
			books:[
					{
						title: "Harry Potter",
						author:"JK Rollin",
						img:"./assets/1.jpg",
						isFav:true,
					},
					{
						title: "Fast and the furious",
						author:"minthuhlaing",
						img:"./assets/2.jpg",
						isFav:false,
					},
					{
						title: "lord of the ring",
						author:"hlaing min than",
						img:"./assets/3.jpg",
						isFav:true,
					},
					{
						title: "tom and jerry",
						author:"john doe",
						img:"./assets/2.jpg",
						isFav:false,
					},
				],
			showBooks:false,
			link:"https://google.com",
		}
	},
	methods:{
		clickHandler(book){
			book.isFav=!book.isFav;
		}
	},
	computed:{
		filteredBooks(){
			return this.books.filter((book)=>book.isFav);
		}
	}
});
app.mount("#app")