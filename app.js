const App = {
	data() {
		return{
			title: 'Список задач',
			myPlaceholder: 'Напишите задачу',
			inputValue: '',
			notes: [
		
			]
		}
	},
	 methods:{
		inpudChange(event){
			this.inputValue = event.target.value
		},
		addNotes(){
			if(this.inputValue !==''){
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
	
		},
		removeNotes(idx){
			this.notes.splice(idx, 1)
		}
	 }

}

Vue.createApp(App).mount('#app')