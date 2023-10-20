// HEADER SCROLLING
window.addEventListener('scroll', () => {
    let title = document.getElementById("title");
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    let scale = scrollValue * 0.05 + 1; //0.05 is the scale rate

    scale = Math.min(Math.max(0.01, scale), 170);  // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly
    title.style.transform = `scale(${scale})`; //I don't know why I have to use backticks here, please give me feedback on this cause it just wouldn't work otherwise



});

//-------------------- TriassicScroll
window.addEventListener('scroll', () => {
    let triassictitle = document.getElementById("triassictitle");
    let scrollValue = window.scrollY;

    //this if statement is to let me determine when the initial starting position for when my scaling will start
    if (scrollValue > 3800) {
        let scale = (scrollValue - 3800) * 5 + 1;
        
        scale = Math.min(Math.max(0.01, scale), 4000);   // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly
        console.log(scale);
        if(scale === 4000){
            triassictitle.style.top = 100;
        }
        triassictitle.style.transform = `scale(${scale})`; //I don't know why I have to use backticks here, please give me feedback on this cause it just wouldn't work otherwise
    }
    });


    // --------- IMAGE 1 TRIASSIC ---------- 
    window.addEventListener('scroll', () => {
        let bush1 = document.getElementById("bush1");
        let scrollValue = window.scrollY;
    
        //this if statement is to let me determine when the initial starting position for when my scaling will start
        if (scrollValue > 3800) {
            let scale = (scrollValue - 5000) * 5 + 1;
            
            scale = Math.min(Math.max(0.01, scale), 4000);   // this lets me determine how big/far out it goes off too from the screen (the 4000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly

            bush1.style.transform = `scale(${scale})`; //I don't know why I have to use backticks here, please give me feedback on this cause it just wouldn't work otherwise
        }
        });


        // --------- IMAGE 2 TRIASSIC ---------- 
        window.addEventListener('scroll', () => {
            let bush2 = document.getElementById("bush2");
            let scrollValue = window.scrollY;
        
            //this if statement is to let me determine when the initial starting position for when my scaling will start
            if (scrollValue > 4000) {
                let scale = (scrollValue - 5200) * 5 + 1;
                
                scale = Math.min(Math.max(0.01, scale), 4000);   // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly
                console.log(scale);
                

                    bush2.style.transform = `scale(${scale})`;
                
            }
            });
    
        // --------- IMAGE 3 TRIASSIC ---------- 
        window.addEventListener('scroll', () => {
            let image3 = document.getElementById("bush3");
            let scrollValue = window.scrollY;
        
            //this if statement is to let me determine when the initial starting position for when my scaling will start
            if (scrollValue > 4200) {
                let scale = (scrollValue - 5000) * 5 + 1;
                
                scale = Math.min(Math.max(0.01, scale), 4000);   // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly

                bush3.style.transform = `scale(${scale})`; //I don't know why I have to use backticks here, please give me feedback on this cause it just wouldn't work otherwise
            }
            });

        // --------- Dino 1 TRIASSIC ---------- 
        window.addEventListener('scroll', () => {
            let tridino1 = document.getElementById("tridino1");
            let scrollValue = window.scrollY;
        
            //this if statement is to let me determine when the initial starting position for when my scaling will start
            if (scrollValue > 4400) {
                let scale = (scrollValue - 5000) * 5 + 1;
                
                scale = Math.min(Math.max(0.01, scale), 4000);   // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly

                tridino1.style.transform = `scale(${scale})`; //I don't know why I have to use backticks here, please give me feedback on this cause it just wouldn't work otherwise
            }
            });

                    // --------- Dino 2 TRIASSIC ---------- 
        window.addEventListener('scroll', () => {
            let tridino2 = document.getElementById("tridino2");
            let scrollValue = window.scrollY;
        
            //this if statement is to let me determine when the initial starting position for when my scaling will start
            if (scrollValue > 4600) {
                let scale = (scrollValue - 5000) * 5 + 1;
                
                scale = Math.min(Math.max(0.01, scale), 4000);   // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly

                tridino2.style.transform = `scale(${scale})`; //I don't know why I have to use backticks here, please give me feedback on this cause it just wouldn't work otherwise
            }
            });

        // --------- Dino 3 TRIASSIC ---------- 
        window.addEventListener('scroll', () => {
            let tridino1 = document.getElementById("tridino3");
            let scrollValue = window.scrollY;
        
            //this if statement is to let me determine when the initial starting position for when my scaling will start
            if (scrollValue > 4800) {
                let scale = (scrollValue - 5000) * 5 + 1;
                
                scale = Math.min(Math.max(0.01, scale), 4000);   // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitly

                tridino3.style.transform = `scale(${scale})`; //I don't know why I have to use backticks here, please give me feedback on this cause it just wouldn't work otherwise
            }
            });

//keeping this function here to show an experiment that i tried to do with resizing the images of the webpage that just uses the scroll wheel rather than the scroll bar
// function triaScroll2(event){


//     scale += event.deltaY* 0.7; //this allows me to change how much it scales it self by however much the rate/speed needs it to be
//     scale = Math.min(Math.max(0.01, scale), 10000); // this lets me determine how big/far out it goes off too from the screen (the 10000 value), and the 0.01 value is how small it will get so it wont be able to shrink and enlarge infinitely


//     document.getElementById("images2").style.transform = `scale(${scale})`;
// }
// addEventListener("wheel", (triaScroll2))

