window.onload = function () {
  try {
    var url_string = window.location.href.toLowerCase();
    var url = new URL(url_string);
    var untuk = url.searchParams.get("untuk");
    console.log(untuk);
    document.getElementById("nama").innerHTML = untuk;
  } catch (err) {
    console.log("Issues with parsing URL param - " + err);
  }
};
