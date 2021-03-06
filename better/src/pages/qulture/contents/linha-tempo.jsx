import '../styles/linha-tempo.css'

import tempo1 from '../../../assets/tempo1.png'
import tempo2 from '../../../assets/tempo2.png'
import tempo3 from '../../../assets/tempo3.png'
import tempo4 from '../../../assets/tempo4.png'



const Linha_Tempo = () => {
    return (
        <div className="container-linha">
            <div className="titulo-linhat">
                <h1>LINHA DO TEMPO</h1>
            </div>
            <div className="container-desenho">
                <div className="linha-cima">
                    <div className="ano-topic">
                        <p className="ano">2010</p>
                        <p className="topic">Escola de Empreendedorismo</p>
                    </div>
                    <div className="ano-topic">
                        <p className="ano">2016</p>
                        <p id="meio-linha" className="topic">Programa de Estágios</p>
                    </div>
                    <div className="ano-topic">
                        <p className="ano">2019</p>
                        <p className="topic">Estruturação dos Pilares de Negócio</p>
                    </div>
                </div>
                <picture>
                    <source media="()" srcset="" />
                    <source media="(max-width:480px)" srcset={tempo4} />
                    <source media="(max-width:575px)" srcset={tempo3} />
                    <source media="(max-width:1024px)" srcset={tempo2} />
                    <img src={tempo1}  />
                </picture>
                <div className="ajuste-tempo"></div>
                <div className="linha-baixo">
                    <div className="ano-topic">
                        <p className="ano">2014/2015</p>
                        <p className="topic">Escola Técnica em Admistração de Empresas</p>
                    </div>
                    <div className="ano-topic">
                        <p className="ano">2017</p>
                        <p className="topic">Aulas de Tutoria com profissionais da empresa</p>
                    </div>
                    <div className="ano-topic">
                        <p className="ano">2021</p>
                        <p className="topic">Academias de Negócio</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Linha_Tempo;