document.getElementById("inscription").addEventListener("submit" , function(e){  
     
    var erreurn;
    var erreurp;
    var erreurnu;
    var erreure;
    var nom = document.getElementById("Nom");
    var prenom = document.getElementById("Prenom");
    var numero = document.getElementById("Numero");
    var email = document.getElementById("email");
    var nomv ;
    var prenomv ;
    var numerov ;
    var emailv ;
    
    if(!nom.value){
        erreurn = "le champ Nom est obligatoire! ";
    }
    else{
        nomv = nom.value;
    }
         if(!prenom.value){
        erreurp = "le champ Prenom est obligatoire! ";
    }
    else{
         var prenomv = prenom.value;
    }
         if(!numero.value){
        erreurnu = "le champ Numero est obligatoire! ";
    }
    else{
        var numerov = numero.value;
    }
         if(!email.value){
        erreure = "le champ email est obligatoire! ";
    }else{
        var emailv = email.value;
    }
    if (erreurn) {
        
        document.getElementById("erreurn").innerHTML = erreurn;
        }
    if (erreurp) {
        e.preventDefault();
        document.getElementById("erreurp").innerHTML = erreurp;
    
        }
        if (erreurnu) {
        e.preventDefault();
        document.getElementById("erreurnu").innerHTML = erreurnu;
    
        }    
            if (erreure) {
        e.preventDefault();
        document.getElementById("erreure").innerHTML = erreure;

    }
    if( (nomv) && (prenomv) && (numerov) && (emailv) ) {
        
    
        e.preventDefault();
var recap= document.getElementById("recapitulatif");
	recap.innerHTML=  nomv + "<br>" + prenomv + "<br>"+ numerov + "<br>" + emailv + "<br>" ; }
    else
        {
         recap.innerHTML =""
        
        }
        
})
 











