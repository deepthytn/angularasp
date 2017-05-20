app = angular.module('myApp', []);
app.factory('EmailService',function($http)
		{
			var emailService=this;
			/*var BASE_URL="http://localhost:8181/emailbackend"
				emailService.emailUser=function(email)
				{
					console.log('Entering emailService ')
					return $http.post(BASE_URL + "/sendmail",email);
				}*/
			return emailService;
			
		});