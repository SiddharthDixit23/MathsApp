function func()
{
    var s = document.getElementById("ts").value;
    if(s.charAt(0) == 'x' && s.charAt(1) == '2')
        { 
            if(s.charAt(2) == '+')
            {
                // Type : x2+4x+1

                var one = s.split("+");   
                var m = one[1];
                var msplit = m.split("x");
                var b = msplit[0];
                var val = b/2;
                var rhs = val*val - one[2];
                var x1 = Math.sqrt(rhs) - val;
                var x2 = -Math.sqrt(rhs) - val;
                x1 = Math.round(x1*100);
                x2 = Math.round(x2*100);
                document.getElementById("pid").innerHTML = "Solutions are : "+x1/100 + " and "+x2/100;
           
            }
            else if(s.charAt(2) == '-')
            {
           // Type : x2-4x+1

                var one = s.split("-");
                var two = one[1].split("+");   
                var m = two[0];
                var msplit = m.split("x");
                var b = msplit[0];
                var val = b/2;
                var rhs = val*val - two[1];
                var x1 = Math.sqrt(rhs) + val;
                var x2 = -Math.sqrt(rhs) + val;
                x1 = Math.round(x1*100);
                x2 = Math.round(x2*100);
                document.getElementById("pid").innerHTML = "Solutions are : "+x1/100 + " and "+x2/100;
                
            }
        }
        
        else if(s.charAt(0) != 'x' && s.charAt(2) == '2')
        {
                if(s.charAt(3) == '+')
                {
                    // Type : 2x2+8x+8
                    var one = s.split("+");
                    // 2x2 8x 8
                    var z = one[0].split("x");
                    // z[0] = 2
                    var q = one[1].split("x"); // 8
                    one[1] = q[0]/z[0]+"x"; 
                var m = one[1];  // 4x
                var msplit = m.split("x");  // 4 x
                var b = msplit[0]; // 4
                var val = b/2; // 2
                var rhs = val*val - one[2]/z[0]; // 4 - 4 = 0
                var x1 = Math.sqrt(rhs) - val;
                var x2 = -Math.sqrt(rhs) - val;
                x1 = Math.round(x1*100);
                x2 = Math.round(x2*100);
                document.getElementById("pid").innerHTML = "Solutions are : "+x1/100 + " and "+x2/100;
              }
              else if(s.charAt(3) == '-')
              {
                // Type : 2x2-8x+8
                    var one = s.split("-");
                    // 2x2 8x+8
                    var two = one[1].split("+");
                    // 8x 8
                    var z = one[0].split("x");
                    // z[0] = 2
                    var q = two[0].split("x"); // 8
                    two[0] = q[0]/z[0]+"x"; 
                var m = two[0];  // 4x
                var msplit = m.split("x");  // 4 x
                var b = msplit[0]; // 4
                var val = b/2; // 2
                var rhs = val*val - two[1]/z[0]; // 4 - 4 = 0
                var x1 = Math.sqrt(rhs) + val;
                var x2 = -Math.sqrt(rhs) + val;
                x1 = Math.round(x1*100);
                x2 = Math.round(x2*100);
                document.getElementById("pid").innerHTML = "Solutions are : "+x1/100 + " and "+x2/100; 
              }
            }
        
        else if(s.charAt(0) == 'x' && s.charAt(1) == '+')
        {
            // Type : x + 45 = 90
            var ch = s.split("=");
            // x+45 90
            var one = ch[0].split("+");
            // x 45
            var res = ch[1] - one[1];
            document.getElementById("pid").innerHTML = "Solution of x : "+res;
        }

        else if(s.charAt(0) == 'x' && s.charAt(1) == '-')
        {
            // Type : x-78 = 2
            var ch = s.split("=");
            // x-78 2
            var one = ch[0].split("-");
            // x 78
            var z = ch[1];
            var c = one[1];
            var res = parseInt(z)+parseInt(c);
            document.getElementById("pid").innerHTML = "Solution of x : "+res;   
        }

          else if(s.charAt(0) != 'x' && s.charAt(1) == 'x' && s.charAt(2) == '+')
          {
             // Type : 5x + 45 = 90
            var ch = s.split("=");
            // 5x+45 90
            var one = ch[0].split("+");
            // 5x 45
            var res = ch[1] - one[1];
            // 90 - 45 = 45
            document.getElementById("pid").innerHTML = "Solution of x : "+(res/s.charAt(0));
          }

        else if(s.charAt(0) != 'x' && s.charAt(1) == 'x' && s.charAt(2) == '-')
        {
             // Type : 4x-78 = 2
            var ch = s.split("=");
            // 4x-78 2
            var one = ch[0].split("-");
            // 4x 78
            var z = ch[1];
            // 2
            var c = one[1];
            // 78
            var res = parseInt(z)+parseInt(c);
            document.getElementById("pid").innerHTML = "Solution of x : "+(res/s.charAt(0));   
        }
      
}