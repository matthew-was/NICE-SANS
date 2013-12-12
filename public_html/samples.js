
$( function() {
    
    drawTable = function() {
        var option = document.getElementById('changer');
        var optTxt = option.options[option.selectedIndex].text;
        
        var numSamps;
        if (optTxt === "10CB") {
            numSamps = 10;
        } else if (optTxt === "9P") {
            numSamps = 9;            
        } else if (optTxt === "7HB") {
            numSamps = 7;            
        };
        
        var sNTable = document.getElementById('sampNames');
        var nRowNum = sNTable.rows.length;
        if (nRowNum !== 0){
            for( var i = 0; i<nRowNum; i++) {
                sNTable.deleteRow();
            }
        }

        var sDTable = document.getElementById('sampDetail');
        var dRowNum = sDTable.rows.length;
        if (dRowNum !== 0){
            for( var i = 0; i<dRowNum; i++) {
                sDTable.deleteRow();
            }
        }

        var sTTable = document.getElementById('sampTimes');
        var tRowNum = sTTable.rows.length;
        if (tRowNum !== 0){
            for( var i = 0; i<tRowNum; i++) {
                sTTable.deleteRow();
            }
        }

        //name, description, thickness, mass
        // don't forget sample aperture.
        
        var sNRow0 = "<tr><th colspan=2>Sample</th></tr>";
        var sNRow1 = "<tr><td id='row1' class='col1'></td><td class='col2'>Name</td></tr>";
        var sDRow0 = "<tr><th colspan=3>Details</th></tr>";
        var sDRow1 = "<tr><td id='row1' class='col3' >Thickness (mm)</td><td class='col4'>Aperture (mm)</td><td class='col5'>Description</td><td class='col6'>Mass (g)</td></tr>";
        var sTRow0 = "<tr><th colspan=6>Times</th></tr>";
        var sTRow1 = "<tr><td id='row1'>1.1m5</td><td>1.1m5t</td><td>5m5</td><td>5m5t</td><td>5m14</td><td>5m14t</td></tr>";
        sNTable.insertRow(0).innerHTML = sNRow0;
        sNTable.insertRow(1).innerHTML = sNRow1;
        sDTable.insertRow(0).innerHTML = sDRow0;
        sDTable.insertRow(1).innerHTML = sDRow1;
        sTTable.insertRow(0).innerHTML = sTRow0;
        sTTable.insertRow(1).innerHTML = sTRow1;
        
        for (var i=0; i<numSamps; i++) {
            var j = i;
            
            var sNRowN = "<tr><td class='sCol1'>"+j+"</td><td class='sCol2'><input type=text class='sic2' onchange='getSamples()' /></td></tr>";
            var sDRowN = "<tr><td class='dCol3'><input type=text class='dic3' value=1 /></td><td class='dCol4'><input type=text class='dic4' value=12.7 /></td><td class='dCol5'><input type=text class='dic5'/></td><td class='dCol6'><input type=text class='dic6'/></td></tr>";
            var sTRowN = "<tr><td><input type=text id='tbox' class='tbox3' value=0 /></td><td><input type=text id='tbox' class='tbox4' value=0 /></td><td><input type=text id='tbox' class='tbox5' value=0 /></td><td><input type=text id='tbox' class='tbox6' value=0 /></td><td><input type=text id='tbox' class='tbox7' value=0 /></td><td><input type=text id='tbox' class='tbox8' value=0 /></td></tr>";
            sNTable.insertRow(j+2).innerHTML = sNRowN;
            sDTable.insertRow(j+2).innerHTML = sDRowN;
            sTTable.insertRow(j+2).innerHTML = sTRowN;
        }
        
        var sdButtonRow = "<tr><td class='dbCol3'><input type=button class='dbtn3' value='Fill' onclick=fillButton(this.className) /></td><td class='dbCol4'><input type=button class='dbtn4' value='Fill' onclick=fillButton(this.className) /></td></tr>";
        var stButtonRow1 = "<tr><td class='tbCol3'><input type=button id ='fbtn' class='fbtn3' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol4'><input type=button id ='fbtn' class='fbtn4' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol5'><input type=button id ='fbtn' class='fbtn5' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol6'><input type=button id ='fbtn' class='fbtn6' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol7'><input type=button id ='fbtn' class='fbtn7' value='Fill' onclick=fillButton(this.className) /></td><td class='tbCol8'><input type=button id ='fbtn' class='fbtn8' value='Fill' onclick=fillButton(this.className) /></td></tr>";
        var stButtonRow2 = "<tr><td class='tbCol3'><input type=button class='hbtn3' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol4'><input type=button class='hbtn4' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol5'><input type=button class='hbtn5' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol6'><input type=button class='hbtn6' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol7'><input type=button class='hbtn7' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol8'><input type=button class='hbtn8' value='Hide' onclick=hideButton(this.className) /></td></tr>";
        sDTable.insertRow(numSamps+2).innerHTML = sdButtonRow;
        sTTable.insertRow(numSamps+2).innerHTML = stButtonRow1;
        sTTable.insertRow(numSamps+3).innerHTML = stButtonRow2;
    };
    
    getSamples = function() {
        var samCol = document.getElementsByClassName('sic2');
        var samNames = [];
        for (var i=0; i<samCol.length; i++) {
            samNames[i] = samCol[i].value;
        }
        localStorage.samNames = samNames;
    };
    
    fillButton = function(ref) {
        var flet = ref[0];
        var llet = ref[ref.length-1];
        
        if (flet === "d") {
            var clssNme = "dic"+llet;
        } else if (flet === "f") {
            clssNme = "tbox"+llet;
        }
        
        var col = document.getElementsByClassName(clssNme);
        for (var i=0;i<col.length; i++) {
            col[i].value = col[0].value;
        };

    };
    
    
    hideButton = function(ref) {
        var llet = ref[ref.length-1];
        var btn = document.getElementsByClassName(ref);
        var clssNme = "tbox"+llet;
        var col = document.getElementsByClassName(clssNme);

        if (btn[0].value === "Hide") {
            for (var i=0; i<col.length; i++) {
                col[i].value = 0;
                col[i].hidden = true;
            }
            btn[0].value="Show";
        } else if (btn[0].value === "Show") {
            for (var i=0; i<col.length; i++) {
                col[i].hidden = false;
            }
            btn[0].value="Hide";
        }
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
            for (var i = 0; i < selRows; i++) {
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
        selTable.insertRow(csNum+1).innerHTML = confline2;
        selTable.insertRow(csNum+2).innerHTML = confline3;
        selTable.insertRow(csNum+3).innerHTML = sampline1;
        selTable.insertRow(csNum+4).innerHTML = sampline2;
        selTable.insertRow(csNum+5).innerHTML = sampline3;
                
//        var selHeight = $('#selector').height();
//        var selHelpHeight = $('#selectorHelp').height();
//        if (selHeight > selHelpHeight) {
//            $('#list').height(selHeight);
//        } else {
//            $('#list').height(selHelpHeight);
//        }

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
        
        $('#advTPush').click(function(event){
            pushinfo(this.id);
        });

        $('#advTHPush').click(function(event){
            pushinfo(this.id);
        });

        $('#advMPush').click(function(event){
            pushinfo(this.id);
        });

        $('#advMHPush').click(function(event){
            pushinfo(this.id);
        });

        $('#advCPush').click(function(event){
            pushinfo(this.id);
        });

        $('#advSPush').click(function(event){
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
                lineinfo = "Hold for " +document.getElementById('advTHold').value + " seconds.<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advMPush":
                lineinfo = "Set Magnetic Field to " +document.getElementById('advMag').value + ".<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advMHPush":
                lineinfo = "Hold for " +document.getElementById('advMHold').value + " seconds.<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advCPush":
                lineinfo = "Run at configuration(s) " +document.getElementById('advConf').value + "<input type='button' class='delLi' value='Delete'/>";
                break;
            case "advSPush":
                lineinfo = "Measure sample(s) " +document.getElementById('advSamp').value + "<input type='button' class='delLi' value='Delete'/>";
                break;
        }
        
        var list = document.getElementById('runList');
        var newLi = document.createElement("LI");
        list.appendChild(newLi);
        newLi.innerHTML = lineinfo;
        
        $('.delLi').click(function(){
            $(this).parent().remove();
        });
    };
    
});
