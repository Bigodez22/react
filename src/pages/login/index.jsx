import './index.scss'


export default function Login(){
    
    function alterarTipo(e){
        let alterar = e.target.cheked
        alert('você mudou para: '+' '+alterar)
    }

    function nome(e) {
        let alterar = e.target.value;
        alert('você alterou uma letra no nome para: '+' '+alterar)
    }
    
    function senha(e) {
        let alterar = e.target.value;
        alert('você alterou uma letra no nome para: '+' '+alterar)
    }

    function click(){
        alert('cadrastrado com sucesso')
        alert('agora agurde para receber mensagem da sua vaga')
    }
    
    function mouse(){
        alert('Mouse esta sendo passado aqui')
    }
    
    return(
        <div className='login'>
            <p>Escreva Seu Nome:</p>
            <input type="text" placeholder='Nome Completo... 'onChange={nome}/>
            <p>Digite Uma Senha: </p>
            <input type="password" placeholder='Sua senha...'onChange={senha} />
            <p>Selecione o Curso Interesado: </p>

           <select>
            <option value='web'>Software</option>
            <option value='web'>Hadware</option>
            <option value='web'>ADM (Administração)</option>
            <option value='web'>CV (Comunicação Visual)</option>
           </select>

           <p>Escolha Seu Turno: </p>

           <div className='opções'>
            
            <label>
            <input type="radio" name='tipo' value='Manhã' onChange={alterarTipo} /> Manhã
            </label>

            <label>
                <input type="radio" name="tipo" value='Tarde' onChange={alterarTipo}/> Tarde
            </label>

            <label><input type="radio" name="tipo" value='Noite' onChange={alterarTipo}/> Noite
            </label>
           </div>
        
        <div className='Passe' onMouseMove={mouse}>
            <h3>Passe com o mouse</h3>
        </div>
        
        <button className='CADASTRAR' onClick={click}>Cadastrar</button>
        


        </div>
    )
}