const $city = $('#city');
const $latitude = $('#latitude');
const $longitude = $('#longitude');
const $input = $('input[type="text"]');


let coordinatesInfo, userInput

$("form").on("submit", handleGetData)

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
      url: "https://airlabs.co/api/v9/cities?city_code=" + userInput + "&api_key=67c3bd58-7a4f-4e7f-b668-47faf0f9fd47"
    }).then(
      (data) => {
        coordinatesInfo = data
        render()
        console.log(data)
      },
      (error) => {
        console.log("bad request", error)
      }
    )
    $input.val("");
  }


function render() {
    $city.text(coordinatesInfo.response[0].name)
    $latitude.text(coordinatesInfo.response[0].lat)
    $longitude.text(coordinatesInfo.response[0].lng)
  }