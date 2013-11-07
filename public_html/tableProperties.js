/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    
    setTable = function(object) {
        var start = "<tr>";
        var end = "</tr>";
        var name = "<td><input type='text' id='name' value="+object.name+" /></td>";
        var wl = "<td><input type='text'value=" + object.wavelength + " /></td>";
        var wlS = "<td><input type='text' value=" + object.wavelengthSpread + " /></td>";
        var att = "<td><input type='text' value=" + object.attenuator + " /></td>";
        var guide = "<td><input type='text' value=" + object.guides + " /></td>";
        var guideAp = "<td><input type='text' value=" + object.guideAperture + " /></td>";
        var bStop = "<td><input type='text' value=" + object.beamStop + " /></td>";
        var bStopX = "<td><input type='text' value=" + object.beamStopX + " /></td>";
        var bStopY = "<td><input type='text' value=" + object.beamStopY + " /></td>";
        var bCentX = "<td><input type='text' value=" + object.beamCenterX + " /></td>";
        var bCentY = "<td><input type='text' value=" + object.beamCenterY + " /></td>";
        var detPos = "<td><input type='text' value=" + object.detectorPosition + " /></td>";
        var detOff = "<td><input type='text' value=" + object.detectorOffset + " /></td></tr>";
        return start+name+wl+wlS+att+guide+guideAp+bStop+bStopX+bStopY+bCentX+bCentY+detPos+detOff+end;
    };
    
});
