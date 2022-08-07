export default function HomeService() {

    var data = [];
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7e85ff0f37msh82724d420e70127p17617ejsn609070ea08cf',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    fetch('https://genius-song-lyrics1.p.rapidapi.com/artists/456537?text_format=dom', options)
        .then(response => response.json())
        .then(response => console.log(response.response))
        .catch(err => console.error(err));
    return data;

}