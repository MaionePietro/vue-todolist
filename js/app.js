const { createApp } = Vue
    
      createApp({
        data() {
          return {
            mytask: [
				{
					pText: 'prova prova',
					verifica: false,
				},
                {
					pText: 'prova prova list',
					verifica: false,
				},
                {
					pText: 'prova prova super list',
					verifica: false,
				}
			],
            inputValue: '',
          }
        },
        methods: {
            addTask() {
                const newTask = this.inputValue
            },
            removeTask(indice) {
                console.log(this.mytask.splice(indice))
            },
            decoration(){
                
            }

        },
      }).mount('#app')