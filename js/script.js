const $city = $('#city');
const $latitude = $('#latitude');
const $longitude = $('#longitude');
const $input = $('#cityList');


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
  }


function render() {
    $city.text(coordinatesInfo.response[0].name)
    $latitude.text(coordinatesInfo.response[0].lat)
    $longitude.text(coordinatesInfo.response[0].lng)

    if (userInput === "ANC") {
      $("#picture").attr("src", "https://www.anchorage-airport.com/images/anchorage-city.jpg")
    } else if (userInput === "ATL") {
      $("#picture").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Midtown_atlanta.jpg/640px-Midtown_atlanta.jpg")
    } else if (userInput === "BOS") {
      $("#picture").attr("src", "https://web-assets.bcg.com/ae/00/a65a946245eb878b5d0df4bd1588/boston-hero-image.jpg")
    } else if (userInput === "CHI") {
      $("#picture").attr("src", "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-05/2af94a274ebf7f6716f9b2068595581c.jpeg?h=a98222f4&itok=o5jaY4kH")
    } else if (userInput === "CLE") {
      $("#picture").attr("src", "https://media.cntraveler.com/photos/578cf248a3f6784a6a6125e8/master/pass/cleveland-skyline-GettyImages-177524470.jpg")
    } else if (userInput === "DFW") {
      $("#picture").attr("src", "https://www.fodors.com/assets/destinations/55/skyline-dallas-texas-usa_980x650.jpg")
    } else if (userInput === "DEN") {
      $("#picture").attr("src", "https://s.abcnews.com/images/US/denver-2-gty-er-211130_1638310959270_hpMain_16x9_992.jpg")
    } else if (userInput === "HNL") {
      $("#picture").attr("src", "https://www.treksplorer.com/wp-content/uploads/things-to-do-in-honolulu.jpg")
    } else if (userInput === "LAX") {
      $("#picture").attr("src", "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475457-Los-Angeles.jpg")
    } else if (userInput === "MIA") {
      $("#picture").attr("src", "https://a.cdn-hotels.com/gdcs/production48/d1488/5d46fe1d-5102-4ef3-8226-c8d864e05060.jpg")
    } else if (userInput === "BNA") {
      $("#picture").attr("src", "https://www.treksplorer.com/wp-content/uploads/things-to-do-in-nashville-tn-usa.jpg")
    } else if (userInput === "MSY") {
      $("#picture").attr("src", "https://media.timeout.com/images/105770969/750/422/image.jpg")
    } else if (userInput === "NYC") {
      $("#picture").attr("src", "https://image.cnbcfm.com/api/v1/image/106268734-1574876711571gettyimages-1059614218.jpeg?v=1576856860")
    } else if (userInput === "SEA") {
      $("#picture").attr("src", "https://a.cdn-hotels.com/gdcs/production54/d346/a7f50b1f-9730-4d1e-93d6-c3239b81f394.jpg?impolicy=fcrop&w=800&h=533&q=medium")
    } else if (userInput === "SFO") {
      $("#picture").attr("src", "https://s.hdnux.com/photos/01/30/45/23/23221451/10/1200x0.jpg")
    }
  }
