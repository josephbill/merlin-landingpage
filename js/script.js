   // write JS.
            document.addEventListener('DOMContentLoaded', function(){
                const paragraph = document.getElementById('paraJs')
                const buttonClick = document.getElementById('clickEffect')
                buttonClick.addEventListener('click', function(){
                    paragraph.innerHTML = "Changed content courtsey of button click"
                    // create a new div element //gives the element a class 
                    // it follows the class styles 
                    // create a new img element and place the image to the div 
                    const newDiv = document.createElement("div")
                    newDiv.setAttribute("class", "center-box")
                    const image = document.createElement("img")
                    image.src = "assets/unnamed.jpg"
                    image.alt = "my local image"
                    //add image to the div 
                    newDiv.appendChild(image)
                    //append div to maincontent 
                    document.getElementById('mainContent').appendChild(newDiv)
                    buttonClick.disabled = true
                })
                // here form capture 
                const contactUs = document.getElementById("contactForm")
                contactUs.addEventListener("submit", function(e){
                    e.preventDefault()
                    // picking values from input 
                    const email = document.getElementById("email").value
                    const phone = document.getElementById("phoneNo").value
                    const fname = document.getElementById("fName").value

                    const msg = "The persona " + fname + " email is: " + email + " phone: " + phone
                    //alert(msg)
                    const msgdiv = document.createElement("p")
                    msgdiv.innerHTML = msg
                    document.getElementById("footer").appendChild(msgdiv)
                })
            })