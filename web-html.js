module.exports = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mr.Bliss MD | FROSTLINE \u2014 WhatsApp Pairing Portal</title>
<meta name="theme-color" content="#0a1220">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:linear-gradient(180deg,#0a1220 0%,#16283e 45%,#23405e 75%,#31527a 100%);color:#eaf4ff;min-height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;position:relative;-webkit-font-smoothing:antialiased}

/* ===== CINEMATIC SNOWSCAPE (parallax mountain ranges, drift) ===== */
.peaks{position:fixed;left:0;right:0;bottom:0;height:46vh;z-index:1;pointer-events:none}
.peaks svg{position:absolute;bottom:0;width:200%;height:100%;animation:drift 90s linear infinite}
.peaks svg.p2{animation-duration:140s;opacity:.55;bottom:8vh;transform:scale(1.15)}
.peaks svg.p3{animation-duration:220s;opacity:.3;bottom:18vh;transform:scale(1.3)}
@keyframes drift{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.aurora{position:fixed;top:0;left:0;right:0;height:42vh;z-index:0;pointer-events:none;background:radial-gradient(ellipse 60% 80% at 30% 20%,rgba(120,190,255,.14),transparent 70%),radial-gradient(ellipse 50% 70% at 70% 10%,rgba(160,140,255,.10),transparent 70%);animation:aur 26s ease-in-out infinite alternate;filter:blur(30px)}
@keyframes aur{from{transform:translateX(-4%)}to{transform:translateX(4%)}}
.mist{position:fixed;bottom:0;left:0;right:0;height:22vh;z-index:2;pointer-events:none;background:linear-gradient(0deg,rgba(220,240,255,.16),transparent);animation:mist 18s ease-in-out infinite alternate}
@keyframes mist{from{opacity:.6}to{opacity:1}}

canvas#snow{position:fixed;inset:0;z-index:3;pointer-events:none}
canvas#av{position:fixed;inset:0;z-index:6;pointer-events:none;display:none}
#whiteout{position:fixed;inset:0;z-index:7;pointer-events:none;opacity:0;background:radial-gradient(ellipse at 50% 120%,#ffffff 30%,rgba(255,255,255,.97) 55%,rgba(240,248,255,.9) 100%);transition:opacity .4s}
#whiteout.on{opacity:1;pointer-events:auto;cursor:pointer}
#code-float{position:fixed;inset:0;z-index:8;display:none;align-items:center;justify-content:center;flex-direction:column;gap:14px}

/* ===== BRANDING ===== */
.brand{position:relative;z-index:10;text-align:center;margin-bottom:22px;animation:rise 1s .1s both}
.brand h1{font-size:clamp(24px,6vw,34px);letter-spacing:2px;font-weight:800;color:#fff;text-shadow:0 0 24px rgba(160,220,255,.5),0 2px 14px rgba(0,0,0,.7)}
.brand h1 .b{color:#bfe3ff}
.brand .sub{color:#9db8d4;font-size:13px;letter-spacing:5px;text-transform:uppercase;margin-top:8px}
.brand .net{display:inline-flex;align-items:center;gap:8px;margin-top:10px;color:#7f9dbd;font-size:11px;letter-spacing:3px;text-transform:uppercase}
.brand .net i{width:6px;height:6px;border-radius:50%;background:#8fd4ff;box-shadow:0 0 10px #8fd4ff;animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.35}}

/* ===== GLASS PANEL (frosted) ===== */
.card{position:relative;z-index:10;width:min(92vw,420px);background:rgba(255,255,255,0.10);backdrop-filter:blur(26px) saturate(130%);-webkit-backdrop-filter:blur(26px) saturate(130%);border:1px solid rgba(190,225,255,.28);border-radius:24px;padding:34px 30px 28px;text-align:center;box-shadow:0 30px 90px -20px rgba(120,180,255,.18),0 10px 40px rgba(0,20,50,.45),inset 0 1px 0 rgba(255,255,255,.35);animation:rise 1s .25s both,float 8s ease-in-out 1.2s infinite;transition:border-color .4s}
@keyframes rise{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
/* avalanche rumble: nonstop shake */
@keyframes rumble{0%{transform:translate(0,0)}10%{transform:translate(-3px,2px)}20%{transform:translate(3px,-2px)}30%{transform:translate(-4px,-1px)}40%{transform:translate(4px,2px)}50%{transform:translate(-3px,1px)}60%{transform:translate(2px,-2px)}70%{transform:translate(-2px,2px)}80%{transform:translate(3px,-1px)}90%{transform:translate(-2px,-2px)}100%{transform:translate(0,0)}}
body.rumbling{animation:rumble .35s linear infinite}
body.rumbling .card{animation:rumble .35s linear infinite}

.status{display:inline-flex;align-items:center;gap:8px;padding:7px 16px;border-radius:999px;font-size:11.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;background:rgba(160,220,255,.08);border:1px solid rgba(160,220,255,.22);color:#b8d9f5;margin-bottom:22px;transition:.3s}
.status i{width:7px;height:7px;border-radius:50%;background:#8fd4ff;animation:pulse 1.6s infinite}
.status.ok{color:#7CFFB2;border-color:rgba(124,255,178,.4)}.status.ok i{background:#7CFFB2;box-shadow:0 0 12px #7CFFB2;animation:none}
.status.err{color:#ffb3b3;border-color:rgba(255,140,140,.4)}.status.err i{background:#ff8a8a;animation:none}
.status.busy{color:#c9e6ff}.status.busy i{background:#fff}

label{display:block;text-align:left;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8fb0cf;margin:0 0 8px 4px}
input{width:100%;background:rgba(6,14,28,.5);border:1px solid rgba(160,220,255,.25);color:#f2f9ff;border-radius:14px;padding:15px 16px;font-size:16px;letter-spacing:1px;outline:none;text-align:center;transition:.3s;font-variant-numeric:tabular-nums}
input::placeholder{color:#5e7c9c}
input:focus{border-color:#8fd4ff;box-shadow:0 0 0 4px rgba(143,212,255,.14),0 0 24px rgba(143,212,255,.2)}
button{width:100%;margin-top:14px;padding:15px;border:0;border-radius:14px;font-size:14px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#06131f;background:linear-gradient(135deg,#a8dcff,#5aa8e8);cursor:pointer;box-shadow:0 10px 30px -8px rgba(120,190,255,.6);transition:transform .18s,box-shadow .18s}
button:hover{transform:translateY(-2px);box-shadow:0 14px 36px -8px rgba(140,200,255,.8)}
button:disabled{opacity:.75;cursor:wait;transform:none}
button.ghost{background:transparent;border:1px solid rgba(160,220,255,.4);color:#bfe3ff;box-shadow:none;font-size:12px;padding:11px}
button.ghost:hover{background:rgba(160,220,255,.1);box-shadow:none}
button .spin{width:15px;height:15px;border:2px solid rgba(10,30,50,.3);border-top-color:#06131f;border-radius:50%;display:inline-block;animation:spin .7s linear infinite;vertical-align:-3px;margin-right:9px}
@keyframes spin{to{transform:rotate(360deg)}}

.code{font-family:ui-monospace,"SF Mono",Menlo,monospace;font-size:clamp(30px,8vw,40px);letter-spacing:10px;font-weight:700;color:#fff;margin:18px 0 8px;padding:18px 8px;border-radius:16px;background:rgba(160,220,255,.10);border:1px solid rgba(160,220,255,.4);text-shadow:0 0 26px rgba(160,220,255,.9);animation:codeglow 2.6s ease-in-out infinite}
@keyframes codeglow{50%{box-shadow:0 0 44px rgba(160,220,255,.5)}}
.code .ch{display:inline-block;animation:drop .5s cubic-bezier(.2,.9,.3,1) both}
@keyframes drop{from{opacity:0;transform:translateY(-18px) scale(1.4)}to{opacity:1;transform:none}}
.reveal-steps{margin-top:14px;text-align:left;color:#a9c4de;font-size:12.5px;line-height:2.1;border-top:1px solid rgba(160,220,255,.16);padding-top:14px}
.reveal-steps b{color:#8fd4ff}
#code-float .code{font-size:clamp(34px,10vw,54px)}
#code-float .hint{color:#e8f4ff;letter-spacing:2px;font-size:12px;text-transform:uppercase;text-shadow:0 2px 10px rgba(0,0,0,.6)}
.foot{position:relative;z-index:10;margin-top:20px;font-size:10.5px;letter-spacing:3px;text-transform:uppercase;color:#6d8db0;animation:rise 1s .4s both}
@media (max-width:420px){.card{padding:28px 20px 22px}.brand{margin-bottom:16px}}
</style></head><body>

<div class="aurora"></div>
<div class="peaks">
<svg class="p3" viewBox="0 0 1440 500" preserveAspectRatio="none"><path d="M0 500V260L180 120l120 130L420 90l150 160L720 110l160 150L1040 100l170 160L1380 130l60 90v280z" fill="#22344d"/></svg>
<svg class="p2" viewBox="0 0 1440 500" preserveAspectRatio="none"><path d="M0 500V320L200 200l110 110 130-140 140 150L720 190l150 140 170-130 150 150 100-80 100 110v220z" fill="#2c4666"/></svg>
<svg class="p1" viewBox="0 0 1440 500" preserveAspectRatio="none"><path d="M0 500V400L170 300l120 100 150-130 130 140L720 290l160 130 170-120 140 130 110-70 100 100v140z" fill="#3a5a82"/><path d="M150 317l20-17 20 17-20-8zM287 404l23-20 22 20-23-9zM566 422l22-19 22 19-22-8zM857 442l20-17 21 17-20-8zM1040 447l24-21 23 21-24-9z" fill="#e8f4ff" opacity=".85"/></svg>
</div>
<div class="mist"></div>
<canvas id="snow"></canvas>
<canvas id="av"></canvas>
<div id="whiteout"></div>
<div id="code-float"><div class="code" id="float-code"></div><div class="hint">buried in the avalanche \u2014 tap anywhere to dig out \u00b7 code stays</div></div>

<div class="brand">
<h1><span class="b">MR.BLISS MD</span></h1>
<div class="sub">WhatsApp Pairing Portal</div>
<div class="net"><i></i>Frostline Active \u00b7 Alaska Sector</div>
</div>

<div class="card" id="card">
<div class="status" id="status"><i></i><span id="stxt">calm before the cold</span></div>
<div id="box"></div>
</div>
<div class="foot">mr.bliss md \u00b7 frostline node \u00b7 snowfall edition</div>

<script>
"use strict";
var code=null, phase="idle", actx=null, master=null, windSrc=null, rumbleTimer=null;
var SNOW=[], AVAL=[], snowC=document.getElementById("snow"), avC=document.getElementById("av");
var sx=snowC.getContext("2d"), ax=avC.getContext("2d");

function sizeCanvases(){[snowC,avC].forEach(function(c){c.width=innerWidth;c.height=innerHeight});SNOW=[];seedSnow();AVAL=[];}
addEventListener("resize",sizeCanvases);

/* ============================ AUDIO ============================ */
function initAudio(){
  if(actx)return;
  try{actx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return}
  master=actx.createGain();master.gain.value=1.4;master.connect(actx.destination);
  if(actx.state==="suspended")actx.resume();
}
/* wind ambience: filtered noise, slow gusts */
function startWind(){
  if(!actx||windSrc)return;
  var dur=2.5,buf=actx.createBuffer(1,actx.sampleRate*dur,actx.sampleRate),d=buf.getChannelData(0);
  for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  windSrc=actx.createBufferSource();windSrc.buffer=buf;windSrc.loop=true;
  var bp=actx.createBiquadFilter();bp.type="bandpass";bp.frequency.value=700;bp.Q.value=.4;
  var g=actx.createGain();g.gain.setValueAtTime(.0001,actx.currentTime);g.gain.linearRampToValueAtTime(.07,actx.currentTime+4);
  windSrc.connect(bp);bp.connect(g);g.connect(master);windSrc.start();
}
/* avalanche rumble: deep sub + heavy filtered noise + rock crack */
function avalancheSound(){
  if(!actx)return;
  var t=actx.currentTime,dur=9+Math.random()*3;
  var buf=actx.createBuffer(1,actx.sampleRate*dur,actx.sampleRate),d=buf.getChannelData(0);
  for(var i=0;i<d.length;i++){var p=i/d.length;d[i]=(Math.random()*2-1)*Math.pow(1-p,.8)*(p<.04?3.5:1);}
  var src=actx.createBufferSource();src.buffer=buf;src.loop=false;
  var lp=actx.createBiquadFilter();lp.type="lowpass";lp.frequency.setValueAtTime(500,t);lp.frequency.exponentialRampToValueAtTime(60,t+dur);lp.Q.value=.5;
  var g=actx.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(2.2,t+.5);g.gain.exponentialRampToValueAtTime(.001,t+dur);
  src.connect(lp);lp.connect(g);g.connect(master);src.start(t);
  var o=actx.createOscillator();o.type="sine";o.frequency.setValueAtTime(38,t);o.frequency.exponentialRampToValueAtTime(16,t+dur);
  var og=actx.createGain();og.gain.setValueAtTime(1.8,t);og.gain.exponentialRampToValueAtTime(.001,t+dur*.9);
  o.connect(og);og.connect(master);o.start(t);o.stop(t+dur);
  for(var k=0;k<4;k++){
    var c=actx.createOscillator();c.type="sawtooth";c.frequency.setValueAtTime(180+Math.random()*200,t+k*.7);
    var cg=actx.createGain();cg.gain.setValueAtTime(.7,t+k*.7);cg.gain.exponentialRampToValueAtTime(.001,t+k*.7+.35);
    c.connect(cg);cg.connect(master);c.start(t+k*.7);c.stop(t+k*.7+.4);
  }
}

/* ============================ SNOWFALL (cinematic parallax) ============================ */
function seedSnow(){for(var i=0;i<260;i++)SNOW.push({x:Math.random()*snowC.width,y:Math.random()*snowC.height,r:1+Math.random()*2.6,sp:.4+Math.random()*1.1,drift:Math.random()*2-1,z:.4+Math.random()*.6,ph:Math.random()*6.28});}
var windT=0;
function drawSnow(){
  windT+=.004;
  sx.clearRect(0,0,snowC.width,snowC.height);
  sx.fillStyle="rgba(240,248,255,.92)";
  for(var i=0;i<SNOW.length;i++){
    var f=SNOW[i];
    f.y+=f.sp*(0.5+f.z);
    f.x+=f.drift*f.z+Math.sin(windT*3+f.ph)*.7+1.1;
    if(f.y>snowC.height){f.y=-6;f.x=Math.random()*snowC.width}
    if(f.x>snowC.width+6)f.x=-6;
    sx.globalAlpha=.35+f.z*.55;
    sx.beginPath();sx.arc(f.x,f.y,f.r*(0.7+f.z*.6),0,6.283);sx.fill();
  }
  sx.globalAlpha=1;
  requestAnimationFrame(drawSnow);
}

/* ============================ AVALANCHE (the wall of snow) ============================ */
var avalancheState={on:false,front:0,speed:0};
function startAvalanche(){
  avalancheState.on=true;avalancheState.front=-10;avalancheState.speed=2.2;
  avC.style.display="block";
  avalancheSound();
  document.body.classList.add("rumbling");
}
function drawAvalanche(){
  ax.clearRect(0,0,avC.width,avC.height);
  if(avalancheState.on){
    avalancheState.front+=avalancheState.speed;avalancheState.speed+=.14;
    var top=avalancheState.front;
    /* churning snow wall with tumbling chunks */
    var grad=ax.createLinearGradient(0,Math.max(0,top-90),0,avC.height);
    grad.addColorStop(0,"rgba(255,255,255,0)");
    grad.addColorStop(.12,"rgba(245,250,255,.9)");
    grad.addColorStop(1,"#ffffff");
    ax.fillStyle=grad;
    ax.beginPath();ax.moveTo(0,avC.height);
    for(var x=0;x<=avC.width;x+=30){
      var y=top+Math.sin(x*.02+Date.now()*.01)*24+Math.sin(x*.07)*12;
      ax.lineTo(x,y);
    }
    ax.lineTo(avC.width,avC.height);ax.closePath();ax.fill();
    ax.fillStyle="rgba(255,255,255,.85)";
    for(var k=0;k<14;k++){
      var cxp=(Date.now()*.4+k*97)%avC.width, cyp=top-20-Math.random()*80;
      if(cyp>0){ax.beginPath();ax.arc(cxp,cyp,3+Math.random()*7,0,6.283);ax.fill();}
    }
    if(top>avC.height*.72){
      /* full whiteout: snow covers the screen; code stays visible on top */
      document.getElementById("whiteout").classList.add("on");
      document.body.classList.remove("rumbling");
      var fc=document.getElementById("code-float");
      if(code){fc.style.display="flex";document.getElementById("float-code").textContent=code;}
      avalancheState.on=false;
      avC.style.display="none";
    }
  }
  requestAnimationFrame(drawAvalanche);
}
/* user refreshes (or taps) to dig out */
document.getElementById("whiteout").addEventListener("click",function(){
  document.getElementById("whiteout").classList.remove("on");
  document.getElementById("code-float").style.display="none";
});

/* ============================ UI ============================ */
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;","\\"":"&quot;"}[c]})}
function setBox(html){document.getElementById("box").innerHTML=html}
function setStatus(cls,txt){var s=document.getElementById("status");s.className="status "+cls;document.getElementById("stxt").textContent=txt}
function form(){setBox('<label>Enter WhatsApp Number</label><input id="n" inputmode="tel" maxlength="15" placeholder="+234  xxx  xxx  xxxx"><button id="go">Trigger Avalanche \u00b7 Pair</button>');
  var g=document.getElementById("go");g.onclick=pair;
  var n=document.getElementById("n");n.addEventListener("keydown",function(e){if(e.key==="Enter")pair()});
}
function render(){
  if(code){
    setBox('<div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8fb0cf;margin-top:6px">Pair Code Ready</div><div class="code">'+code.split("").map(function(ch,i){return '<span class="ch" style="animation-delay:'+(i*55)+'ms">'+esc(ch)+"</span>"}).join("")+"</div>"+
      '<div class="reveal-steps"><b>01</b> \u2014 WhatsApp \u203a Settings \u203a Linked Devices \u203a Link a Device<br><b>02</b> \u2014 Choose \u201cLink with phone number instead\u201d<br><b>03</b> \u2014 Enter the code before it expires</div>');
    strikeSnow();
  } else form();
}
async function pair(){
  var n=document.getElementById("n").value.replace(/[^0-9]/g,"");
  if(!n){setStatus("err","enter a number first");return}
  phase="generating";
  var b=document.getElementById("go");b.disabled=true;b.innerHTML='<span class="spin"></span>The mountain wakes\u2026';
  setStatus("busy","summit echo \u2014 summoning the slide");
  try{
    var j=await (await fetch("/pair?number="+n)).json();
    if(j.error){b.disabled=false;b.textContent="Trigger Avalanche \u00b7 Pair";setStatus("err",j.error);phase="idle";return}
    /* THE AVALANCHE: rumble + shake + wall of snow */
    startAvalanche();
    /* keep polling for the code while the snow buries the screen */
    var got=null;
    for(var i=0;i<120;i++){
      await new Promise(function(r){setTimeout(r,1000)});
      try{
        var s=await (await fetch("/status")).json();
        if(s.lastError)break;
        if(s.pairingCode){got=s.pairingCode;break}
      }catch(e){}
    }
    if(got){
      code=got;phase="ready";
      /* code floats above the whiteout */
      var fc=document.getElementById("code-float");
      fc.style.display="flex";document.getElementById("float-code").textContent=code;
      setTimeout(function(){
        document.getElementById("whiteout").classList.remove("on");
        fc.style.display="none";
        render();setStatus("ok","code ready \u2014 expires soon");
      },9000); /* after ~9s the snow settles back and the card shows the code */
    } else {
      document.body.classList.remove("rumbling");
      document.getElementById("whiteout").classList.remove("on");
      b.disabled=false;b.textContent="Trigger Avalanche \u00b7 Pair";setStatus("err","the mountain stayed silent \u2014 try again");phase="idle";
    }
  }catch(e){setStatus("err","connection lost \u2014 retry");document.body.classList.remove("rumbling");b.disabled=false;b.textContent="Trigger Avalanche \u00b7 Pair";phase="idle";}
}
async function refresh(){
  try{
    var s=await (await fetch("/status")).json();
    if(s.connected){setStatus("ok","connected \u2014 session live");
      setBox('<div style="font-size:13px;color:#a9c4de;line-height:2">Session live. Type <b style="color:#8fd4ff">.menu</b> on WhatsApp.</div><button id="again" class="ghost">Pair Another Number</button>');
      var a=document.getElementById("again");if(a)a.onclick=function(){code=null;form();};return}
    if(!code&&phase!=="generating"&&!document.getElementById("n"))form();
  }catch(e){}
}
["pointerdown","keydown","touchstart"].forEach(function(ev){addEventListener(ev,function(){initAudio();startWind();},{passive:true})});
function strikeSnow(){/* subtle gust burst when code arrives */}

sizeCanvases();form();refresh();setInterval(refresh,4000);requestAnimationFrame(drawSnow);requestAnimationFrame(drawAvalanche);
</script></body></html>`;
