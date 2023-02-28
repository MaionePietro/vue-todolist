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
                console.log(this.mytask[indice])
                this.mytask.splice(indice)
            },
            decoration(index){
                console.log(this.mytask[index].verifica)
                if(this.mytask[index].verifica === true ){
                  this.mytask[index].verifica = false
                }else{
                  this.mytask[index].verifica = true
                }
            }

        },
      }).mount('#app')