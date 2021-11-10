import '../home/styles.css';
import './admissao.css';
import logo_branca from '../../assets/logo-branca.png'; 
import { Link } from 'react-router-dom';
import criançasadmissão from '../../assets/criancas-admissao.png';
import imgtitulo from '../../assets/div-titulo.png';
import imgtitulo2 from '../../assets/div-titulo2.png';

const adimissão = () => {
    return (
        <div id='admissão' style={{width: "100vw", maxWidth: "100vw"}}>
            <header>
                
                <Link to="/"><img class="topicos" id="logogerminare" src={logo_branca} alt="logo germinare"/></Link>

                <ul id="listatopicos">
                    
                    <Link to="/admissão">
                        <li id='adm' class="topicos">Admissão</li>
                    </Link>
                    <Link>
                        <li class="topicos">Academias</li>
                    </Link>
                    <Link>
                        <li class="topicos">Nossa Cultura</li>
                    </Link>
                    <Link>
                        <li class="topicos">Novidades</li>
                    </Link>
                    <Link to='' id="portal_aluno"style={{width: '200px'}}>
                        <li>Portal do aluno</li>
                    </Link>
                </ul>

            </header>



        <div id='miniHeader'>
            <img id="tituloimg" src={imgtitulo}/>
            <h1 id="titulo">Processo de Admissão</h1>
            <img id="tituloimg2" src={imgtitulo2}/>
        </div>
        <div id="admissaoDiv">
        <p>A lista de convocados para a segunda etapa do 
          <spam class="toBold">Processo de Admissão está disponível!</spam><a href='http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Lista-de-Convocados-2%C2%B0-Etapa-2021-2022.pdf'><button className='btn-Admissao'>Veja os resultados</button></a></p>
          <img className="criancasAdmissao" src={criançasadmissão}/>
        </div>
        <div className='textinho'>
            <img id='img1' src={imgtitulo} alt="linha azul" />
            <h2>Para mais informações acesse o <a href ='http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Manual-Geral-Site.pdf' target='_blank'>Manual do Candidato 2021/2022</a></h2>
            <img id='img2' src={imgtitulo2} alt="linha azul 2"/>
        </div>    
        </div>
    
    );
};

export default adimissão;