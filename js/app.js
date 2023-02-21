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
                
            },
            removeTask() {
                
            },
        },
      }).mount('#app')