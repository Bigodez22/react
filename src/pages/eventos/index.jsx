import './index.scss';

export default function saudações(){
    
    function alterar (){
        alert('Alterou o valor do input');
    }
    
    function mouse (){
        alert('você se aproximou do texto')
    }
    
    function click(e){
    let novoVAlor = e.target.value;
       alert ('esta alterando o valor do input para: '+ '  ' +novoVAlor)
    }

    return(
        <div className='sauda'>
        
        <input onChange={click} type="text" placeholder='Pesquise aqui...'/>
        
        <p className='texto1'>Você o melhor de todos</p>
        
        
        
        </div>
    )
}