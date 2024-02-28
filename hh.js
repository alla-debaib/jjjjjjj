function verif1()
{	
    var nom=document.getElementById('nom').value;
    var homme=document.getElementById('homme');
    var homme=document.getElementById('femme');
    var ville=document.getElementById('ville').selectedIndex;
   if ( (nom == "" ) ||( nom.length==0))
    {Alert("Le nom et prénom VIDE!!!") ;
         return false
     }
    if ( (homme.checked==false) && (femme.checked==false) )
     {Alert("Vous devez choisir un GENRE !!!!") ; 
            return false ;
     }
     if ( ville<1 )
     {Alert("Choisir une VILLE !!!!") ; 
        return false ;
    }

    
}  
verif1()
