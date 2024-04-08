
        let flag = true;
        var isMobileView = window.matchMedia("(max-width: 480px)").matches;
        if (isMobileView) {
            var svgElement = document.getElementById("leftbtn");
            svgElement.setAttribute("fill", "#001B41"); // Replace "#FF0000" with the desired color
            var svgElement = document.getElementById("rightbtn");
            svgElement.setAttribute("fill", "#8D8D8D");
            flag = false;
        }
        function collapse() {
            var isMobileView = window.matchMedia("(max-width: 480px)").matches;
            if (isMobileView) {


                document.getElementById("width-adjust").style.setProperty('width', '80%', 'important');
                if (flag) {


                    document.getElementById("width-adjust").style.setProperty('display', 'None', 'important');
                    document.getElementById("width-adjust").style.setProperty('width', '80%', 'important');

                    var svgElement = document.getElementById("leftbtn");
                    svgElement.setAttribute("fill", "#001B41"); // Replace "#FF0000" with the desired color
                    var svgElement = document.getElementById("rightbtn");
                    svgElement.setAttribute("fill", "#8D8D8D");
                    flag = false;
                } else {
                    document.getElementById("width-adjust").style.setProperty('display', 'flex', 'important');

                    var svgElement = document.getElementById("leftbtn");
                    svgElement.setAttribute("fill", "#8D8D8D"); // Replace "#FF0000" with the desired color
                    var svgElement = document.getElementById("rightbtn");
                    svgElement.setAttribute("fill", "#001B41");
                    flag = true;
                    // Replace "#FF0000" with the desired color
                }
            } else {
                if (flag) {

                    document.getElementById("width-adjust").class += "mobside";
                    document.getElementById("width-adjust").style.width = "fit-content";
                    try{
                        
                       
                        document.getElementById("middle-sec").style.width = "55%";
                        document.getElementById("end-sec").style.width = "32%";
                       
                    }
                    catch{

                    }
                    var elements = document.getElementsByClassName("table-custom-width");
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.width="87%"
                    }
                    var elements = document.getElementsByClassName("text-collapse");
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.display = "none";
                    }
                    var svgElement = document.getElementById("leftbtn");
                    svgElement.setAttribute("fill", "#001B41"); // Replace "#FF0000" with the desired color
                    var svgElement = document.getElementById("rightbtn");
                    svgElement.setAttribute("fill", "#8D8D8D");
                    flag = false;
                } else {
                    var elements = document.getElementsByClassName("table-custom-width");
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.width="76%"
                    }
                    document.getElementById("width-adjust").style.width = "18%";
                    try{
                        
                        document.getElementById("middle-sec").style.width = "";
                        document.getElementById("end-sec").style.width = "28%";
                    }catch{
                        
                    }
                    var elements = document.getElementsByClassName("text-collapse");
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.display = "contents";
                    }
                    var svgElement = document.getElementById("leftbtn");
                    svgElement.setAttribute("fill", "#8D8D8D"); // Replace "#FF0000" with the desired color
                    var svgElement = document.getElementById("rightbtn");
                    svgElement.setAttribute("fill", "#001B41");
                    flag = true;
                    // Replace "#FF0000" with the desired color
                }

            }

        }
