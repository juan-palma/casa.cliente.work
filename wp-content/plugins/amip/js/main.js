let lenis;
const grid = document.querySelector('#inicioGaleria.idaColumns');
let columns = Array(), items, mergedItems;
if(grid){
    columns = [...grid.querySelectorAll('.idaColGal2')];
    items = columns.map((column, pos) => {
        return [...column.querySelectorAll('figure')].map(item => ({
            element: item,
            column: pos,
            wrapper: item, //item.querySelector('.column__item-imgwrap'),
            image: item.querySelector('img')
        }));
    });
    mergedItems = items.flat();
}
const scroll = () => {
    if(columns.length == 2) {   
        gsap.to(columns[1], {
            ease: 'none',
            scrollTrigger: {
                trigger: grid,
                start: 'clamp(top 80%)',
                end: 'clamp(bottom top)',
                scrub: 1
            },
            yPercent: -20
        });

        mergedItems.forEach(item => {
            if ( item.column === 1 ) return;
            
            gsap.to(item.wrapper, {
                ease: 'none',
                startAt: {transformOrigin: item.column === 0 ? '0% 100%' : '100% 100%'},
                scrollTrigger: {
                    trigger: item.element,
                    start: 'clamp(top 80%)',
                    end: 'clamp(bottom top)',
                    scrub: 1
                },
                rotation: item.column === 0 ?  -6 : 6,
                xPercent: item.column === 0 ?  -10 : 10
            });
        });
    }
}


function animateTitulos() {
    const boxes = gsap.utils.toArray('.titulosAnimados');
    boxes.forEach(box => {
        gsap.from(box, {
            transformOrigin: "left bottom",
            y: 26,
            // rotationX: 90,
            // skewX: 8,
            //scaleY: 0.5,
            opacity: 0,
            ease: "sine.out",
            duration: .4,
            scrollTrigger: {
                trigger: box,
                toggleActions: "restart none reverse none",
                start: "top 60%",
                end: "bottom 62%",
                //scrub: 1.5,
                ease: "sine.out"
            }
        })
    });
}

function animateObjetos() {
    //pareja = document.getElementById("imagenFondoHisotira");
    const frase = document.querySelector("#inicioFrase > .parallax figure");
    if(!frase){ return false; }
    gsap.to(frase, {
        y: -160,
        transformOrigin: "center top",
        scrollTrigger: {
            trigger: "#inicioFrase > .parallax figure",
            start: "top-=10 bottom",
            end: "bottom top",
            ease: "sine.out",
            scrub:2,
            pin: true
        }
    });    
}










window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};



function serviciosOcultar(n, accion) {
    const sg = serviciosGlobal;
    [...sg.btns].forEach((b, index) => {
        if(index === n){ return false; };
        if(accion === "ocultar"){
            b.idaGV.ocultar.play();
        } else if(accion === "mostrar"){
            setTimeout(() => {
                b.idaGV.ocultar.reverse();
            }, 500);
        }
    });
}
function serviciosClickFuntion() {
    const sg = serviciosGlobal;
    if(sg.run !== 0){ return false; };
    sg.run = 1;

    if(this.idaGV.activo === 0){
        this.idaGV.activo = 1;
        sg.activo = 1;
        sg.activoN = this.idaGV.lugar;

        sg.infos[this.idaGV.lugar].style.display = "block";
        this.style["z-index"] = "10";
        this.idaGV.titulo.style.display = "none";
        serviciosOcultar(this.idaGV.lugar, "ocultar");
        this.idaGV.anime.play();
        setTimeout(() => {
            this.idaGV.info.play();
            this.idaGV.cerrar.play();
        }, 600);

    } else if(this.idaGV.activo === 1){
        this.idaGV.info.seek(0).pause();
        this.idaGV.cerrar.seek(0).pause();
        sg.infos[this.idaGV.lugar].style.display = "none";
        this.style["z-index"] = "1";
        this.idaGV.titulo.style.display = "block";
        serviciosOcultar(this.idaGV.lugar, "mostrar");
        this.idaGV.anime.reverse();
        this.idaGV.activo = 0;
        sg.activo = 0;
        sg.activoN = "";
    }
}

const serviciosGlobal = {};
function serviciosActive() {
    const sg = serviciosGlobal;

    sg.padre = document.querySelector(".boxServicios");
    if(!sg.padre){ return false; }
    sg.btns = sg.padre.getElementsByClassName("boxServicio");
    sg.infos = sg.padre.getElementsByClassName("boxServicioInfo");
    sg.run = 0;
    sg.activo = 0;
    sg.activoN = "";

    [...sg.btns].forEach((b, index) => {
        b.idaGV = {};
        b.idaGV.titulo = b.querySelector(".tituloIcono");
        b.idaGV.btnClose = b.querySelector(".cerrar");
        b.idaGV.lugar = index;
        b.idaGV.activo = 0;
        b.idaGV.ocultar = gsap.to(b, {duration: .3, opacity: 0, ease: 'inOut', paused: true, onComplete: function(){ this._pt.t.style["z-index"] = '-1'; }, onReverseComplete: function(){ this._pt.t.style["z-index"] = '1'; } });
        b.idaGV.anime = gsap.to(b, {
            duration: 1,
            x: () => { return ( b.getBoundingClientRect().left - sg.padre.getBoundingClientRect().left ) * -1; },
            y: () => { return ( b.getBoundingClientRect().top - sg.padre.getBoundingClientRect().top ) * -1; },
            ease: 'expo.inOut',
            paused: true,
            onComplete: () => {
                sg.run = 0;
            },
            onReverseComplete:() => {
                sg.run = 0;
            }
        });
        b.idaGV.info = gsap.to(sg.infos[index], {duration: .3, opacity: 1, ease: 'inOut', paused: true });
        b.idaGV.cerrar = gsap.to(b.idaGV.btnClose, {duration: .3, opacity: 1, x:-26, ease: 'inOut', paused: true });

        b.addEventListener('click', serviciosClickFuntion);
    });
}
function serviciosReset() {
    const sg = serviciosGlobal;
    if(!sg.padre){ return false; }

    if(sg.activo === 1){
        sg.btns[sg.activoN].idaGV.info.seek(0).pause();
        sg.btns[sg.activoN].idaGV.cerrar.seek(0).pause();
        sg.btns[sg.activoN].idaGV.anime.seek(0).pause();
        sg.infos[sg.activoN].style.display = "none";
        sg.btns[sg.activoN].style["z-index"] = "1";
        sg.btns[sg.activoN].idaGV.titulo.style.display = "block";
        serviciosOcultar(sg.btns[sg.activoN].idaGV.lugar, "mostrar");
        sg.btns[sg.activoN].idaGV.activo = 0;
        sg.activo = 0;
        sg.activoN = "";
        sg.run = 0;
    }

    [...sg.btns].forEach((b) => {
        b.idaGV.anime.invalidate();
        b.idaGV.ocultar.seek(0).pause();
        b.style["z-index"] = '1';
    });
}


//Activo
function btnMobileActive(e) {
    this.classList.toggle('activo');
}
const tarjetasActivo = document.querySelectorAll('.proyectosCG .servicio > li');
console.log(tarjetasActivo);
tarjetasActivo.forEach( (t) => {
    t.addEventListener('click', btnMobileActive);
})






//Particulas
function particulasRun(){
    particlesJS.load('animacionLineas', '/wp-content/plugins/amip/js/particles-config.json', function() {
        //console.log('señal');
    });
    particlesJS.load('animacionLineasFooter', '/wp-content/plugins/amip/js/particles-config-footer.json', function() {
        //console.log('señal');
    });
}





document.addEventListener("DOMContentLoaded", (event) => {
    animateTitulos();
    serviciosActive();
    particulasRun();
    window.addEventListener("load", function(e){
        animateObjetos();
        scroll();
       
    }, false);
});

if(window.mobileAndTabletCheck()){
    if (screen && screen.orientation !== null) {
        try {
            window.screen.orientation.onchange = serviciosReset;
            //displayOrientation();
        }
        catch (e) { output.innerHTML = e.message; }
    }
} else{
    window.onresize = serviciosReset;
}



