console.log('***** Music Collection *****')

// 1. Create the variable "collection"

let collection = [] 

function addToCollection (artist, title, yearPublished, tracks) 
{
    let album = {
        
        artist : artist,
        title : title,
        yearPublished : yearPublished,
        tracks : tracks, 
        
    }
    
    collection.push (album);
    return album; }
    
    // 2. adding items to my collection
    
    console.log (addToCollection('Gunna', 'Wunna' ,'2020' ,'Argentina 2:27',))
    console.log (addToCollection('Drake', 'If your reading this its too late','2015','Company 4;12'))
    console.log (addToCollection('Playboi Carti', 'Die lit','2018' ,'Lean4Real 2:45'))
    console.log (addToCollection('Lil baby', 'My turn','2020', 'How 3:45'))
    console.log (addToCollection('Future', 'Future', '2018','draco 3:43'))
    console.log (addToCollection('Travis scott', 'Astroworld', '2018', 'Yosemite 2:59'))
    console.log (collection)
    
    // 3. create a function called "show collections" and test it out
    
    function showCollection (array) {
        console.log (array.length);
        for (let i=0; i < array.length; i++) {
            
            console.log (`${array[i].title} by
            ${array[i].artist} published in
            ${array[i].yearPublished}
            ${array[i].tracks}`)
            
        }
        
    }
    showCollection (collection)
    // 4. Add a function called findByArtist
    
    function findByArtist (artist) {
        let result = [];
        for (title of collection)
        if (title.artist === artist) {
            result.push (title)
        }
        
        return result ;
        
    }
    
    console.log (findByArtist('Gunna'))
    console.log (findByArtist('Future'))
    console.log (findByArtist('Drake'))
    console.log (findByArtist('Travis scott'))
    
    