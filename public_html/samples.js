
$(function () {

    drawTable = function () {
        var option = document.getElementById('changer'),
            optTxt = option.options[option.selectedIndex].text,
            i,
            numSamps;
        if (optTxt === "10CB") {
            numSamps = 10;
        } else if (optTxt === "9P") {
            numSamps = 9;
        } else if (optTxt === "7HB") {
            numSamps = 7;
        }

        var sNTable = document.getElementById('sampNames'),
            nRowNum = sNTable.rows.length;
        if (nRowNum !== 0) {
            for (i = 0; i < nRowNum; i += 1) {
                sNTable.deleteRow();
            }
        }

        var sDTable = document.getElementById('sampDetail'),
            dRowNum = sDTable.rows.length;
        if (dRowNum !== 0) {
            for (i = 0; i < dRowNum; i += 1) {
                sDTable.deleteRow();
            }
        }

        var sTTable = document.getElementById('sampTimes'),
            tRowNum = sTTable.rows.length;
        if (tRowNum !== 0) {
            for (i = 0; i < tRowNum; i += 1) {
                sTTable.deleteRow();
            }
        }

        var sNRow0 = "<tr><th colspan=2>Sample</th></tr>",
            sNRow1 = "<tr><td id='row1' class='col1'></td><td class='col2'>Name</td></tr>",
            sDRow0 = "<tr><th colspan=3>Details</th></tr>",
            sDRow1 = "<tr><td id='row1' class='col3' >Thickness (mm)</td><td class='col4'>Mass (g)</td><td class='col5'>Description</td></tr>",
            sTRow0 = "<tr><th colspan=6>Times</th></tr>",
            sTRow1 = "<tr><td id='row1'>1.1m5</td><td>1.1m5t</td><td>5m5</td><td>5m5t</td><td>5m14</td><td>5m14t</td></tr>";
        sNTable.insertRow(0).innerHTML = sNRow0;
        sNTable.insertRow(1).innerHTML = sNRow1;
        sDTable.insertRow(0).innerHTML = sDRow0;
        sDTable.insertRow(1).innerHTML = sDRow1;
        sTTable.insertRow(0).innerHTML = sTRow0;
        sTTable.insertRow(1).innerHTML = sTRow1;

        for (i = 0; i < numSamps; i += 1) {
            var j = i + 1,

                sNRowN = "<tr><td class='sCol1'>" + j + "</td><td class='sCol2'><input type=text class='sic2' /></td></tr>",
                sDRowN = "<tr><td class='dCol3'><input type=text class='dic3' value=1 /></td><td class='dCol4'><input type=text value=0.4 class='dic4'/></td><td class='dCol5'><input type=text class='dic5'/></td></tr>",
                sTRowN = "<tr><td class='tcol3'><input type=text class='tbox tbox3' value=0 /></td><td class='tcol4'><input type=checkbox class='cbox tbox4'/></td><td class='tcol5'><input type=text class='tbox tbox5' value=0 /></td><td class='tcol6'><input type=checkbox class='cbox tbox6'/></td><td class='tcol7'><input type=text class='tbox tbox7' value=0 /></td><td class='tcol8'><input type=checkbox class='cbox tbox8'/></td></tr>";
            sNTable.insertRow(j + 1).innerHTML = sNRowN;
            sDTable.insertRow(j + 1).innerHTML = sDRowN;
            sTTable.insertRow(j + 1).innerHTML = sTRowN;
        }

        var sdButtonRow = "<tr><td class='dbCol3'><input type=button class='dbtn3' value='Fill' onclick=fillButton(this.className) /></td><td class='dbCol4'><input type=button class='dbtn4' value='Fill' onclick=fillButton(this.className) /></td></tr>"
        var stButtonRow1 = "<tr><td class='tbCol3'><input type=button id ='fbtn' class='fbtn3' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol4'><input type=button id ='fbtn' class='fbtn4' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol5'><input type=button id ='fbtn' class='fbtn5' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol6'><input type=button id ='fbtn' class='fbtn6' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol7'><input type=button id ='fbtn' class='fbtn7' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol8'><input type=button id ='fbtn' class='fbtn8' value='Fill' onclick=fillButton(this.className) /></td></tr>"
        var stButtonRow2 = "<tr><td class='tbCol3'><input type=button class='hbtn3' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol4'><input type=button class='hbtn4' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol5'><input type=button class='hbtn5' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol6'><input type=button class='hbtn6' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol7'><input type=button class='hbtn7' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol8'><input type=button class='hbtn8' value='Hide' onclick=hideButton(this.className) /></td></tr>";
        sDTable.insertRow(numSamps + 2).innerHTML = sdButtonRow;
        sTTable.insertRow(numSamps + 2).innerHTML = stButtonRow1;
        sTTable.insertRow(numSamps + 3).innerHTML = stButtonRow2;

    };

    fillButton = function (ref) {
        var flet = ref[0];
        var llet = ref[ref.length - 1];

        if (flet === "d") {
            var clssNme = "dic" + llet;
            var i;
            var col = document.getElementsByClassName(clssNme);
            for (i = 0; i < col.length; i += 1) {
                col[i].value = col[0].value;
            }
        } else if (flet === "f") {
            var tlet = "tbox"+llet,
                telem = document.getElementsByClassName(tlet);
            
            if (telem[0].type == "checkbox") {
                for (var i = 1; i < telem.length; i += 1) {
                    telem[i].checked = telem[0].checked;
                }                
            } else if (telem[0].type == "text") {
                for (var i = 1; i < telem.length; i += 1) {
                    telem[i].value = telem[0].value;
                }
            }
        }
    };


    hideButton = function(ref) {
        var llet = ref[ref.length - 1];
        var btn = document.getElementsByClassName(ref);
        var clssNme = "tcol" + llet;
        var col = document.getElementsByClassName(clssNme);
        
        if (btn[0].value === "Hide") {
            for (var i = 0; i < col.length; i += 1) {
                if(col[i].firstChild.type === "text") {
                    col[i].firstChild.value = 0;
                    col[i].firstChild.hidden = true;
                } else if (col[i].firstChild.type === "checkbox") {
                    col[i].firstChild.checked = false;
                    col[i].firstChild.hidden = true;
                }
            }
            btn[0].value = "Show";
        } else if (btn[0].value === "Show") {
            for (var i = 0; i < col.length; i += 1) {
                if(col[i].firstChild.type === "text") {
                    col[i].firstChild.hidden = false;
                } else if (col[i].firstChild.type === "checkbox") {
                    col[i].firstChild.hidden = false;
                }
            }
            btn[0].value = "Hide";
        }
    };

 
});
