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

        if(this.classList.contains("viewing")){
            console.log("it works")
           
        }

        else {
            this.classList.add("active");
        }
        
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item){
            item.style.display = "none";
        })
        

        if(li_value == "about" && this.classList.contains("active") ){
            document.querySelector(".Page-Container").style.transform = "translate(-25vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";
            
            setTimeout(() => { document.querySelector("." + li_value).style.display = "flex"; }, 500);
            this.classList.add("viewing");
            document.querySelector('#res').classList.remove("viewing");
            document.querySelector('#port').classList.remove("viewing");
            

        }
        
        else if(li_value == "portfolio" && this.classList.contains("active")) {          
            document.querySelector(".Page-Container").style.transform = "translate(-25vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";

            setTimeout(() => { document.querySelector("." + li_value).style.display = "flex"; }, 500);
            this.classList.add("viewing");
            document.querySelector('#res').classList.remove("viewing");
            document.querySelector('#abt').classList.remove("viewing");

        }

        else if(li_value == "resume" && this.classList.contains("active")) {
            document.querySelector(".Page-Container").style.transform = "translate(-25vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";

            setTimeout(() => { document.querySelector("." + li_value).style.display = "flex"; }, 500);
            this.classList.add("viewing");
            document.querySelector('#abt').classList.remove("viewing");
            document.querySelector('#port').classList.remove("viewing");
            
        }

        else if (li_value == "about" && this.classList.contains("viewing")){
            document.querySelector(".Page-Container").style.transform = "translate(0vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";
            
            //document.querySelector("." + li_value).style.display = "none";
            
            this.classList.remove("active");
            this.classList.remove("viewing");
            
            console.log("done")
        }

        else if (li_value == "portfolio" && this.classList.contains("viewing")){
            document.querySelector(".Page-Container").style.transform = "translate(0vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";
           
            //document.querySelector("." + li_value).style.display = "none";
            
            this.classList.remove("active");
            this.classList.remove("viewing");

            console.log("done")
        }

        else if (li_value == "resume" && this.classList.contains("viewing")){
            document.querySelector(".Page-Container").style.transform = "translate(0vw)";
            document.querySelector(".Page-Container").style.transition = "transform 1.5s ease";
           
            //document.querySelector("." + li_value).style.display = "none";
            
            this.classList.remove("active");
            this.classList.remove("viewing");
            console.log("done")
        }

        else {
            console.log("");
            
        }

    })
}

