angular.module('AirPlus', [])
  .controller('searchBox', ['$scope', function($scope) {
    $scope.trip="option1";
    $scope.selectedTab = 'Fixed';
    $scope.showResult = false;
    $scope.changeFrom = function() {
      switch($scope.flyFrom) {
        case "Atlanta, GA (ATL)":
          $scope.flyFromAbbr = "ATL";
          break;
        case "Boston, MA (BOS)":
          $scope.flyFromAbbr = "BOS";
          break;
        case "Los Angeles, CA (LAX)":
          $scope.flyFromAbbr = "LAX";
          break;
        case "Dallas/Fort Worth, TX (DFW)":
          $scope.flyFromAbbr = "DFW";
          break;
        case "Denver, CO (DEN)":
          $scope.flyFromAbbr = "DEN";
          break;
        case "New York-John F Kennedy, NY (JFK)":
          $scope.flyFromAbbr = "JFK";
          break;
        case "San Francisco, CA (SFO)":
          $scope.flyFromAbbr = "SFO";
          break;
        case "Charlotte, NC (CLT)":
          $scope.flyFromAbbr = "CLT";
          break;
        case "Las Vegas, NV (LAS)":
          $scope.flyFromAbbr = "LAS";
          break;
        case "Phoenix, AZ (PHX)":
          $scope.flyFromAbbr = "PHX";
          break;
        case "Miami, FL (MIA)":
          $scope.flyFromAbbr = "MIA";
          break;
        case "Houston, TX (IAH)":
          $scope.flyFromAbbr = "IAH";
          break;
        case "Newark/New York, NJ (EWR)":
          $scope.flyFromAbbr = "EWR";
          break;
        case "Orlando, FL (MCO)":
          $scope.flyFromAbbr = "MCO";
          break;
        case "Seattle, WA (SEA)":
          $scope.flyFromAbbr = "SEA";
          break;
        case "Minneapolis/St. Paul, MN (MSP)":
          $scope.flyFromAbbr = "MSP";
          break;
        case "Detroit, MI (DTW)":
          $scope.flyFromAbbr = "DTW";
          break;
        case "Philadelphia, PA (PHL)":
          $scope.flyFromAbbr = "PHL";
          break;
        case "New York-LaGuardia, NY (LGA)":
          $scope.flyFromAbbr = "LGA";
          break;
        default: 
      }
    };
    $scope.changeTo = function() {
      switch($scope.flyTo) {
        case "Atlanta, GA (ATL)":
          $scope.flyToAbbr = "ATL";
          break;
        case "Boston, MA (BOS)":
          $scope.flyToAbbr = "BOS";
          break;
        case "Los Angeles, CA (LAX)":
          $scope.flyToAbbr = "LAX";
          break;
        case "Dallas/Fort Worth, TX (DFW)":
          $scope.flyToAbbr = "DFW";
          break;
        case "Denver, CO (DEN)":
          $scope.flyToAbbr = "DEN";
          break;
        case "New York-John F Kennedy, NY (JFK)":
          $scope.flyToAbbr = "JFK";
          break;
        case "San Francisco, CA (SFO)":
          $scope.flyToAbbr = "SFO";
          break;
        case "Charlotte, NC (CLT)":
          $scope.flyToAbbr = "CLT";
          break;
        case "Las Vegas, NV (LAS)":
          $scope.flyToAbbr = "LAS";
          break;
        case "Phoenix, AZ (PHX)":
          $scope.flyToAbbr = "PHX";
          break;
        case "Miami, FL (MIA)":
          $scope.flyToAbbr = "MIA";
          break;
        case "Houston, TX (IAH)":
          $scope.flyToAbbr = "IAH";
          break;
        case "Newark/New York, NJ (EWR)":
          $scope.flyToAbbr = "EWR";
          break;
        case "Orlando, FL (MCO)":
          $scope.flyToAbbr = "MCO";
          break;
        case "Seattle, WA (SEA)":
          $scope.flyToAbbr = "SEA";
          break;
        case "Minneapolis/St. Paul, MN (MSP)":
          $scope.flyToAbbr = "MSP";
          break;
        case "Detroit, MI (DTW)":
          $scope.flyToAbbr = "DTW";
          break;
        case "Philadelphia, PA (PHL)":
          $scope.flyToAbbr = "PHL";
          break;
        case "New York-LaGuardia, NY (LGA)":
          $scope.flyToAbbr = "LGA";
          break;
        default: 
      }
    };
}]);

$(function() {
  var availableTags = [
    "Atlanta, GA (ATL)",
    "Boston, MA (BOS)",
    "Los Angeles, CA (LAX)",
    "Dallas/Fort Worth, TX (DFW)",
    "Denver, CO (DEN)",
    "New York-John F Kennedy, NY (JFK)",
    "San Francisco, CA (SFO)",
    "Charlotte, NC (CLT)",
    "Las Vegas, NV (LAS)",
    "Phoenix, AZ (PHX)",
    "Miami, FL (MIA)",
    "Houston, TX (IAH)",
    "Newark/New York, NJ (EWR)",
    "Orlando, FL (MCO)",
    "Seattle, WA (SEA)",
    "Minneapolis/St. Paul, MN (MSP)",
    "Detroit, MI (DTW)",
    "Philadelphia, PA (PHL)",
    "New York-LaGuardia, NY (LGA)"
  ];
  $( ".tags" ).autocomplete({
    source: availableTags
  });
});

$(function() {
    $('#departDate').datepicker({
        numberOfMonths: 1,
        firstDay: 0,
        dateFormat: 'mm/dd/yy',
        minDate: '0',
        maxDate: '+1Y',
        onSelect: function(dateStr) {
            var d1 = $(this).datepicker("getDate");
            d1.setDate(d1.getDate() + 0); // change to + 1 if necessary
            $("#returnDate").datepicker("setDate", null);
            $("#returnDate").datepicker("option", "minDate", d1);
            $("#returnDate").datepicker("option", "maxDate", "+1Y");
            setTimeout(function() { $("#returnDate").datepicker("show");}, 100);
            
        }
    });
    $('#returnDate').datepicker({
        numberOfMonths: 1,
        firstDay: 0,
        dateFormat: 'mm/dd/yy',
        minDate: '0',
        maxDate: '+1Y',
        onSelect: function(dateStr) {
        }
    });
});