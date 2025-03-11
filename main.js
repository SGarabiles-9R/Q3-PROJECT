                  // Ticket Pricing System
                    function calculateFare() {
                        let startStation = parseInt(document.getElementById("startStation").value);
                        let endStation = parseInt(document.getElementById("endStation").value);
                        let passengerType = document.getElementById("passengerType").value;
                        
                        let distance = Math.abs(endStation - startStation);
                        let baseFare = 13 + (distance * 2);
                        
                        if (passengerType === "student" || passengerType === "senior") {
                            baseFare *= 0.2; 
                        }
                        
                        document.getElementById("fare-amount").innerText = baseFare.toFixed(2);
                    }


                    // Gallery Changing


                      function updateImage() {
                          var image = document.getElementById("ticket-image");
                          if (document.getElementById("vip").checked) {
                            image.src = "https://i.pinimg.com/236x/9d/af/35/9daf3518d5905b2be912922c9ddc5051.jpg";
                          } else if (document.getElementById("premium").checked) {
                            image.src = "https://i.pinimg.com/236x/c5/a3/f6/c5a3f6f0d6fdd60e0d46881263ebf45a.jpg";
                          } else {
                            image.src = "https://i.pinimg.com/236x/07/59/72/0759726318838a5abba4c1b0eff5441d.jpg";
                          }
                        }
