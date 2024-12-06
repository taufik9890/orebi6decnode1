import { useEffect} from "react";



// clickOutside naame ekta function banabo ar ekhane 2 ta parameter pass hobe.
// ekhane ref(reference) hocche amar useRef theke jeita ashbe 
// ar function ta kokhon kaaj korbe sheta amader bole dite hobe, er jonnoi call korte hobe 
// ebar useEffect er bhitore ekta addEventListener dibo. ei purata ekta document ar ekhane addEventListener dibo. 
// ekhane mousedown dibo. mousedown hocche mouse ta ekhane dile show korbe ar shoray anle shorey jabe. 
//toh mousedown er pashe 'click' dibo. addEventListener er parameter hocche ekta ami ki korte chai ar arekta hocche function er naam. 
// er pore ami arekta addEventListener korbo shekhane first parameter hobe touchstart 
// touchstart hocche mobile e jeta ami click kori shetake js er bhashay touchstart bole 
// ebar ami ekta arrow function use korbo. variable hishabe click use korbo. 
// ekhane ekta event (e) pass korbo. tarpore if/else condition chalabo ar parameter ref.current use korbo
// ref.current er current ta ashe jokhon useRef diye console korle current dekte pari.
// ekhon box er bhitore click korle box ta jacche na kintu baire click korle thik ee jacche  
// jodi ami arrow te click na kori tahole ref.current e kichu ashbe na. tai ref.current ke not kore disi. tai useRef e kichu na thakle null return korbe 
// jodi ref.current na thake othoba ref.current.contains(e.target) jodi theke thake tahole
// ref.current.contains(e.target) hocche osthittho. condition e bujhano hocche current er kono ostitto ase kina 
// Bujhacche ref.current jodi na thake mane useref jodi kono value na dey othoba ref.current amake value dise kintu value er moddhe contain kore kono e.target. mane clik korar pore bhitore kono value ase kina. jodi theke thake tahole return false kore dibo 
// return false korsi karon ami box er bhitore click korle ki bondho kore dek ami chacchi na. ar return false dile falsy value return korbe. ar falsy value return korle shey ar close hobe na 
// ar nahole else hishabe dibo je return jodi na kore tahole func() ke diye dibe. mane function e jeta ashbe sheta diye dibe 
// addEventListener dom takey bar bar hit korte thake 
// tai dom e bar bar hit korle dom ta bhari hoye jay. etobar hit korle junk file dhore rakbe. er jonnoi same jinish bar bar repeat hoile oita ekbar ee nibe. 
//er jonnoi addEvenListener jodi dei tahole same bhabe return korte hobe removeEventlister. ekebare same bhabei ami remove kore dicchi. mane o ar joma rakbe na. o ekbar click hoile ek barei remove kore dibe. 2nd time click hoye recieve kore 2nd time o remove kore dibe.
// ei bhabei memory te jei jayga khaitese shei jayga ee abar remove kore ditese 
// niche faka dependency te ref diye dibo jaate ekhane jodi ref thake tokhon ee eta kaaj kore 


export default function clickOutside (ref, func){
    useEffect(()=>{

        let click = (e) =>{
            if(!ref.current || ref.current.contains(e.target) ){
                return false
            }
            func()

        }


        document.addEventListener('mousedown', click);
        document.addEventListener('touchstart', click);

        return ()=>{
            document.removeEventListener('mousedown', click);
            document.removeEventListener('touchstart', click); 
        }
    },[])
}

