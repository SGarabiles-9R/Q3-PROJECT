

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
