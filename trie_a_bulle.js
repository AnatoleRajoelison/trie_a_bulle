function trie_a_bulle(tab){

    for(let i=0; i<tab.length; i++){
        for(let j=0; i<tab.length-1; j++){
            
             if( tab[j]>tab[j+1]){
                 let x=tab[j];
                     tab[j]=tab[j+1];
                     tab[j+1]=x;
             }
            
        }
    }
    return tab;
}
console.log(trie_a_bulle([4,3,2]));