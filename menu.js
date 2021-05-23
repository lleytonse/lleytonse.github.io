var li_elements = document.querySelectorAll("li");
var menu_elements = document.querySelectorAll(".Page-Container");
var item_elements = document.querySelectorAll(".item");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for(var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function(){

        li_elements.forEach(function(li){
            li.classList.remove("active");
        })

        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item){
            item.style.display = "none";
        })

        if(li_value == "about") {
            document.querySelector(".Page-Container").style.transform = "translate(-25vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";

            setTimeout(() => { document.querySelector("." + li_value).style.display = "flex"; }, 500);
        }

        else if(li_value == "portfolio") {          
            document.querySelector(".Page-Container").style.transform = "translate(-25vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";

            setTimeout(() => { document.querySelector("." + li_value).style.display = "flex"; }, 500);
            
        }

        else if(li_value == "resume") {
            document.querySelector(".Page-Container").style.transform = "translate(-25vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";

            setTimeout(() => { document.querySelector("." + li_value).style.display = "flex"; }, 500);
        }

        else if(li_value == "home") {
            //document.querySelector("." + li_value).style.display = "none";

            document.querySelector(".Page-Container").style.transform = "translate(0vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";

            //setTimeout(() => { document.querySelector("." + li_value).style.display = "flex"; }, 500)
        }

        else {
            console.log("");
        }

        
    })
}

