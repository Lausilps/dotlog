const {Marker,H2,Dots,LANDING_ASSETS:L2}=window;
function Servicos(){
  const items=[
    ['</>','Sites e landing pages','Interfaces modernas, responsivas e alinhadas à identidade da marca.'],
    ['{ sys }','Sistemas e painéis de gestão','Organização de rotinas, cadastros, processos, controle e relatórios.'],
    ['[ IA ]','Inteligência artificial','Assistentes que conhecem seu negócio, busca inteligente e automações com IA.'],
    ['<=>','Integrações e APIs','Conexão com o que você já usa: WhatsApp, pagamentos, planilhas e serviços externos.'],
    ['[ mvp ]','MVP','Uma primeira versão enxuta e funcional para validar a ideia rápido, antes de investir no produto completo.'],
    ['v2.0 ++','Evolução e hospedagem','Projeto no ar com endereço próprio, manutenção, melhorias e preparação para crescer.'],
  ];
  return <section id="servicos" style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-0)'}}>
    <div style={{maxWidth:1180,margin:'0 auto',padding:'90px 24px'}}>
      <Marker>// 03 — O QUE FAZEMOS</Marker>
      <H2 style={{marginBottom:20}}>Soluções que saem do núcleo.</H2>
      <p style={{fontSize:17,lineHeight:1.75,color:'var(--cinza)',margin:'0 0 46px',maxWidth:'60ch',textWrap:'pretty'}}>A tecnologia se adapta ao projeto — não o contrário.</p>
      <div className="cd-grid3" style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        {items.map(([ic,t,d])=><div key={t} className="cd-card cd-card--hover cd-card--accent">
          <div style={{fontFamily:'var(--font-terminal)',fontSize:26,color:'var(--amarelo)',marginBottom:14}}>{ic}</div>
          <h3 style={{fontFamily:'var(--font-pixel)',fontSize:12,lineHeight:1.7,margin:'0 0 12px',color:'var(--branco-quente)'}}>{t}</h3>
          <p style={{fontSize:15,lineHeight:1.7,color:'var(--cinza)',margin:0,textWrap:'pretty'}}>{d}</p>
        </div>)}
      </div>
    </div>
  </section>;
}
function Processo(){
  const etapas=[['01','Entendimento','Conhecemos o problema, a rotina e o objetivo.'],['02','Organização','Estruturamos funcionalidades, prioridades e fluxo.'],['03','Identidade','Definimos como a solução deve parecer e se comunicar.'],['04','Desenvolvimento','Transformamos o planejamento em produto funcional.'],['05','Testes','Validamos uso, comportamento e pontos de melhoria.'],['06','Entrega e evolução','Publicamos, documentamos e preparamos os próximos passos.']];
  return <section id="processo" style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-1)',position:'relative',overflow:'hidden'}}>
    <div style={{maxWidth:1180,margin:'0 auto',padding:'90px 24px'}}>
      <Marker>// 04 — COMO TRABALHAMOS</Marker>
      <H2 style={{marginBottom:46}}>Um fluxo, seis etapas.</H2>
      <div className="cd-grid3" style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        {etapas.map(([n,t,d])=><div key={n} style={{border:'1px solid var(--borda)',background:'var(--preto-0)',padding:24,display:'flex',gap:16,alignItems:'flex-start'}}>
          <span style={{fontFamily:'var(--font-pixel)',fontSize:14,color:'var(--preto-0)',background:'var(--amarelo)',padding:'10px 12px',flex:'none'}}>{n}</span>
          <div><h3 style={{fontFamily:'var(--font-pixel)',fontSize:11,lineHeight:1.7,margin:'0 0 8px',color:'var(--branco-quente)'}}>{t}</h3><p style={{fontSize:15,lineHeight:1.65,color:'var(--cinza)',margin:0,textWrap:'pretty'}}>{d}</p></div>
        </div>)}
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:44}}>
        <img src={L2+'dot-etapas.png'} alt="Dot acompanhando as etapas: acenando, analisando, digitando e apontando" className="cd-sprite" style={{maxWidth:'min(560px,100%)',border:'1px solid var(--borda)'}}/>
      </div>
    </div>
  </section>;
}
function Diferenciais(){
  return <section style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-0)'}}>
    <div style={{maxWidth:1180,margin:'0 auto',padding:'90px 24px'}}>
      <Marker>// 05 — DIFERENCIAIS</Marker>
      <H2 style={{marginBottom:40}}>Por que CoreDot?</H2>
      <div className="cd-grid4" style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:14}}>
        {['Soluções sob medida','Identidade visual integrada','Desenvolvimento próximo do cliente','Projeto preparado para evoluir'].map(t=>
          <div key={t} style={{border:'1px solid var(--borda)',background:'var(--preto-1)',padding:'18px 20px',fontFamily:'var(--font-terminal)',fontSize:20,color:'var(--branco-quente)'}}><span style={{color:'var(--amarelo)'}}>&gt;</span> {t}</div>)}
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:36}}>
        <img src={L2+'dot-solucao-bar.png'} alt="Dot ao lado de uma barra de diálogo: Dot encontrou uma solução!" className="cd-sprite" style={{maxWidth:'min(480px,100%)'}}/>
      </div>
    </div>
  </section>;
}
function Filosofia(){
  return <section style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-1)',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 50% 60% at 30% 50%,rgba(255,212,0,.06),transparent 70%)',pointerEvents:'none'}}></div>
    <div className="cd-2col" style={{position:'relative',maxWidth:1180,margin:'0 auto',padding:'90px 24px',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:56,alignItems:'center'}}>
      <div>
        <Marker>// 06 — FILOSOFIA</Marker>
        <H2>Código é meio. Solução é o objetivo.</H2>
        <p style={{fontSize:17,lineHeight:1.75,color:'var(--cinza)',margin:0,textWrap:'pretty'}}>A tecnologia escolhida depende da necessidade do projeto. O foco da CoreDot é criar algo útil, compreensível, sustentável e preparado para continuar evoluindo.</p>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',minHeight:280}}>
        <img src={L2+'notas.png'} alt="Anotações pixel art de planejamento" className="cd-sprite" style={{width:'min(46%,240px)',transform:'rotate(-4deg)'}}/>
        <img src={L2+'checklist.png'} alt="Checklist pixel art em prancheta" className="cd-sprite" style={{width:'min(46%,250px)',transform:'rotate(3deg)',marginLeft:-30}}/>
        <img src={L2+'dot-code.png'} alt="Dot programando — código na mão" className="cd-sprite" style={{position:'absolute',bottom:-24,left:'50%',transform:'translateX(-50%)',width:150,filter:'drop-shadow(0 0 14px rgba(255,212,0,.3))'}}/>
      </div>
    </div>
  </section>;
}
function ParaQuem(){
  return <section style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-0)'}}>
    <div style={{maxWidth:1180,margin:'0 auto',padding:'90px 24px'}}>
      <Marker>// 07 — PARA QUEM CRIAMOS</Marker>
      <H2 style={{marginBottom:40}}>Ideias de todos os tamanhos.</H2>
      <div style={{display:'flex',flexWrap:'wrap',gap:12}}>
        {['Pequenos negócios','Profissionais autônomos','Projetos autorais','Empresas que precisam organizar processos','Negócios que querem presença digital própria','Quem quer transformar uma ideia em sistema'].map(t=><span key={t} className="cd-chip">+ {t}</span>)}
      </div>
    </div>
  </section>;
}
function Faq(){
  const FAQS=[
    ['A CoreDot trabalha apenas com sites?','Não. A empresa desenvolve sites, landing pages, sistemas web, painéis administrativos, integrações e funcionalidades com inteligência artificial.'],
    ['O projeto é feito a partir de um modelo pronto?','A estrutura pode aproveitar boas práticas e componentes, mas o visual, os fluxos e as funcionalidades são adaptados às necessidades de cada projeto.'],
    ['É possível continuar evoluindo o sistema depois da entrega?','Sim. Os projetos podem receber manutenção, melhorias e novas etapas conforme a necessidade.'],
    ['A CoreDot trabalha com projetos pequenos?','Sim. O escopo é avaliado de acordo com o problema e o objetivo, não apenas pelo tamanho da empresa.'],
    ['Como começa um projeto?','Com uma conversa inicial para entender contexto, prioridades, funcionalidades e expectativas.'],
    ['O cliente acompanha o desenvolvimento?','Sim. O trabalho acontece com alinhamentos e validações durante as etapas.'],
  ];
  const [open,setOpen]=React.useState(-1);
  return <section style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-1)'}}>
    <div style={{maxWidth:860,margin:'0 auto',padding:'90px 24px'}}>
      <Marker>// 08 — FAQ</Marker>
      <H2 style={{marginBottom:40}}>F.A.Q</H2>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {FAQS.map(([q,a],i)=><div key={i} style={{border:'1px solid var(--borda)',background:'var(--preto-0)'}}>
          <button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,background:'none',border:'none',color:'var(--branco-quente)',fontFamily:'var(--font-body)',fontSize:17,fontWeight:500,textAlign:'left',padding:'18px 22px',cursor:'pointer'}}>
            <span>{q}</span><span style={{fontFamily:'var(--font-terminal)',fontSize:24,color:'var(--amarelo)',flex:'none'}}>{open===i?'[-]':'[+]'}</span>
          </button>
          {open===i&&<p style={{margin:0,padding:'0 22px 20px',fontSize:15,lineHeight:1.7,color:'var(--cinza)',textWrap:'pretty'}}>{a}</p>}
        </div>)}
      </div>
    </div>
  </section>;
}
function Contato(){
  const wa='https://wa.me/5537999139354?text=Olá!%20Quero%20iniciar%20um%20projeto%20com%20a%20CoreDot';
  return <section id="contato" style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-0)',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 55% 60% at 50% 45%,rgba(255,212,0,.1),transparent 70%)',animation:'glowpulse 6s ease-in-out infinite',pointerEvents:'none'}}></div>
    <div aria-hidden="true" style={{position:'absolute',top:70,left:'14%',color:'var(--amarelo)',fontFamily:'var(--font-terminal)',fontSize:20,opacity:.45}}>+</div>
    <div aria-hidden="true" style={{position:'absolute',bottom:90,right:'12%',width:7,height:7,background:'var(--amarelo)',opacity:.3}}></div>
    <div aria-hidden="true" style={{position:'absolute',top:140,right:'20%',color:'var(--amarelo-claro)',fontFamily:'var(--font-terminal)',fontSize:15,opacity:.4}}>+</div>
    <div style={{position:'relative',maxWidth:820,margin:'0 auto',padding:'110px 24px',textAlign:'center'}}>
      <img src={L2+'dot-sucesso.png'} alt="Dot comemorando com confetes" className="cd-sprite" style={{width:150,marginBottom:22,animation:'floaty 4s ease-in-out infinite'}}/>
      <h2 style={{fontFamily:'var(--font-pixel)',fontSize:'clamp(18px,2.8vw,28px)',lineHeight:1.7,margin:'0 0 22px',color:'var(--branco-quente)',textWrap:'balance'}}>Tem uma ideia esperando para sair do núcleo?</h2>
      <p style={{fontSize:18,lineHeight:1.7,color:'var(--cinza)',margin:'0 auto 38px',maxWidth:'52ch',textWrap:'pretty'}}>Conte o que você precisa construir. A CoreDot ajuda a organizar o caminho entre a ideia e o produto final.</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:18,justifyContent:'center',marginBottom:44}}>
        <a href={wa} target="_blank" className="cd-btn cd-btn--primary cd-btn--md">Falar sobre meu projeto</a>
        <a href="#portfolio" className="cd-btn cd-btn--secondary cd-btn--md">Conhecer o portfólio</a>
      </div>
      <div style={{maxWidth:420,margin:'0 auto',border:'1px solid var(--borda)',background:'var(--preto-1)',textAlign:'left'}}>
        <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',borderBottom:'1px solid var(--borda)'}}><Dots s={10}/><span style={{fontFamily:'var(--font-terminal)',fontSize:16,color:'var(--cinza)',marginLeft:6}}>deploy.log</span></div>
        <div style={{padding:'16px 18px',fontFamily:'var(--font-terminal)',fontSize:19,lineHeight:1.7}}>
          <div style={{color:'var(--amarelo-claro)'}}>&gt; nova ideia detectada...</div>
          <div style={{color:'var(--verde)'}}>&gt; 100% pronto para começar.<span className="cd-cursor" style={{marginLeft:4,width:9,height:15}}></span></div>
        </div>
      </div>
    </div>
  </section>;
}
function Footer(){
  const wa='https://wa.me/5537999139354?text=Olá!%20Quero%20iniciar%20um%20projeto%20com%20a%20CoreDot';
  return <footer style={{background:'var(--preto-0)'}}>
    <div style={{maxWidth:1180,margin:'0 auto',padding:'56px 24px 40px'}}>
      <div style={{display:'flex',flexWrap:'wrap',gap:40,justifyContent:'space-between',alignItems:'flex-start'}}>
        <div style={{display:'flex',flexDirection:'column',gap:14,maxWidth:320}}>
          <img src={L2+'logo-footer.png'} alt="CoreDot" className="cd-sprite" style={{width:200,alignSelf:'flex-start'}}/>
          <p style={{fontFamily:'var(--font-terminal)',fontSize:19,color:'var(--cinza)',margin:0}}>Do núcleo da ideia ao produto final.</p>
          <img src={L2+'dot-tchau.png'} alt="Dot acenando tchau" className="cd-sprite" style={{width:96}}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:10,fontFamily:'var(--font-terminal)',fontSize:19}}>
          <span style={{fontFamily:'var(--font-pixel)',fontSize:9,color:'var(--amarelo)',marginBottom:6}}>MAPA</span>
          {[['#inicio','Início'],['#sobre','Sobre'],['#servicos','Serviços'],['#portfolio','Portfólio'],['#contato','Contato']].map(([h,l])=><a key={h} href={h} style={{color:'var(--branco-quente)'}}>{l}</a>)}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:10,fontFamily:'var(--font-terminal)',fontSize:19}}>
          <span style={{fontFamily:'var(--font-pixel)',fontSize:9,color:'var(--amarelo)',marginBottom:6}}>CANAIS</span>
          <span style={{color:'var(--cinza)'}}>Instagram: <a href="https://www.instagram.com/lausilps/" target="_blank" style={{color:'var(--branco-quente)'}}>@lausilps · embaixadora CoreDot</a></span>
          <span style={{color:'var(--cinza)'}}>WhatsApp: <a href={wa} target="_blank" style={{color:'var(--branco-quente)'}}>(37) 9 9913-9354</a></span>
          <span style={{color:'var(--cinza)'}}>E-mail: <a href="mailto:coredotcontact@gmail.com" style={{color:'var(--branco-quente)'}}>coredotcontact@gmail.com</a></span>
        </div>
      </div>
      <div style={{borderTop:'1px solid var(--borda)',marginTop:44,paddingTop:22,display:'flex',flexWrap:'wrap',gap:12,justifyContent:'space-between',fontFamily:'var(--font-terminal)',fontSize:17,color:'var(--cinza)'}}>
        <span>© CoreDot. Todos os direitos reservados.</span>
        <span>&gt; compilado com personalidade_<span className="cd-cursor" style={{background:'var(--cinza)',width:8,height:13}}></span></span>
      </div>
    </div>
  </footer>;
}
function LandingPage(){
  const [caseOpen,setCaseOpen]=React.useState(false);
  React.useEffect(()=>{document.body.style.overflow=caseOpen?'hidden':'';},[caseOpen]);
  return <div>
    <Nav/><Hero/><Sobre/>
    <Portfolio onOpenCase={()=>setCaseOpen(true)}/>
    <CaseModal open={caseOpen} onClose={()=>setCaseOpen(false)}/>
    <Servicos/><Processo/><Diferenciais/><Filosofia/><ParaQuem/><Faq/><Contato/><Footer/>
  </div>;
}
Object.assign(window,{LandingPage,Servicos,Processo,Diferenciais,Filosofia,ParaQuem,Faq,Contato,Footer});
