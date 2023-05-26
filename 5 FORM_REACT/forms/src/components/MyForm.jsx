import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - Controlled input
    // 3 - Gerenciamento de dados

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("")

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, bio, role);
        // 7 - limpar formularios
        setName("")
        setEmail("")
        setBio("")
    }


  return (
    <div>
        {/*5- Envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">nome</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={handleName} 
                value={name}
                />
            </div>
            {/* Label envolvendo o input */}
            <label>
                <span>Email</span>
                {/* Simplificação de manipulação de state */}
                <input 
                type="email" 
                name="email" 
                placeholder="Digite o seu email" 
                onChange={(e) =>setEmail(e.target.value)}
                value={email}
                />
            </label>
            {/* 8 - textarea */}
            <label >
                <span>Bio:</span>
                <textarea 
                name="bio" 
                placeholder='Descrição do usuário' 
                onChange={(e) =>setBio(e.target.value)} 
                value={bio}></textarea>
            </label>

            {/* 9 - select */}
            <label >
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MyForm