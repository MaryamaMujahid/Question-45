function make_album(artist_name: string, album_tittle: string, track?: number){
let album:{artist:string, tittle:string, track?:number} = {
    artist:artist_name,
     tittle:album_tittle, 
};
if (track !== undefined){
    album.track = track;
}
return album;
}
let albumm1 = make_album ("Maryum", "Album tittle 1");
let album2 = make_album("sidra", "Album tittle 2");
let album3 = make_album("Ayesha","Album tittle 3", 10);
console.log(albumm1);
console.log(album2);
console.log(album3);