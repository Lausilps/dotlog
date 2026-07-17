const DS=window.CoreDotDesignSystem_317a5b;
const {Button,Badge,Card,WindowFrame,DialogBox,Toast,Checkbox}=DS;
const L='../../assets/landing/';
const Marker=({children})=><p className="cd-marker">{children}</p>;
const H2=({children,style})=><h2 style={{fontFamily:'var(--font-pixel)',fontSize:'var(--text-h2)',lineHeight:1.6,margin:'0 0 22px',textWrap:'balance',color:'var(--branco-quente)',...style}}>{children}</h2>;
const Dots=({s=12})=><React.Fragment>
  <span style={{width:s,height:s,borderRadius:'50%',background:'#ff5f56'}}></span>
  <span style={{width:s,height:s,borderRadius:'50%',background:'#ffbd2e'}}></span>
  <span style={{width:s,height:s,borderRadius:'50%',background:'#27c93f'}}></span>
</React.Fragment>;
function Shot({title,ratio,src,alt}){
  return <div style={{border:'1px solid var(--borda)',background:'var(--preto-0)'}}>
    <div style={{display:'flex',alignItems:'center',gap:8,padding:'10px 14px',borderBottom:'1px solid var(--borda)'}}><Dots/><span style={{fontFamily:'var(--font-terminal)',fontSize:17,color:'var(--cinza)',marginLeft:8}}>{title}</span></div>
    <div style={{background:'var(--preto-2)',aspectRatio:ratio}}>{src&&<img src={src} alt={alt||title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>}</div>
  </div>;
}
function Nav(){
  return <nav style={{position:'sticky',top:0,zIndex:50,background:'rgba(13,13,13,.94)',backdropFilter:'blur(6px)',borderBottom:'1px solid var(--borda)'}}>
    <div style={{maxWidth:1180,margin:'0 auto',padding:'14px 24px',display:'flex',alignItems:'center',gap:24,justifyContent:'space-between'}}>
      <a href="#inicio" aria-label="CoreDot — início" style={{display:'flex',alignItems:'center'}}><img src={L+'logo-nav.png'} alt="CoreDot" className="cd-sprite" style={{height:36}}/></a>
      <div style={{display:'flex',alignItems:'center',gap:26,fontFamily:'var(--font-terminal)',fontSize:20}}>
        {[['#inicio','Início'],['#sobre','Sobre'],['#servicos','Serviços'],['#portfolio','Portfólio'],['#contato','Contato']].map(([h,l])=><a key={h} href={h} style={{color:'var(--branco-quente)'}}>{l}</a>)}
        <a href="#contato" className="cd-btn cd-btn--primary" style={{fontSize:10,padding:'12px 16px'}}>Iniciar conversa</a>
      </div>
    </div>
  </nav>;
}
function Hero(){
  const BOOT=['> inicializando CoreDot...','> ideias carregadas','> criatividade ativa','> pronto para construir'];
  const [typed,setTyped]=React.useState(0);
  React.useEffect(()=>{const t=setInterval(()=>setTyped(n=>{if(n>=BOOT.length){clearInterval(t);return n;}return n+1;}),700);return()=>clearInterval(t);},[]);
  return <header id="inicio" style={{position:'relative',overflow:'hidden',borderBottom:'1px solid var(--borda)'}}>
    <div style={{position:'absolute',inset:0,background:'var(--glow-radial)',animation:'glowpulse 6s ease-in-out infinite',pointerEvents:'none'}}></div>
    <div aria-hidden="true" style={{position:'absolute',top:80,left:'6%',color:'var(--amarelo)',fontFamily:'var(--font-terminal)',fontSize:22,opacity:.5}}>+</div>
    <div aria-hidden="true" style={{position:'absolute',top:220,left:'12%',width:6,height:6,background:'var(--amarelo)',opacity:.35}}></div>
    <div aria-hidden="true" style={{position:'absolute',bottom:120,left:'8%',color:'var(--amarelo-claro)',fontFamily:'var(--font-terminal)',fontSize:16,opacity:.4}}>+</div>
    <div aria-hidden="true" style={{position:'absolute',top:120,right:'8%',width:8,height:8,background:'var(--amarelo)',opacity:.25}}></div>
    <div style={{position:'relative',maxWidth:1180,margin:'0 auto',padding:'84px 24px 96px',display:'grid',gridTemplateColumns:'minmax(0,1.05fr) minmax(0,.95fr)',gap:56,alignItems:'center'}}>
      <div>
        <p style={{fontFamily:'var(--font-terminal)',fontSize:22,color:'var(--amarelo)',margin:'0 0 18px'}}>&gt; Bem-vindo à CoreDot._</p>
        <h1 style={{fontFamily:'var(--font-pixel)',fontSize:'var(--text-hero)',lineHeight:1.5,margin:'0 0 24px',color:'var(--branco-quente)',textWrap:'balance'}}>Do núcleo da ideia ao <span style={{color:'var(--amarelo)'}}>produto final</span>.</h1>
        <p style={{fontSize:18,lineHeight:1.7,color:'var(--cinza)',margin:'0 0 36px',maxWidth:'52ch',textWrap:'pretty'}}>Criamos soluções digitais personalizadas, construídas para resolver necessidades reais, com identidade e organização.</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:18}}>
          <a href="#portfolio" className="cd-btn cd-btn--primary cd-btn--md">Ver projetos</a>
          <a href="#contato" className="cd-btn cd-btn--secondary cd-btn--md">Falar com a CoreDot</a>
        </div>
      </div>
      <WindowFrame title="coredot — boot.sh">
        <div style={{minHeight:150}}>
          {BOOT.slice(0,typed).map((l,i)=><div key={i} style={{color:'var(--amarelo-claro)'}}>{l}</div>)}
          {typed>=BOOT.length&&<div style={{color:'var(--verde)'}}>&gt; _<span className="cd-cursor" style={{marginLeft:2}}></span></div>}
        </div>
      </WindowFrame>
    </div>
  </header>;
}
function Sobre(){
  return <section id="sobre" style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-0)'}}>
    <div className="cd-2col" style={{maxWidth:1180,margin:'0 auto',padding:'90px 24px',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:56,alignItems:'center'}}>
      <div>
        <Marker>// 01 — SOBRE</Marker>
        <H2>Tecnologia com identidade.</H2>
        <p style={{fontSize:17,lineHeight:1.75,color:'var(--cinza)',margin:'0 0 16px',textWrap:'pretty'}}>A CoreDot nasce para criar soluções digitais personalizadas — sem encaixar todos os clientes no mesmo molde.</p>
        <p style={{fontSize:17,lineHeight:1.75,color:'var(--cinza)',margin:0,textWrap:'pretty'}}>Trabalhamos com comunicação próxima, evolução por etapas e cuidado com a experiência e a identidade visual de cada projeto.</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:20}}>
        <img src={L+'dot-banner-oi.png'} alt="Dot se apresentando: Oi! Eu sou o Dot." className="cd-sprite" style={{width:'min(420px,100%)',border:'1px solid var(--borda)',alignSelf:'flex-start'}}/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12}}>
          {['atenção ao contexto','orientado à necessidade','comunicação próxima','evolução por etapas'].map(t=>
            <div key={t} style={{border:'1px solid var(--borda)',background:'var(--preto-1)',padding:'16px 18px',fontFamily:'var(--font-terminal)',fontSize:19,color:'var(--branco-quente)'}}><span style={{color:'var(--verde)'}}>[✓]</span> {t}</div>)}
        </div>
      </div>
    </div>
  </section>;
}
function Portfolio({onOpenCase}){
  return <section id="portfolio" style={{borderBottom:'1px solid var(--borda)',background:'var(--preto-1)'}}>
    <div style={{maxWidth:1180,margin:'0 auto',padding:'90px 24px'}}>
      <Marker>// 02 — PORTFÓLIO</Marker>
      <H2 style={{marginBottom:46}}>Projetos que já saíram do núcleo.</H2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,620px))',gap:22,alignItems:'start'}}>
        <article style={{border:'1px solid var(--borda)',background:'var(--preto-1)',boxShadow:'var(--shadow-card)'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,padding:'10px 14px',borderBottom:'1px solid var(--borda)'}}><Dots/><span style={{fontFamily:'var(--font-terminal)',fontSize:17,color:'var(--cinza)',marginLeft:8}}>formiga-ludica — home</span></div>
          <div style={{background:'var(--preto-2)',aspectRatio:'16/10'}}><img src={L+'screenshot-catalogo.webp'} alt="Catálogo Formiga Lúdica" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
          <div style={{padding:24}}>
            <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:14}}><Badge>Sistema web</Badge><Badge>Catálogo</Badge><Badge>IA</Badge></div>
            <h3 style={{fontFamily:'var(--font-pixel)',fontSize:14,lineHeight:1.7,margin:'0 0 14px',color:'var(--branco-quente)'}}>Formiga Lúdica</h3>
            <p style={{fontSize:15,lineHeight:1.7,color:'var(--cinza)',margin:'0 0 18px',textWrap:'pretty'}}>Plataforma inteligente para uma locadora de jogos de tabuleiro, criada para organizar um acervo com centenas de títulos e ajudar cada grupo a encontrar o jogo certo.</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:22}}>{['PHP','MySQL','JavaScript','Google Gemini'].map(t=><Badge key={t} color="cinza">{t}</Badge>)}</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:14}}>
              <button onClick={onOpenCase} className="cd-btn cd-btn--primary" style={{fontSize:10,padding:'13px 16px'}}>Ver projeto</button>
              <a href="https://formigaludica.up.railway.app/" target="_blank" className="cd-btn cd-btn--secondary" style={{fontSize:10,padding:'11px 16px'}}>Acessar online</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>;
}
function CaseModal({open,onClose}){
  if(!open)return null;
  return <div style={{position:'fixed',inset:0,zIndex:300,display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
    <div onClick={onClose} style={{position:'absolute',inset:0,background:'rgba(13,13,13,.88)'}}></div>
    <div role="dialog" aria-label="Case Formiga Lúdica" style={{position:'relative',width:'min(1040px,100%)',maxHeight:'92vh',display:'flex',flexDirection:'column',border:'1px solid var(--amarelo)',background:'var(--preto-1)',boxShadow:'var(--shadow-modal)'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'12px 16px',borderBottom:'1px solid var(--borda)',background:'var(--preto-0)',flex:'none'}}>
        <Dots/><span style={{fontFamily:'var(--font-terminal)',fontSize:18,color:'var(--cinza)',marginLeft:8}}>case — formiga-ludica</span>
        <a onClick={onClose} style={{cursor:'pointer',marginLeft:'auto',fontFamily:'var(--font-terminal)',fontSize:19,color:'var(--cinza)',border:'1px solid var(--borda)',padding:'2px 12px'}}>[x] fechar</a>
      </div>
      <div style={{overflow:'auto',padding:'36px clamp(20px,4vw,44px) 44px'}}>
        <div style={{display:'flex',alignItems:'center',gap:22,flexWrap:'wrap',marginBottom:18}}>
          <img src={L+'logo-formiga-ludica.png'} alt="Logo Formiga Lúdica" style={{width:110,flex:'none'}}/>
          <div><Marker>// CASE EM DESTAQUE</Marker><H2 style={{fontSize:'clamp(16px,2.2vw,24px)',margin:0}}>Formiga Lúdica</H2></div>
        </div>
        <p style={{fontSize:18,lineHeight:1.7,color:'var(--branco-quente)',margin:'0 0 36px',maxWidth:'64ch',textWrap:'pretty'}}>“Mais do que um catálogo, o projeto transformou um grande acervo em uma experiência de descoberta, escolha e recomendação.”</p>
        <div className="cd-case" style={{display:'grid',gridTemplateColumns:'minmax(0,1.15fr) minmax(0,.85fr)',gap:32,alignItems:'start'}}>
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            <Shot title="catálogo (desktop)" ratio="16/9" src={L+'screenshot-catalogo.webp'}/>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
              <Shot title="formiguinha-ia" ratio="4/3.4" src={L+'screenshot-formiguinha-ia.webp'}/>
              <Shot title="painel de gestão" ratio="4/3.4" src={L+'screenshot-painel.webp'}/>
            </div>
            <DialogBox avatar={L+'dot-laptop.png'} cursor={false}>projeto entregue, em uso e pronto para evoluir.</DialogBox>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            <div style={{border:'1px solid var(--borda)',background:'var(--preto-0)',padding:20}}>
              <h3 style={{fontFamily:'var(--font-pixel)',fontSize:11,color:'var(--amarelo)',margin:'0 0 12px',lineHeight:1.7}}>O desafio</h3>
              <p style={{fontSize:15,lineHeight:1.7,color:'var(--cinza)',margin:0,textWrap:'pretty'}}>Uma locadora de jogos de tabuleiro com centenas de títulos precisava organizar o acervo, ajudar cada grupo a descobrir o jogo certo e agilizar o atendimento.</p>
            </div>
            <div style={{border:'1px solid var(--borda)',background:'var(--preto-0)',padding:20}}>
              <h3 style={{fontFamily:'var(--font-pixel)',fontSize:11,color:'var(--amarelo)',margin:'0 0 12px',lineHeight:1.7}}>O que foi criado</h3>
              <div style={{display:'flex',flexDirection:'column',gap:10,fontFamily:'var(--font-terminal)',fontSize:19,color:'var(--branco-quente)'}}>
                {['Catálogo completo com busca, filtros e detalhes de cada jogo','Formiguinha IA: assistente que recomenda jogos conversando com o cliente','Carrinho e pedido finalizado direto pelo WhatsApp','Painel de gestão do acervo com relatórios'].map(t=><div key={t}><span style={{color:'var(--verde)'}}>[✓]</span> {t}</div>)}
              </div>
            </div>
            <div style={{border:'1px solid var(--borda)',background:'var(--preto-0)',padding:20}}>
              <h3 style={{fontFamily:'var(--font-pixel)',fontSize:11,color:'var(--amarelo)',margin:'0 0 12px',lineHeight:1.7}}>O resultado</h3>
              <p style={{fontSize:15,lineHeight:1.7,color:'var(--cinza)',margin:'0 0 14px',textWrap:'pretty'}}>Clientes encontram o jogo ideal sozinhos, o pedido chega pronto no WhatsApp e a gestão do acervo deixou de ser manual.</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>{['descoberta assistida por IA','pedido via WhatsApp','gestão sem planilhas','no ar e em uso'].map(t=><Badge key={t} color="creme" style={{color:'var(--amarelo-claro)'}}>{t}</Badge>)}</div>
            </div>
            <Toast>Tudo com a identidade da Formiga Lúdica — um sistema real, em uso, preparado para crescer.</Toast>
            <a href="https://formigaludica.up.railway.app/" target="_blank" className="cd-btn cd-btn--primary" style={{fontSize:10,padding:'13px 16px',alignSelf:'flex-start'}}>Acessar o projeto</a>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
Object.assign(window,{Nav,Hero,Sobre,Portfolio,CaseModal,Marker,H2,Dots,Shot,LANDING_ASSETS:L});
