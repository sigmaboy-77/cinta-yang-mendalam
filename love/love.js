function buatLove(){

    let love = document.createElement("div");

    love.innerHTML="❤️";
    love.className="heart";

    document.body.appendChild(love);

    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;

    let dx=(Math.random()-0.5)*4;
    let dy=(Math.random()-0.5)*4;

    let ukuran=20+Math.random()*40;

    love.style.fontSize=ukuran+"px";

    function animasi(){

        x+=dx;
        y+=dy;

        if(x<0 || x>window.innerWidth){
            dx=-dx;
        }

        if(y<0 || y>window.innerHeight){
            dy=-dy;
        }

        love.style.left=x+"px";
        love.style.top=y+"px";

        requestAnimationFrame(animasi);
    }

    animasi();
}

for(let i=0;i<50;i++){
    buatLove();
}