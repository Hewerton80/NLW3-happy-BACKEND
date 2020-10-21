import {createConnection} from 'typeorm';

createConnection()
    .then(()=>
        console.log('banco de dados conectado com sucesso!')
    )
    .catch(err=>{
        console.log('falha ao se conectar ao banco de dados\n')
        console.log(err)
    })
