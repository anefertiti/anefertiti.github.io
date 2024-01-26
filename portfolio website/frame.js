const galleryList= [
    {
		title: 'Rest Energy by Marina Abramovic and Ulay (1980)' ,
        thoughts: 'Rest Energy is a 4 minute performance video wherein Marina Abramovic held the grip of the bow while her lover, a fellow Sagittarius, drew it. They both wore microphones that echoed the sound of their heartbeats in the studio. To me, this piece is a beacon of hope that complete vulnerability and faith can be achieved between two people. ',
		imageURL: 'museummedia/mulay.jpeg',
	},
    {
		title: 'Midday watch by Jenna Gribbon (2020)' ,
        thoughts: 'Aside from the Family Guy, I love this painting because of the expressive brush strokes and its relatability. Gribbon was inspired by how the idea of personal merged with public during quarantine and the mass appeal of being allowed into ones most intimate moments from afar. I admire her ability to capture a moment with such warmth and liveliness.',
		imageURL: 'museummedia/jgrib.jpeg',
	},
    {
		title: 'Self Portrait (1988) by Robert Mapplethorpe ' ,
        thoughts: 'Mapplethorpe was a black and white photographer specializing in portraits and exploring themes of BDSM and gay culture from the 70s-80s. Sadly, Mapplethorpe was diagnosed with AIDS in 1986. Mapplethrope asked his brother to take this photo of him, poised confidently facing towards death while his body fades into the dark, once the severity of his illness set in.',
		imageURL: 'museummedia/rmapp.jpeg',
	},
    {
		title: 'The Throne of the Third Heaven of the Nations Millennium General Assembly by James Hampton',
        thoughts: 'The sculpture was assembled mostly from cardboard and foil from visions Hampton had of the return of Christ. Hampton created this work in silence, with only the neighborhood kids to spread word of the man they donated scraps and found objects to, for 14 years until his death. One can assume if not for that, The Throne would have continued to grow. This is truly a sight to behold in person and draws appreciation from the audience for the depth of dedication and humanitys desperate prayers for salvation.',
		imageURL: 'museummedia/jhamp.jpeg',
	},
];

function changePiece(){
    const randomIndex= Math.floor(Math.random()* galleryList.length);
    
    const currentPiece= galleryList[randomIndex];

    document.getElementById("artpiece").src= currentPiece.imageURL;
    document.getElementById("info").innerText= currentPiece.title;
    document.getElementById("reflection").innerText= currentPiece.thoughts;
}
    changePiece();
