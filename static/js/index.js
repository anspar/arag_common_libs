$(document).ready(()=>{
    if($(".ar-theme-switch").length===0) return
    let is_theme_dark = localStorage.getItem("ar-theme")==="dark";

    if(is_theme_dark){
        $(":root").attr("theme-dark", "dark");
        localStorage.setItem("ar-theme", "dark")
    }
    
    $(`.ar-theme-switch`).html(`
        <i class="fas fa-moon ${is_theme_dark? "d-none":""}"></i>  
        <i class="fas fa-certificate ${!is_theme_dark? "d-none":""}"></i>
    `)

    $("span.ar-theme-switch").on("click", function(){
        if($(":root").attr("theme-dark")==="dark"){
            $(":root").attr("theme-dark", "light");
            localStorage.setItem("ar-theme", "light")
            $("span.ar-theme-switch>.fa-certificate").addClass("d-none");
            $("span.ar-theme-switch>.fa-moon").removeClass("d-none");
            return
        }
        $(":root").attr("theme-dark", "dark");
        localStorage.setItem("ar-theme", "dark")
        $("span.ar-theme-switch>.fa-moon").addClass("d-none");
        $("span.ar-theme-switch>.fa-certificate").removeClass("d-none");
    })
})