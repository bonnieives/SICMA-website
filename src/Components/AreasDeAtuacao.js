import React from 'react';
import './AreasDeAtuacao.css';
import AreasDeAtuacaoCard from './AreasDeAtuacaoCard';
import SessionTitle from './SessionTitle';

function AreasDeAtuacao() {
    return (
        <div className='areas-div'>
            <SessionTitle title='Áreas de Atuação'/>
            <div className='areas-de-atuacao-container'>
                <AreasDeAtuacaoCard
                title='Infraestrutura'
                text='Licenças ambientais garantem que obras de infraestrutura como rodovias e usinas respeitem normas ambientais, mitigando impactos ecológicos. Inclui Licenças Prévia, de Instalação, Operação, autorizações especiais e de supressão vegetal.'
                />
                <AreasDeAtuacaoCard
                title='Construção Civil'
                text='Construção civil requer PGRCC, licenças ambientais e alvará de funcionamento para gestão de resíduos, conformidade ambiental e legalidade das obras. Inclui Licenças Prévia, de Instalação, Operação e supressão vegetal.'
                />
                <AreasDeAtuacaoCard
                title='Indústria'
                text='Indústrias precisam de licenças ambientais, registro no CTF IBAMA, RAPP e gestão de resíduos para operar legalmente, minimizando impactos ambientais. Inclui PGRS, DOF, Licenças de Operação e Regularização.'
                />
                <AreasDeAtuacaoCard
                title='Saúde'
                text='Estabelecimentos de saúde necessitam de PGRSS, licenças sanitárias (COVISA, SUVISA) e Licença de Operação para conformidade ambiental e sanitária, garantindo manejo seguro de resíduos e operação legal.'
                />
                <AreasDeAtuacaoCard
                title='Energia'
                text='Empresas de energia precisam de licenças ambientais (LP, LI, LO), registro no CTF IBAMA e RAPP para operar dentro das normas, minimizando impactos ambientais de usinas.'
                />
                <AreasDeAtuacaoCard
                title='Gás - Exploração e Produção'
                text='A exploração de gás natural exige licenças (LP, LI), renovação constante e conformidade com condicionantes ambientais para minimizar impactos, garantindo operações seguras e sustentáveis.'
                />
                <AreasDeAtuacaoCard
                title='Óleo - Exploração e Refino'
                text='A exploração e refino de petróleo exigem licenças ambientais, registro no CTF IBAMA e RAPP, além de rigorosa gestão de resíduos para conformidade legal e minimização de impactos ambientais.'
                />
                <AreasDeAtuacaoCard
                title='Regularização Ambiental'
                text='Regularização ambiental, como CAR e supressão vegetal, garante que propriedades e atividades estejam em conformidade com as normas de uso do solo e preservação ambiental.'
                />
                <AreasDeAtuacaoCard
                title='Gestão de Resíduos'
                text='Gestão de resíduos (PGRS, PGRSS, PGRCC) assegura descarte adequado e rastreabilidade, prevenindo poluição e garantindo conformidade legal e sustentabilidade das operações.'
                />
                <AreasDeAtuacaoCard
                title='Regulamentação e Funcionamento de Empresas'
                text='Alvará de funcionamento e licença sanitária (COVISA, SUVISA) são obrigatórios para a legalização e segurança das operações empresariais, assegurando conformidade com normas de saúde e segurança.'
                />
                <AreasDeAtuacaoCard
                title='Treinamento e Capacitação'
                text='Cursos e treinamentos oferecem conhecimento em compliance ambiental, segurança no trabalho e gestão de resíduos, garantindo operações legais, eficientes e sustentáveis.'
                />
                <AreasDeAtuacaoCard
                title='Assessoria e Consultoria'
                text='Assessoria e consultoria ambiental ajudam empresas a cumprir normas regulatórias, acompanhando condicionantes de licenças e otimizando processos para minimizar impactos e evitar penalidades.'
                />
            </div>
        </div>
    );
}

export default AreasDeAtuacao; 
