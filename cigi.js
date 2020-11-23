$(document).ready(function(){

    $("#gomb").click(function(){

        var adatok=
        {
            bevitel1:$("#bevitel1").val(),
            bevitel2:$("#bevitel2").val(),
            bevitel3:$("#bevitel3").val()
        }
        //alert(adatok.bevitel1);
        //alert(adatok.bevitel2);
        //alert(adatok.bevitel3);
        var hibakszama=0;
	if ($("#bevitel1").val()=="")
	{
		$("#bevitel1").css("border-color","red");
		alert("Üres a mező!");
		hibakszama++;
    } else if ( isNaN(  $("#bevitel1").val() ))
	{
		$("#bevitel1").css("border-color","red");
		alert("Kérem számot adjon meg!");
		hibakszama++;
	}
    
	if ( $("#bevitel2").val()=="")
	{
		$("#bevitel2").css("border-color","red");
		alert("Üres a mező!");
		hibakszama++;
	}
	else if ( isNaN(  $("#bevitel2").val() ))
	{
		$("#bevitel2").css("border-color","red");
		alert("Kérem számot adjon meg!");
		hibakszama++;
    }
    if ($("#bevitel3").val()=="")
	{
		$("#bevitel3").css("border-color","red");
		alert("Üres a mező!");
		hibakszama++;
    } else if ( isNaN(  $("#bevitel3").val() ))
	{
		$("#bevitel3").css("border-color","red");
		alert("Kérem számot adjon meg!");
		hibakszama++;
	}

	if (hibakszama==0)
	{
        $("#bevitel1").css("border-color","green");
        $("#bevitel2").css("border-color","green");
        $("#bevitel3").css("border-color","green");
   
        var koltseghet="";
        
        koltseghet+=(adatok.bevitel1*7)/adatok.bevitel2*adatok.bevitel3;
        //alert(koltseghet)
        var koltseg=""
        koltseg+=(adatok.bevitel1*365)/adatok.bevitel2*adatok.bevitel3
        //document.getElementById('koltseg').innerHTML = (bevitel1*365)/bevitel2*bevitel3;
        //document.getElementById('koltseghet').innerHTML = (bevitel1*7)/bevitel2*bevitel3;
    
    }
    $("#koltseghet").html(koltseghet);
    $("#koltseg").html(koltseg);
    });

});