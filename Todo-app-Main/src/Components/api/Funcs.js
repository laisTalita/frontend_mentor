export async function Create(obj) {
    try{
        const resp = await fetch("http://localhost:3001/all",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(obj)
        })
    }catch(error){
        console.log(error)
    }
         
} 

export async function ListAll(){
    try{
        const resp = await fetch("http://localhost:3001/all",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })
        return await resp.json()
    }catch(error){
        console.log(error)
    }
}

export async function DeleteTask(id) {
    try{
         const resp = await fetch(`http://localhost:3001/all/${id}`,{
            method:"DELETE"
         })

    }catch(error){
        console.log(error)
    }
}

export async function CompleteTask(id,value) {
    try{
        const resp = await fetch(`http://localhost:3001/all/${id}`,{
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({completed:value})
        })
        return await resp.json()
    }catch(e){
        console.log(e)
    }
}

export async function DeleteAll() {
    try{
         const resp = await fetch(`http://localhost:3001/all`)
         const tasks = await resp.json()

         const comp = tasks.filter(t => t.completed)
         for (const i of comp) {
           await fetch(`http://localhost:3001/all/${i.id}`,{
                method:"DELETE"
           })
         }
    }catch(error){
        console.log(error)
    }
}
