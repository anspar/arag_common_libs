function ratio_fix_16x9(){
    $("[16x9]").each((i,e)=>{
        $(e).height(`${($(e).width()/16)*9}px`)
    })
}

function ratio_fix_21x9(){
    $("[21x9]").each((i,e)=>{
        $(e).height(`${($(e).width()/21)*9}px`)
    })
}

function ratio_fix_32x9(){
    $("[32x9]").each((i,e)=>{
        $(e).height(`${($(e).width()/32)*9}px`)
    })
}

function ratio_fix_1x1(){
    $("[1x1]").each((i,e)=>{
        $(e).height(`${$(e).width()}px`)
    })
}

function ratio_fix(){
    ratio_fix_16x9()
    ratio_fix_21x9()
    ratio_fix_32x9()
    ratio_fix_1x1()
}

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const obsOptions = {root:null};
const Obs = new IntersectionObserver(inViewport);

$(document).ready(()=>{
    const ELs_inViewport = document.querySelectorAll('[data-anim]');
            ELs_inViewport.forEach(EL => {
            Obs.observe(EL, obsOptions);
    });

    ratio_fix();
    $(window).on("resize", ()=>{
        ratio_fix();
    })
})