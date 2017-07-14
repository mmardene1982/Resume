/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Maher Mardini",
	"role" : "Front-End Developer",
	"welcomeMessage" : "I have been always amazed in computer science, there for after finishing my BSc in electrical engineering, I have studied E-business and computing and now I am finishing my Nanodegree in Front-end web developing.y technical expertise includes HTML, CSS, and Java script and willing to continue learning other languages as well. Also I have excellent expertise in (Mac, Windows, and Linux).", 
	"biopic" : "images/profile.png",
	"contacts" : [{
		"mobile" : "+47 957 24 036",
		"location" : "Norway",
		"email" : "mmardene1982@gmail.com",
		"github" : "https://github.com/mmardene1982"
	}],
	"skills" : ["HTML" , "CSS" , "JavaScript" , "Mac" , "Windows" , "Linux-Ubuntu"]

};

var work = {
	"jobs" : [
		{
		"employer" : "None", 
		"title" : "Front-End Developer",
		"dates" : "2017 - future",
		"location" : "Norway",
		"description" : "Designing and building websites for individuals and companies that required to start there on-line businesses."
	},
	{
		"employer" : "Welltec AS", 
		"title" : "Offshore Field Engineer",
		"dates" : "2015 - 2017",
		"location" : "Norway",
		"description" : "Wireline Operations (Mechanical services, logging)."
	},
	{
		"employer" : "Al-Khorayef Petroleum Company", 
		"title" : "Senior Field Engineer",
		"dates" : "2010 – 2014",
		"location" : "Iraq",
		"description" : " Downstream completions (ESP installation, packers, Y-tool, commissioning, and troubleshooting)."	
	},
	{
		"employer" : "Schlumberger", 
		"title" : "Senior Field Engineer",
		"dates" : "2007 – 2010",
		"location" : "Syria",
		"description" : "ESP completion installing and dismantling, Surface equipment commissioning and startup and troubleshooting (Switch boards- soft starter - Variable speed drives)."
	}]
};

var projects = {
	"projects" : [{
		"title" : "Mocup to portfolio ",
		"dates" : "2017", 
		"description" : "Using the knowledge that I learned throughout the course I built and portfolio describing the latest best movies for 2017 including dome JS. ", 
		"images" : ["images/197x148.gif","images/197x148.gif","images/197x148.gif","images/197x148.gif"]
	},
	{
		"title" : "My CV",
		"dates" : "2017", 
		"description" : "A first trial to make my CV as an interactive website", 
		"images" : ["images/197x148.gif","images/197x148.gif","images/197x148.gif"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "Edexcel International University",
		"location" : "United Kingdom",
		"degree" : "Diploma", 
		"majors" : ["HND in E-business and computing"],
		"dates" : "2008 – 2010",
		"url" : "https://www.edexcelonline.com"
	},
	{
		"name" : "Damascus University",
		"location" : "Damascus, Syria",
		"degree" : "Bachelor Degree", 
		"majors" : ["Electrical Engineering"],
		"dates" : "2001 – 2005",
		"url" : "http://damasuniv.edu.sy"
	}],
	"onlineCourses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "2017 - 2018",
		"url" : "https://www.udacity.com/course/nd001"
	}]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(var i=0 ; i<bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkills);
	}

	for(var contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[contact].github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);
	}
};
bio.display();

work.display = function(){
	for (var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formatedLocation= HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formatedLocation);
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDate);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}
work.display()

projects.display = function(){
	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formatedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formatedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		for(var img in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display()

function displayEdu(){
	for(var item in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName , formattedShoolDegree , formattedSchoolDates , formattedSchoolLocation , formattedSchoolMajor;
		formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[item].name);
		formattedShoolDegree = HTMLschoolDegree.replace("%data%" , education.schools[item].degree);
		formattedSchoolDates = HTMLschoolDates.replace("%data%" , education.schools[item].dates);
		formattedSchoolLocation = HTMLschoolLocation.replace("%data%" , education.schools[item].location);
		formattedSchoolMajor = HTMLschoolMajor.replace("%data%" , education.schools[item].majors);
		$(".education-entry:last").append(formattedSchoolName+formattedShoolDegree , formattedSchoolDates , formattedSchoolLocation , formattedSchoolMajor);
		}
			for(var info in education.onlineCourses){
			$(".education-entry:last").append(HTMLonlineClasses);
			var onlineTitle , onlineShool , onlineDates , onlineURL;
			onlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[info].title);
			onlineShool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[info].school);
			onlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[info].dates);
			onlineURL = HTMLonlineURL.replace("%data%" , education.onlineCourses[info].url);
			$(".education-entry:last").append(onlineTitle + onlineShool , onlineDates , onlineURL);
			}
}
displayEdu();

// // $(document).click(function(loc) {
// //   var x = loc.pageX;
// //   var y = loc.pageY;
// //   logClicks(x,y);
// // });
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
	name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1];
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);