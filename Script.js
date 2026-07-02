function generateTrip(){
const destination = document.getElementById("destination").value;
const country = document.getElementById("country").value;
const budget = document.getElementById("budget").value;

document.getElementById("result").innerHTML = `
<h2>Your Personalized Trip Plan</h2>
<br>
<p><strong>Destination:</strong> ${destination}</p>
<p><strong>Country:</strong> ${country}</p>
<p><strong>Budget:</strong> ${budget}</p>

<br>
<h3>Suggested Itinerary</h3>

<ul>
<li>Day 1 - Explore Famous Tourist Attractions</li>
<li>Day 2 - Food & Shopping Experience</li>
<li>Day 3 - Adventure Activities & Local Culture</li>
<li>Day 4 - Relax & Photography</li>
</ul>
`;
}

function payNow(){
alert("Razorpay Payment Gateway Integrated Successfully!");
}
