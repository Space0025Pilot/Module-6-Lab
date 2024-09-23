window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    
    function buttonFunction(){
        if (document.querySelector('input[name="radiogroup"]')) {
            document.querySelectorAll('input[name="radiogroup"]').forEach((elem) => {
              elem.addEventListener("change", function(event) {
                var item = event.target.value;
                if(item == "kara"){
                    document.getElementById("generate").onclick = Kara;
                }
                else if(item == "ellie"){
                    document.getElementById("generate").onclick = Ellie;
                }
                else if(item == "shane"){
                    document.getElementById("generate").onclick = Shane;
                }
                else if(item == "xena"){
                    document.getElementById("generate").onclick = Xena;
                }
                else if(item == "nobody"){
                    document.getElementById("generate").onclick = Nobody;
                }
                else{
                    document.getElementById("generate").onclick = Hello;
                }
              });
            });
          } 
    }
    buttonFunction();
}

/**
 * This function returns the string 'hello' and creates an alert for the website.
 * @return {string} the string hello and alert box
 */
export function Hello(){
    // alert("hello");
    alert("Hello My Friends!");
    return 'hello';
}

/**
 * This function returns the string 'hello'
 * set out an alert from Kara
 */
export function Kara() {
    alert("Congrats for knowing Kara Thrace! 'So Say We All!'");
}

/**
 * This function returns the string 'hello'
 * sets out an alert from Ellie
 */
export function Ellie() {
    alert("Congrats for knowing Ellie Williams! 'Endure and Survive!'");
}

/**
 * This function returns the string 'hello'
 * sets out an alert from Ellie
 */
export function Shane() {
    alert("Congrats for knowing Shane Vansen! ' Like that last Panda, it has no idea what's about to happen!'");
}

/**
 * This function returns the string 'hello'
 * sets out an alert from Ellie
 */
export function Xena() {
    alert("Congrats for knowing Xena! 'I have many skills!'");
}

/**
 * This function returns the string 'hello'
 * sets out an alert from Ellie
 */
export function Nobody() {
    alert("Seriously? Go catch up on some culture there my friend!");
}


