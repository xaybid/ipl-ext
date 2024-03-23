async function getMatchData() {
//add your api key from cricketdata.org
    return await fetch("{YOUR_API_KEY}")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            
            const relevantData = matchesList.filter(match => match.series_id == "{YOUR_SERIES_ID}").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
