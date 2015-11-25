var data = '%data%';

var bio = {
	'name' : 'Jeremy Bender',
	'role' : 'Geopolitics Reporter',
	'contacts' : {
		'email' : 'mailto:jisbender@gmail.com',
		'location' : 'https://www.google.com/maps/place/Astoria,+Queens,+NY/@40.7677693,-73.9585816,13z/data=!3m1!4b1!4m2!3m1!1s0x89c25f36e7b5a553:0x9c0aafc4ac84110e',
		'github' : {
			'name' : 'dooster',
			'url' : 'https://github.com/dooster'
			},
		'twitter' : {
			'name' : '@bendedbrains',
			'url' : 'https://twitter.com/bendedbrains'
			},
		'linkedin' : {
			'name' : 'Jeremy Bender',
			'url' : 'https://www.linkedin.com/in/jeremy-bender-8370ab3b'
			},
		'mobile' : '908-400-2151'
		},
	'biopic' : 'images/me.jpg',
	'welcomeMessage' : 'Welcome to the second best resume in town! Please click and hover around ...',
	'skills' : ['HTML', 'CSS', 'JavaScript', 'Copy Editing', 'Turkish']
};

bio.display = function () {
	var $header = $('#header');
	var $topContacts = $('#topContacts');

	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	$header.prepend(formattedRole);

	var formattedName = HTMLheaderName.replace(data, bio.name);
	$header.prepend(formattedName);

	var formattedPictureURL = HTMLbioPic.replace(data, bio.biopic);
	$header.append(formattedPictureURL);

	var formattedEmail = HTMLemail.replace('#', bio.contacts.email);
	$topContacts.append(formattedEmail);

	var formattedLocation = HTMLlocation.replace('#', bio.contacts.location);
	$topContacts.append(formattedLocation);

	var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter.name);
	formattedTwitter = formattedTwitter.replace('#', bio.contacts.twitter.url);
	$topContacts.append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github.name);
	formattedGithub = formattedGithub.replace('#', bio.contacts.github.url);
	$topContacts.append(formattedGithub);

	var formattedLinkedin = HTMLLinkedin.replace(data, bio.contacts.linkedin.name);
	formattedLinkedin = formattedLinkedin.replace('#', bio.contacts.linkedin.url);
	$topContacts.append(formattedLinkedin);

	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	$topContacts.append(formattedMobile);

	if (bio.skills.length > 0) {
		$header.append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace(data, bio.skills[0]);
		$('#skills').append(formattedSkill);
		var formattedSkill = HTMLskills.replace(data, bio.skills[1]);
		$('#skills').append(formattedSkill);
		var formattedSkill = HTMLskills.replace(data, bio.skills[2]);
		$('#skills').append(formattedSkill);
		var formattedSkill = HTMLskills.replace(data, bio.skills[3]);
		$('#skills').append(formattedSkill);
		var formattedSkill = HTMLskills.replace(data, bio.skills[4]);
		$('#skills').append(formattedSkill);
	};

	var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
	$header.append(formattedWelcome);

	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLinkedin)
}
bio.display();

var work = {
	'jobs' : [{
		'title' : 'Reporter',
		'employer' : 'Business Insider',
		'dates' : 'January 2014 - Present',
		'location' : 'New York, NY',
		'description' : 'I write on geopolitics and world affairs. I also handled the Business Insider: Politics Facebook page.',
		'url' : 'http://www.businessinsider.com/author/jeremy-bender'
		},
		{
		'title' : 'Editorial Fellow',
		'employer' : 'BuzzFeed',
		'dates' : 'September 2013 - December 2013',
		'location' : 'New York, NY',
		'description' : 'I wrote multiple articles a day and helped with the social media.',
		'url' : 'http://www.buzzfeed.com/jeremybender'
		},
		{
		'title' : 'Fulbright English Teaching Assistant',
		'employer' : 'Inonu University',
		'dates' : 'September 2012 - July 2013',
		'location' : 'Malatya, Turkey',
		'description' : 'I taught spoken English and designed a speaking curriculum for incoming university freshmen.',
		'url' : 'http://turkey.usembassy.gov/fulbright_program.html'
		}]
};

work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		var job = work.jobs[i];
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
		formattedEmployer = formattedEmployer.replace('#', job.url);
		var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
		var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace(data, job.dates);
		$('.work-entry:last').append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
		$('.work-entry:last').append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);
		$('.work-entry:last').append(formattedWorkDescription);
	};
}
work.display();


var projects = {
	'projects' : [{
		'title' : 'Build a Personal Portfolio',
		'dates' : 'October 2015',
		'description' : 'I created a personal portfolio website from scratch. The project featured responsive design.',
		'images' : [''],
		'url' : 'https://github.com/dooster/portfolio-project'
		}]
};

projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		var project = projects.projects[i];
		$('#projects').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace(data, project.title);
		formattedProjectTitle = formattedProjectTitle.replace('#', project.url);
		$('.project-entry:last').append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace(data, project.dates);
		$('.project-entry:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace(data, project.description);
		$('.project-entry:last').append(formattedProjectDescription);

		var formattedProjectImages = HTMLprojectImage.replace(data, project.images[0]);
		$('.project-entry:last').append(formattedProjectImages);
	};
}
projects.display();

var education = {
	'schools' : [{
		'schoolAttended' : 'Rutgers University',
		'yearsAttended' : 'September 2008 - May 2012',
		'city' : 'New Brunswick, NJ',
		'degree' : 'Bachelor of Arts',
		'major' : 'Middle Eastern Studies',
		'url' : 'http://mideast.rutgers.edu/'
		}],
	'onlineCourses' : [{
		'school' : 'Udacity',
		'date' : '2015',
		'title' : 'Front-End Nanodegree',
		'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
		'school' : 'Codecademy',
		'date' : '2015',
		'title' : 'JavaScript Basics',
		'url' : 'https://www.codecademy.com/learn/javascript'
	}]
};

education.display = function() {

	$('#education').append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace(data, education.schools[0].schoolAttended);
	formattedSchoolName = formattedSchoolName.replace('#', education.schools[0].url);
	$('.education-entry:last').append(formattedSchoolName);

	var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[0].city);
	$('.education-entry:last').append(formattedSchoolLocation);

	var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[0].yearsAttended);
	$('.education-entry:last').append(formattedSchoolDates);

	var formattedMajor = HTMLschoolMajor.replace(data, education.schools[0].major);
	$('.education-entry:last').append(formattedMajor);

	var formattedDegree = HTMLschoolDegree.replace(data, education.schools[0].degree);
	$('.education-entry:last').append(formattedDegree);

	for (var i = 0; i < education.onlineCourses.length; i++) {
		var onlineClass = education.onlineCourses[i];

		$('#education').append(HTMLonlineClasses);

		var formattedOnlineName = HTMLonlineTitle.replace(data, onlineClass.school);
		formattedOnlineName = formattedOnlineName.replace('#', onlineClass.url);
		$('.education-entry:last').append(formattedOnlineName);

		var formattedOnlineDates = HTMLonlineDates.replace(data, onlineClass.date);
		$('.education-entry:last').append(formattedOnlineDates);

		var formattedOnlineDegree = HTMLonlineSchool.replace(data, onlineClass.title);
		$('.education-entry:last').append(formattedOnlineDegree);
	};
}
education.display();

$('#mapDiv').append(googleMap);

//Additional interactivity codes below

$('.biopic').hover(function(){
	$(this).attr("src", "images/fry.jpg");
}, function() {
	$(this).attr("src", "images/me.jpg");
	}
);

$('.expandable').click(function(event){
	$(this).children('div').toggle();
});