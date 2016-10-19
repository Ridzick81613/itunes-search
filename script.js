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
      releventInfo.push('Artist:' + ' ' + data.results[i].artistName + ';' + ' ' + 'Album:' + ' ' + data.results[i].collectionName + ';' + ' ' + 'Track:' + ' ' + data.results[i].trackName + '.');
    }
    document.getElementById(displayAreaId).innerHTML = releventInfo.join("<div>");
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
