function volume_sphere() {
    //Write your code here
  // Get the radius value from the input field
  var radius = parseFloat(document.getElementById("radius").value);

  // Check if the radius is a valid number
  if (isNaN(radius) || radius <= 0) {
    document.getElementById("volume").innerHTML = "Invalid radius";
    return;
  }

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume field
  document.getElementById("volume").innerHTML = "Volume: " + volume.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;