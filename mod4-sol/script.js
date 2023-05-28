var names = new Array();
names[0] = "Zoha";
names[1] = "Inej";
names[2] = "Jahaan";
names[3] = "Maya";
names[4] = "Ved";
names[5] = "joe";
names[6] = "dev";
names[7] = "pran";
names[8] = "Pam";
names[9] = "Jim";

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye: "+names[i]);
    }
    else{
        console.log("Hello: "+names[i]);
    }
}
