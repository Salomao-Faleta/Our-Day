document.getElementById('subir').addEventListener('click', ()=>{
    setTimeout(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, 200)
});


function subirTela(){
    if(window.scrollY > 500){
        document.getElementById('subir').style.display = 'block';
    }else{
        document.getElementById('subir').style.display = 'none';
    }

}


addEventListener('scroll', subirTela);