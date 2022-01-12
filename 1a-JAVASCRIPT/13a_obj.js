//////first recusive character
//////ABACC
//////BBACC

var person={
    name="gokul",
    age=30
}

    //chk for vaccinated key , if no vaccinated

    if("vaccinated" in person){
        person.vaccinated=true;
        person.dose+=1
        person.vaccine="sputnik"
    }
    else{
        person.vaccinated=true;
        person.dose=1;
        person.vaccine="sputnik"
    }

    console.log(person);