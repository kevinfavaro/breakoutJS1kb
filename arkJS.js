z=()=>{c=[...Array(8)].map((x,y)=>x=[...Array(9)].map((j,i)=>(y>0&y<4&i>0&i<8?"c":" ")));x=y=4;ox=oy=0;vx=vy=1;_=4;};z();tx=()=>x<0?0:x;ty=()=>y<0?0:y;p=1;n=-1;_d=()=>_+=(_<7?1:0);_e=()=>_-=(_>1?1:0);xp=()=>x>0|x<8?x+vx:x;yp=()=>y>0|y<7?y+vy:y;bc=(l,t,r,d)=>{vx*=(l&vx==n)|(r&vx==p)?-1:1;vy*=(t&vy==n)|(d&vy==p)?-1:1;return l|t|r|d};k=(l,t)=>c[y+((y>0&t==-1)|(y<7&t==1)?t:0)][x+((x>0&l==-1)|(x<7&l==1)?l:0)]=='c'&((vx==l)|(vy==t));cl=()=>k(-1,0);ct=()=>k(0,-1);cr=()=>k(1,0);cd=()=>k(0,1);ct1=()=>vy==-1&vx==-1&k(-1,-1);ct2=()=>vy==-1&vx==1&k(1,-1);cd1=()=>vy==1&vx==-1&k(-1,1);cd2=()=>vx==1&vy==1&k(1,1);kd=()=>ct1()|ct2()|cd1()|cd2();dc=()=>{c[7].map((x,i)=>c[7][i]=(i>_-2&i<_+2?'_':' '));c[oy][ox]=' ';c[ty()][tx()]='o';};tc=()=>{if(yp()>7)return z();a=bc(xp()<0,yp()<0,xp()>8,yp()>7);if(yp()==7&vy==1)a=bc(x==_+2,0,x==_-2,x>_-3&x<_+3);bx=xp();by=yp();blr=cl()|cr();btd=ct()|cd();a=bc(cl(),ct(),cr(),cd());b=0;if(!a&kd()){blr=btd=1;b=bc(ct1()|cd1(),ct1()|ct2(),ct2()|cd2(),cd1()|cd2());}if(a|b)c[(btd&!blr)|(b&btd)?by:y][blr?bx:x]=' ';return a|b};r=()=>{dc();ox=x;oy=y;while(tc());x=xp();y=yp();dc();dr()};document.addEventListener('keydown',e=>{if(e.keyCode==37)_e();if(e.keyCode==39)_d()});setInterval(r,400);