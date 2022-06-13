package login.core.servlets;

public class ValidateUser {
	String userName = "Dhananjay";
	String password = "Djay@1234";
	public boolean isvalid = false;
	
	public boolean valid(String user,String pass){
		if(user.equals(userName) && pass.equals(password)){
			 isvalid = true;
			
		}
		else{
			isvalid= false;
		}
		
		return isvalid;
		
	}

}
