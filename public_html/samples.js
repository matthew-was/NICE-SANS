
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

        //name, description, thickness, mass
        // don't forget sample aperture.

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

                sNRowN = "<tr><td class='sCol1'>" + j + "</td><td class='sCol2'><input type=text class='sic2' onchange='getSamples()' /></td></tr>",
                sDRowN = "<tr><td class='dCol3'><input type=text class='dic3' value=1 /></td><td class='dCol4'><input type=text class='dic4'/></td><td class='dCol5'><input type=text class='dic5'/></td></tr>",
                sTRowN = "<tr><td class='tcol3'><input type=text class='tbox' class='tbox3' value=0 /></td><td class='tcol4'><input type=checkbox class='cbox' class='tbox4'/></td><td class='tcol5'><input type=text class='tbox' class='tbox5' value=0 /></td><td class='tcol6'><input type=checkbox class='cbox' class='tbox6'/></td><td class='tcol7'><input type=text class='tbox' class='tbox7' value=0 /></td><td class='tcol8'><input type=checkbox class='cbox' class='tbox8'/></td></tr>";
            sNTable.insertRow(j + 1).innerHTML = sNRowN;
            sDTable.insertRow(j + 1).innerHTML = sDRowN;
            sTTable.insertRow(j + 1).innerHTML = sTRowN;
        }

        var sdButtonRow = "<tr><td class='dbCol3'><input type=button class='dbtn3' value='Fill' onclick=fillButton(this.className) /></td><td class='dbCol4'><input type=button class='dbtn4' value='Fill' onclick=fillButton(this.className) /></td></tr>"
//        var stButtonRow1 = "<tr><td class='tbCol3'><input type=button id ='fbtn' class='fbtn3' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol4'><input type=button id ='fbtn' class='fbtn4' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol5'><input type=button id ='fbtn' class='fbtn5' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol6'><input type=button id ='fbtn' class='fbtn6' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol7'><input type=button id ='fbtn' class='fbtn7' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol8'><input type=button id ='fbtn' class='fbtn8' value='Fill' onclick=fillButton(this.className) /></td></tr>"
        var stButtonRow2 = "<tr><td class='tbCol3'><input type=button class='hbtn3' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol4'><input type=button class='hbtn4' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol5'><input type=button class='hbtn5' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol6'><input type=button class='hbtn6' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol7'><input type=button class='hbtn7' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol8'><input type=button class='hbtn8' value='Hide' onclick=hideButton(this.className) /></td></tr>";
        sDTable.insertRow(numSamps + 2).innerHTML = sdButtonRow;
        //sTTable.insertRow(numSamps + 2).innerHTML = stButtonRow1;
        sTTable.insertRow(numSamps + 2).innerHTML = stButtonRow2;

        $('.sic2').change(function () {
            updateRunList();
        });

        $('.tbox').change(function () {
            updateRunList();
        });
    };

    getSamples = function () {
        var samCol = document.getElementsByClassName('sic2');
        var samNames = [];
        var i;
        for (i = 0; i < samCol.length; i += 1) {
            samNames[i] = samCol[i].value;
        }
        localStorage.samNames = samNames;
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
            var col = document.getElementsByClassName('tbox');
            var sval = parseFloat(llet) - 3;
            var i = sval;
            for (i; i < col.length; i += 6) {
                col[i].value = col[sval].value;
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

    updateRunList = function() {

        var configsNum = document.getElementById('sampTimes').rows[1].cells.length;
        var configs = [];
        for (var i = 0; i < configsNum; i += 1) {
            configs[i] = document.getElementById('sampTimes').rows[1].cells[i].innerHTML;
        }

        var sampNum = document.getElementsByClassName('sic2').length;
        var samples = [];
        for (var j = 0; j < sampNum; j += 1) {
            samples[j] = document.getElementsByClassName('sic2')[j].value;
        }

        var tempValue = "-";
        if (document.getElementById('tempCheck').checked === true) {
            tempValue = document.getElementById('tempVal').value;
        }

        var confLine = "<table><tr><td class='lCol1'>#</td><td class='lCol2'>Name</td><td class='lCol3'>Config</td><td class='lCol4'>Time</td><td class='lCol5'>T</td></tr></table>";
        var sampLine = "";
        var list = "";
        var totTime = 0;
        var colTime = 0;
        var m = 0;
        var n = 1;
        var li;
        var newli;
        var pl = document.getElementById("pList");
        var rl = document.getElementById("rList");
        $("#pList").empty();
        for (var k = 0; k < configs.length; k += 1) {
            for (var l = 0; l < samples.length; l += 1) {
                var m = k + (l * 6);
                var pointTime = document.getElementsByClassName('tbox')[m].value;
                if(pointTime === "") {
                    document.getElementsByClassName('tbox')[m].value = 0;               
                    pointTime = document.getElementsByClassName('tbox')[m].value;
                }
                if (n === 1 && parseFloat(pointTime) !== 0) {
                    newli="";
                    newli = document.createElement("li");
                    li = "";
                    li = newli.innerHTML = confLine;
                    pl.appendChild(newli);
                }
                if ($('#rList li').length === 0 && $('#pList li').length !== 0) {
                    newli="";
                    newli = document.createElement("li");
                    li = "";
                    li = newli.innerHTML = confLine;
                    newli.setAttribute("class", "no-sort");
                    rl.appendChild(newli);
                }
                if (parseFloat(pointTime) !== 0) {
                    sampLine = "<table><tr><td class='lCol1'>"+n+"</td><td class='lCol2'>"+samples[l]+"</td><td class='lCol3'>"+configs[k]+"</td><td class='lCol4'>"+pointTime+"</td><td class='lCol5'>"+tempValue+"</td><td class='lCol6'><input onclick=delBtn(this) type=button value='-'/></td></tr><table>";
                    newli = "";
                    newli = document.createElement("li");
                    newli.setAttribute("class", "drag");
                    li = "";
                    li = newli.innerHTML = sampLine;
                    pl.appendChild(newli);
                    colTime = colTime + parseFloat(pointTime);
                    totTime = totTime + parseFloat(pointTime);
                    n  += 1;
                }
            }
        }

        document.getElementById('countTime').innerHTML = totTime;

        makeDraggable();

    };
    
    updateSelectList = function() {
        var index = document.getElementById('choice').selectedIndex;
        var selected;
        switch (index) {
            case 0:
                selected = "none";
                break;
            case 1:
                selected = "temp";
                break;
            case 2:
                selected = "mag";
                break;
            case 3:
                selected = "both";
                break;
        }

        var templine1 = "<tr><td colspan=3 id='selHead'>Temperature</td></tr>";
        var templine2 = "<tr><td>Set Temperature to </td><td><input type='number' id='advTemp'/></td><td><input type='button' id='advTPush' value='->'/></td></tr>";
        var templine3 = "<tr><td>Wait for Temperature Equilibration</td><td><input type='number' id='advTHold'/></td><td><input type='button' id='advTHPush' value='->'/></td></tr>";
        var templine4 = "<tr></tr>";

        var magline1 = "<tr><td colspan=3 id='selHead'>Magnetic Field</td></tr>";
        var magline2 = "<tr><td>Set Magnetic Field to </td><td><input type='number' id='advMag'/></td><td><input type='button' id=advMPush value='->'/></td></tr>";
        var magline3 = "<tr><td>Wait for Magnet Equilibration</td><td><input type='number' id='advMHold'/></td><td><input type='button' id='advMHPush' value='->'/></td></tr>";
        var magline4 = "<tr></tr>";

        var confline1 = "<tr><td colspan=3 id='selHead'>Configuration</td></tr>";
        var confline2 = "<tr><td>Choose Configurations to Run</td><td><input type='text' id='advConf' /></td><td><input type='button' id=advCPush value='->'/></td></tr>";
        var confline3 = "<tr><td</tr>";

        var sampline1 = "<tr><td colspan=3 id='selHead'>Sample</td></tr>";
        var sampline2 = "<tr><td>Choose Which Samples to Run (by Index)</td><td><input type='text' id='advSamp' /></td><td><input type='button' id=advSPush value='->'/></td></tr>";
        var sampline3 = "<tr><td colspan=3 id='selBottom'></td></tr>";

        var selTable = document.getElementById('selectTable');
        var selRows = selTable.rows.length;

        if (selRows !== 0) {
            for (var i = 0; i < selRows; i += 1) {
                selTable.deleteRow();
            }
        }
        var csNum;
        if (selected === "none") {
            csNum = 0;
        } else if (selected === "temp") {
            csNum = 4;
            selTable.insertRow(0).innerHTML = templine1;
            selTable.insertRow(1).innerHTML = templine2;
            selTable.insertRow(2).innerHTML = templine3;
            selTable.insertRow(3).innerHTML = templine4;
        } else if (selected === "mag") {
            csNum = 4;
            selTable.insertRow(0).innerHTML = magline1;
            selTable.insertRow(1).innerHTML = magline2;
            selTable.insertRow(2).innerHTML = magline3;
            selTable.insertRow(3).innerHTML = magline4;
        } else if (selected === "both") {
            csNum = 8;
            selTable.insertRow(0).innerHTML = templine1;
            selTable.insertRow(1).innerHTML = templine2;
            selTable.insertRow(2).innerHTML = templine3;
            selTable.insertRow(3).innerHTML = templine4;
            selTable.insertRow(4).innerHTML = magline1;
            selTable.insertRow(5).innerHTML = magline2;
            selTable.insertRow(6).innerHTML = magline3;
            selTable.insertRow(7).innerHTML = magline4;
        }

        selTable.insertRow(csNum).innerHTML = confline1;
        selTable.insertRow(csNum + 1).innerHTML = confline2;
        selTable.insertRow(csNum + 2).innerHTML = confline3;
        selTable.insertRow(csNum + 3).innerHTML = sampline1;
        selTable.insertRow(csNum + 4).innerHTML = sampline2;
        selTable.insertRow(csNum + 5).innerHTML = sampline3;

        $('#advConf').focus(function() {
            writeSHelp(this.id);
        });

        $('#advConf').blur(function() {
            clearSHelp();
        });

        $('#advSamp').focus(function() {
            writeSHelp(this.id);
        });

        $('#advSamp').blur(function() {
            clearSHelp();
        });

        $('#advTPush').click(function(event) {
            pushinfo(this.id);
        });

        $('#advTHPush').click(function(event) {
            pushinfo(this.id);
        });

        $('#advMPush').click(function(event) {
            pushinfo(this.id);
        });

        $('#advMHPush').click(function(event) {
            pushinfo(this.id);
        });

        $('#advCPush').click(function(event) {
            pushinfo(this.id);
        });

        $('#advSPush').click(function(event) {
            pushinfo(this.id);
        });

    };

    writeSHelp = function(input) {
        var helpArea = document.getElementById('sHelp');

        switch (input) {
            case "advConf":
                helpArea.innerHTML = "Available Configurations are:<br>1.1m5<br>1.1m5t<br>5m5<br>5m5t<br>5m14<br>5m14t";
                break;
            case "advSamp":
                helpArea.innerHTML = "Available Samples are<br><table id='sampHelp'><tr><th>Index</th><th>Sample Name</th></tr><tr><td>1</td><td>Sample 1</td></tr><tr><td>2</td><td>Sample 2</td></tr><tr><td>3</td><td>Sample 3</td></tr><tr><td>4</td><td>Sample 4</td></tr><tr><td>5</td><td>Sample 5</td></tr><tr><td>6</td><td>Sample 6</td></tr><tr><td>7</td><td>Sample 7</td></tr><tr><td>8</td><td>Sample 8</td></tr><tr><td>9</td><td>Sample 9</td></tr><tr><td>10</td><td>Sample 10</td></tr></table>";
        }

//        var selHeight = $('#selector').height();
//        var selHelpHeight = $('#selectorHelp').height();
//        if (selHeight > selHelpHeight) {
//            $('#list').height(selHeight);
//        } else {
//            $('#list').height(selHelpHeight);
//        }
    };

    clearSHelp = function() {
        var confHelp = document.getElementById('sHelp');
        confHelp.innerHTML = "";
//        var selHeight = $('#selector').height();
//        var selHelpHeight = $('#selectorHelp').height();
//        if (selHeight > selHelpHeight) {
//            $('#list').height(selHeight);
//        } else {
//            $('#list').height(selHelpHeight);
//        }
    };

    pushinfo = function(buttonId) {
        var lineinfo;

        switch (buttonId) {
            case "advTPush":
                lineinfo = "Set Temperature to " + document.getElementById('advTemp').value + "°C.<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advTHPush":
                lineinfo = "Hold for " + document.getElementById('advTHold').value + " seconds.<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advMPush":
                lineinfo = "Set Magnetic Field to " + document.getElementById('advMag').value + ".<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advMHPush":
                lineinfo = "Hold for " + document.getElementById('advMHold').value + " seconds.<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advCPush":
                lineinfo = "Run at configuration(s) " + document.getElementById('advConf').value + "<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advSPush":
                lineinfo = "Measure sample(s) " + document.getElementById('advSamp').value + "<input type='button' class='delLi' value='Delete'/>";
                break;
        }

        var list = document.getElementById('runList');
        var newLi = document.createElement("LI");
        list.appendChild(newLi);
        newLi.innerHTML = lineinfo;

        $('.delLi').click(function() {
            $(this).parent().remove();
        });
    };

});
