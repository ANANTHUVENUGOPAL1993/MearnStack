
 var low=5;
 var upp=50
 var flag=0
 var t;
 for(t=low+1;t<upp;t++){
 
 for(let i=2;i<t;i++){
     if(t%i==0){
         flag=1;
         break;
     }
   else{
       flag=0;

   }
 }    

 if(flag==0)
 {
     console.log(t);
 }

 }