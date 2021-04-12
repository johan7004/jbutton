function jbutton(options){
    let jbutton = document.querySelectorAll('.jbutton');

    if(options.shadow_type==='hard')
    options.shadow_type='0px'
    else 
    options.shadow_type='15px'

    jbutton.forEach(button => {
button.styke.boxShadow ='10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.15)'

if (options.padding){
    jbutton.style.padding = '1em'
}

})




}

module.exports.jbutton = jbutton;