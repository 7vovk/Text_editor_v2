     function getId(a) {
         return document.getElementById(a);
     }
     var dfH = document.forms["headerForm"];
     var dfE = document.forms["editForm"];
     var dftE = document.forms["textEdit"];


//Shows edit form:
     getId("edit").onclick = function () {
         dfE.classList.remove("hiddenForm");
         dfH.classList.add("hiddenForm");
         dftE.classList.remove("hiddenForm");
         getId("section").classList.add("hiddenForm");


//This code gets element's tag name + information inside tags:
         var someText = getId("text").children;
         //                 for(var i = 0; i<someText.length; i++){
         //                      dftE.ta.value += "<" + someText[i].tagName.toLowerCase() +">" + someText[i].innerHTML + "</" + someText[i].tagName.toLowerCase() + ">" + "\n";
         //                 }

//The same code with previous (for):
        [].forEach.call(someText, function (item) {
             dftE.ta.value += "<" + item.tagName.toLowerCase() + ">" + item.innerHTML + "</" + item.tagName.toLowerCase() + ">" + "\n";
         });

     }


//makes text bold:
     getId("textBold").onclick = function () {
         if (getId("textBold").className == "buttons bold") {
             getId("text").classList.add("textBold");
             getId("textBold").classList.remove("bold");
             getId("headerForm").classList.add("m-top-1");
         } else if (getId("textBold").className != "bold") {
             getId("text").classList.remove("textBold");
             getId("textBold").classList.add("bold");
             getId("headerForm").classList.remove("m-top-1");
         }
     }

//makes text italic:
     getId("textItalic").onclick = function () {
         if (getId("textItalic").className == "buttons italic") {
             getId("text").classList.add("italic");
             getId("textItalic").classList.remove("italic");
         } else if (getId("textItalic").className != "bold") {
             getId("text").classList.remove("italic");
             getId("textItalic").classList.add("italic");
         }
     }

//makes text underline:
     getId("textUnder").onclick = function () {
         if (getId("textUnder").className == "buttons underline") {
             getId("text").classList.add("underline");
             getId("textUnder").classList.remove("underline");
         } else if (getId("textUnder").className != "underline") {
             getId("text").classList.remove("underline");
             getId("textUnder").classList.add("underline");
         }
     }

//Text-size:
     var selectForm = dfH.fontSelect;
     selectForm.onchange = function () {
         for (var i = 0; i < selectForm.options.length; i++) {
             var option = selectForm.options[i];
             if (option.selected) {
                 getId("text").style.fontSize = option.value;
             }
         }
     }


//Text color:
     getId("textColor").onclick = function () {
         getId("textColor").addEventListener("input", function () {
             var color = getId("textColor").value;
             getId("text").style.color = color;
         }, false);
     }


//Choose background color or image:
     if (getId("rbBgC").checked == true) {
         getId("bgColor").classList.remove("hiddenForm");
         getId("chooseImage").classList.add("hiddenForm");
     }
     getId("rbBgC").onchange = function () {
         getId("bgColor").classList.remove("hiddenForm");
         getId("chooseImage").classList.add("hiddenForm");
     }
     getId("rbBgImg").onchange = function () {
         getId("chooseImage").classList.remove("hiddenForm");
         getId("bgColor").classList.add("hiddenForm");
     }


//Background color in HEX format + transparent:
     getId("bgColor").onclick = function () {
         getId("bgColor").addEventListener("input", function () {
             var color = getId("bgColor").value;
             getId("section").style.background = "linear-gradient(to top, " + color + "80" + ", #ffffff)";
             dftE.ta.style.background = "linear-gradient(to top, " + color + "80" + ", #ffffff)";
             getId("tableMenu").style.background = "linear-gradient(to top, " + color + "e6" + ", #ffffff)";
             getId("listMenu").style.background = "linear-gradient(to top, " + color + "e6" + ", #ffffff)";
         }, false);
     }


//Get background image from the <input type="file">:
     //        var onFilePicked = function(el, callback, opts) {
     //            opts = opts || {}
     //            var delayedCallback = function(url) {
     //                setTimeout(function() {callback(url)}, 0);
     //            }
     //            
     //            el.onchange = el.onmouseout = function(event) {
     //                if (typeof(FileReader)!='undefined') {
     //                    //HTML5 FileAPI
     //                    var reader = new FileReader();
     //                    reader.onload = function(e){
     //                        delayedCallback(e.target.result);
     //                    }
     //                    reader.readAsDataURL(el.files.item(0));
     //                } else if (el.files && el.files.item(0).getAsDataURL) {
     //                    // Firefox 3.0-3.6
     //                    var dataurl = el.files.item(0).getAsDataURL();
     //                    delayedCallback(dataurl);
     //                } else if (el.files && !el.files.item(0).getAsDataURL) {
     //                    //Safari and webkit not supported now
     //                    //FIXME is there a way to support Safari?
     //                    callback(null)
     //                } else {
     //                    //IE!!!!
     //                    //FIXME won't work if the site is hosted outside the Trusted Zone
     //                    delayedCallback(el.value);
     //                }
     //            }
     //        };
     //        onFilePicked(document.getElementById('bgImage'), function(url) {
     //            getId("section").style.background = "url(" + url + ")";
     //            dftE.ta.style.background = "url(" + url + ")";
     //        })


//Same with previous:

     getId("bgImage").onchange = previewFile;

     function previewFile() {
         var preview = document.querySelector('img');
         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader();

         reader.onloadend = function () {
             let imageUrl = reader.result;
             document.getElementById("section").style.background = "url(" + imageUrl + ")";
             document.forms["textEdit"].ta.style.background = "url(" + imageUrl + ")";
         }

         if (file) {
             reader.readAsDataURL(file);
         } else {
             preview.src = "file";
         }
     }


//text alignment:
     getId("rbL").onchange = function () {
         getId("section").classList.remove("txtAlignR");
         getId("section").classList.remove("txtAlignC");
         getId("section").classList.add("txtAlignL");
     }
     getId("rbC").onchange = function () {
         getId("section").classList.remove("txtAlignR");
         getId("section").classList.add("txtAlignC");
         getId("section").classList.remove("txtAlignL");
     }
     getId("rbR").onchange = function () {
         getId("section").classList.add("txtAlignR");
         getId("section").classList.remove("txtAlignC");
         getId("section").classList.remove("txtAlignL");
     }


//Save key action:
     dfE.btnS.onclick = function () {
         var ta = dftE.ta.value;
         if (ta == "") {
             alert("Enter some text");
         } else {
             getId("text").innerHTML = ta + " ";
             dftE.ta.value = "";
         }
         dfE.classList.add("hiddenForm");
         dfH.classList.remove("hiddenForm");
         dftE.classList.add("hiddenForm");
         getId("section").classList.remove("hiddenForm");
         getId("tableMenu").classList.add("hiddenForm");
         getId("listMenu").classList.add("hiddenForm");
     }


//Show table:
     dfE.btnT.onclick = function () {
         getId("tableMenu").classList.remove("hiddenForm");
         getId("listMenu").classList.add("hiddenForm");
     }

//Show list:
     dfE.btnL.onclick = function () {
         getId("listMenu").classList.remove("hiddenForm");
         getId("tableMenu").classList.add("hiddenForm");
     }


//Hide table and list:
     dftE.ta.onclick = function () {
         getId("tableMenu").classList.add("hiddenForm");
         getId("listMenu").classList.add("hiddenForm");
     }


//Customize and add table:
     var tableLineNumber = getId("tableLines");
     var tableColunmNumber = getId("tableColunms");
     var tableCellWidth = getId("tableCellWidth");
     var tableCellHeight = getId("tableCellHeight");
     var tableBorderWidth = getId("tableBorderWidth");
     var tableBorderStyle = getId("tableBorderStyle");
     var tableBorderColor = getId("tableBorderColor");
     var tableBorderSpacing = getId("tableBorderSpacing");

     getId("btnCreateTable").onclick = function () {
//if tableLineNumber or tableColunmNumber are empty - it closes customization menu
         if (tableLineNumber.value == "" || tableColunmNumber.value == "") {
             getId("tableMenu").classList.add("hiddenForm");
//else - create customized table
         } else {
             getId("tableMenu").classList.add("hiddenForm");
             dftE.ta.value += ('<table style="border-spacing:' + tableBorderSpacing.value + 'px">' + ' ');
             for (var i = 1; i <= tableLineNumber.value; i++) {
                 dftE.ta.value += ('<tr>');
                 for (var j = 1; j <= tableColunmNumber.value; j++) {
                     dftE.ta.value += ('<td style="border:' + tableBorderWidth.value + 'px ' + tableBorderStyle.value + ' ' + tableBorderColor.value + '; height: ' + tableCellHeight.value + 'px; ' + 'width: ' + tableCellWidth.value + '">' + "Some text" + '</td>' + ' ');
                 }
                 dftE.ta.value += ('</tr>');
             }
             tableLineNumber.value = ""; // clear tableLineNumber
             tableColunmNumber.value = ""; // clear tableColunmNumber
             dftE.ta.value += ('</table>');
         }

     }

//Clear table button action:
     getId("btnClearTable").onclick = function () {
         tableLineNumber.value = "";
         tableColunmNumber.value = "";
         tableCellHeight.value = "";
         tableCellWidth.value = "";
         tableBorderSpacing.value = "0";
         tableBorderWidth.value = "1";
         tableBorderStyle.value = "Solid";
         tableBorderColor.value = "#000000";
     }


//Customize and add list
     var listStyle = getId("listStyle");
     var listAmount = getId("listAmount");
     var ulMarkers = getId("ulMarkers");
     var olMarkers = getId("olMarkers");
     var amount = getId("listAmount");
     var listStyle = getId("listStyle");
     var markers;

     getId("btnCreateList").onclick = function () {
// if number of elements is empty - it closes customization menu
         if (amount.value == "") {
             getId("listMenu").classList.add("hiddenForm");;
//else - create customized list
         } else {
             dftE.ta.value += '<' + listStyle.value + '>';
//check what list-style add ol or ul:
             for (var i = 1; i <= amount.value; i++) {
                 if (listStyle.value == "ul") {
                 markers = ulMarkers.value;
             } else {
                 markers = olMarkers.value;
             }
                 dftE.ta.value += ('<li style="list-style: ' + markers + '">' + "Some text" + '</li>' + ' ');
             }
             dftE.ta.value += '<' + listStyle.value + '>';
             amount.value = ""; // clear list amount number

             getId("listMenu").classList.add("hiddenForm");
         }

     }

//Change list type:
     listStyle.onclick = function () {
         if (listStyle.value == "ul") {
             getId("ulMarkers").classList.remove("hiddenForm");
             getId("olMarkers").classList.add("hiddenForm");
         } else {
             getId("ulMarkers").classList.add("hiddenForm");
             getId("olMarkers").classList.remove("hiddenForm");
         }
     }


//Clear list button action:
     getId("btnClearList").onclick = function () {
         listStyle.value = "ul";
         ulMarkers.classList.remove("hiddenForm");
         ulMarkers.value = "Circle";
         olMarkers.classList.add("hiddenForm");
         olMarkers.value = "decimal";
         listAmount.value = "";
     }
