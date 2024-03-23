// const darkmode = document.querySelector('#dark-mode');
// const bodyelt = document.querySelector("body");

// darkmode.addEventListener('click',()=>{
//     if (darkmode.textContent == 'DARK' ){
//         document.documentElement.style.setProperty('--text-color', 'rgb(249, 245, 245)');        
//         document.documentElement.style.setProperty('--background-color', 'black');    
            
//         bodyelt.style.backgroundColor = 'black';
//         darkmode.textContent = 'LIGHT'
//     }
//     else{
//         document.documentElement.style.setProperty('--text-color', 'black');        
//         document.documentElement.style.setProperty('--background-color', 'rgb(249, 245, 245)');        
        
//         bodyelt.style.backgroundColor = 'rgb(249, 245, 245)';
//         darkmode.textContent = 'DARK'
//     }
// })

const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector("body");

darkmode.addEventListener('click',()=>{
    if (darkmode.textContent == '🌙' ){
        document.documentElement.style.setProperty('--text-color', 'rgb(205, 133, 63');        
        document.documentElement.style.setProperty('--background-color', 'gray');    
            
        bodyelt.style.backgroundColor = 'gray';
        darkmode.textContent = '🔆'
    }
    else{
        document.documentElement.style.setProperty('--text-color', 'gray');        
        document.documentElement.style.setProperty('--background-color', 'rgb(205, 133, 63');        
        
        bodyelt.style.backgroundColor = 'rgb(205, 133, 63';
        darkmode.textContent = '🌙'
    }
})