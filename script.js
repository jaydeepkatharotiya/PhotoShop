function validateForm()
		{
			// Declaration and Valleu Assigning ...
			var name = document.forms["myForm"]["Name"].value;
			var email = document.forms["myForm"]["Email"].value;
			var subject = document.forms["myForm"]["City"].value;
			var message = document.forms["myForm"]["Message"].value;

			if(name === "")
			{
				alert("Name must be filled out");
				return false;
			}else if(email === "")
			{
				alert("Email must be filled out");
				return false;
			}else if(subject === "")
			{
				alert("Subject must be filled out");
				return false;
			}else if(message === "")
			{
				alert("Message must be filled out");
				return false;
			}
			else
			{
				alert("Ticket Successfully Registered...");
				return true;
			}
		}