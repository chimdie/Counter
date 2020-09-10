const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')
const value = document.querySelector('#value')

let displayed = 0;

// (function(){
//     decrease.addEventListener('click', ()=>{
//         value.textContent = displayed--; 
//         changeColors()
//     })
//     reset.addEventListener('click', ()=>{
//         value.textContent = displayed = 0;
//         changeColors()
//     })
//     increase.addEventListener('click', ()=>{
//         value.textContent = displayed++;
//         changeColors()
//     })
// })()


// function changeColors(){
//     if(displayed < 0){
//         value.style.color = 'red'
//     }
//     if(displayed > 0){
//         value.style.color = 'green'
//     }
//     if(displayed === 0){
//         value.textContent = 0;
//         value.style.color = '#000'
//     }
// }



const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            displayed--
        }else if(styles.contains('reset')){
            displayed = 0
        }else if(styles.contains('increase')){
            displayed++
        }
        value.textContent = displayed;

        if(displayed < 0){
            value.style.color = 'red'
        }
        if(displayed > 0){
            value.style.color = 'green'
        }
        if(displayed === 0){
            value.style.color = 'black'
        }
    })
})