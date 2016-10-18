$('document').ready(function()
{
  function getSongFromUserInput(inputValueId){
    return document.getElementById(inputValueId).value;
}

  function displayToPage(displayAreaId, data){
    var releventInfo = [];
    for(var i = 0; i < data.results.length; i++){
      releventInfo.push( 'Artist Name:' + data.results[i].artistName + ' ' + 'Collection Name:' + data.results[i].collectionName + ' ' + 'Track Name:' + data.results[i].trackName + ' ');
    }
    document.getElementById(displayAreaId).innerHTML = releventInfo.join();
  }

  function getSong(songInput)
  {
    $.ajax({
        url: "https://itunes.apple.com/search?term="+songInput,
        TYPE: "GET",
        dataType: 'jsonp'
    }).done(function(data)
    {
      displayToPage('displayArea', data);
      console.log(data);
    }).fail(function(error)
    {
      console.log("An error occured!");
    });
  }
  $("#button1").click(function()
  {
    getSong(getSongFromUserInput('songSearch'));
  });
});
