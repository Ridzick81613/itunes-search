$('document').ready(function()
{
  function scrollWin() {
      window.scrollBy(0, 700);
  }

  function getSongFromUserInput(inputValueId){
    return document.getElementById(inputValueId).value;
  }

  function displayToPage(displayAreaId, data){
    var releventInfo = [];
    for(var i = 0; i < data.results.length; i++){
      releventInfo.push("<hr>" + "Artist:" + " " + data.results[i].artistName + ";" + " " + "Album:" + " " + data.results[i].collectionName + ";" + " " + "Track:" + " " + data.results[i].trackName  + ";" + "<br><br>" + "Album Art:" + " " + "<img src=" + data.results[i].artworkUrl100 + ">" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Song Snippet:" + " " + "<audio controls name='media'>" + "<source src=" + data.results[i].previewUrl + "> type='audio/mp4'" + "</audio>" + "<br>" + "<hr>");
    }
    document.getElementById(displayAreaId).innerHTML = releventInfo.join("<br>");
  }

  function getSong(songInput)
  {
    $.ajax({
        url: "https://itunes.apple.com/search?term="+songInput,
        TYPE: "GET",
        dataType: 'jsonp'
    }).done(function(data)
    {
      console.log(data);
      displayToPage('displayArea', data);
      }).fail(function(error)
    {
      console.log("An error occured!");
    });
  }
  $("#button1").click(function()
  {
    getSong(getSongFromUserInput('songSearch'));
    setTimeout(function() {scrollWin(); }, 1000);
  });
});
