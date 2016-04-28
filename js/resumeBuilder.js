	var model = {
		bio: {
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
					}
				},
			'biopic' : 'images/me.jpg',
			'welcomeMessage' : 'Welcome to the second best resume in town! Please click and hover around ...',
			'skills' : ['HTML', 'CSS', 'JavaScript', 'Copy Editing', 'Turkish']
		},

		work: {
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
		},

		projects: {
			'projects' : [{
				'title': 'Neighborhood Map',
				'dates': 'April 2016',
				'description': "I built a single page Knockout.js application. The application, through API calls to Google and FourSquare, displays the best restaurants on a Google map in Astoria, New York. Users can save their favorite locations to the brower's local storage.",
				'url': 'http://dooster.github.io/Neighborhood-Map/'
			},
			{
				'title': 'Cat Clicker',
				'dates': 'February 2016',
				'description': 'I built a webpage with the help of Udacity with Knockout.js. The application allows a user to select a cat and click on it to increase its count score.',
				'url': 'http://dooster.github.io/cat-clicker/'
			},
			{
				'title': 'Website Optimization',
				'dates': 'January 2016',
				'description': "I optimized an existing website's critical rendering path to increase its score on Page Speed Insights from below 70 to 92 on mobile and 94 on desktop. I used Gulp in the workflow to inline render-blocking CSS, optimize images, and minify CSS and JavaScript files.",
				'url': 'http://dooster.github.io/performant-portfolios/'
			},
			{
				'title': 'Create an Arcade Game',
				'dates': 'December 2015',
				'description': 'I created a Frogger arcade game clone using HTML5 canvas and object-oriented JavaScript.',
				'url': 'http://dooster.github.io/arcade-game/'
			},
			{
				'title' : 'Build a Personal Portfolio',
				'dates' : 'October 2015',
				'description' : 'I created a personal portfolio website from scratch. The project featured responsive design.',
				'url' : 'https://github.com/dooster/portfolio-project'
			}]
		},

		education: {
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
		},

		locations:[],

		locationsPush: function() {
			model.locations.push(model.bio.contacts.location);

			for (var school in model.education.schools) {
				model.locations.push(model.education.schools[school].city);
			}

			for (var job in model.work.jobs) {
				model.locations.push(model.work.jobs[job].location);
			}

			return model.locations;
		}
	};

	var octopus = {
		init: function() {
			model.locationsPush();
			view.init();
			view.bioDisplay();
			view.workDisplay();
			view.projDisplay();
			view.edDisplay();
			view.mapDisplay();
			view.bioPicHover();
			view.sectionExpand();
		},

		getBio: function(){
			return model.bio;
		},

		getWork: function(){
			return model.work;
		},

		getProj: function(){
			return model.projects;
		},

		getEd: function(){
			return model.education;
		},

		getLocations: function(){
			return model.locations;
		}
	};

	var view = {
		init: function(){
			window.addEventListener('load', view.initializeMap);

			// Vanilla JS way to listen for resizing of the window
			// and adjust map bounds
			window.addEventListener('resize', function(e) {
			  //Make sure the map bounds get updated on page resize
			  map.fitBounds(mapBounds);
			});
		},

		bioDisplay: function() {
			var data = '%data%';

			var HTMLheaderName = '<h1 id="name"><span class="hedData">%data%</span></h1>';
			var HTMLheaderRole = '<span class="white-text"><span class="hedData">%data%</span></span><hr/>';
			var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
			var HTMLemail = '<li class="flex-item"><a href="#"><span class="icon-mail3"></span></a></li>';
			var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
			var HTMLlocation = '<li class="flex-item"><a href="#"><span class="icon-location"></span></a></li>';
			var HTMLbioPic = '<img src="%data%" class="biopic">';
			var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
			var HTMLtwitter = '<li class="flex-item"><a href="#"><span class="icon-twitter"></span></a></li>';
			var HTMLgithub = '<li class="flex-item"><a href="#"><span class="icon-github"></span></a></li>';
			var HTMLLinkedin = '<li class="flex-item"><a href="#"><span class="icon-linkedin"></span></a></li>';
			var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
			var HTMLskills = '<li class="flex-item skills"><span class="white-text">%data%</span></li>';

			var bio = octopus.getBio();

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
		},

		workDisplay: function(){
			var data = '%data%';
			var HTMLworkStart = '<div class="work-entry"></div>';
			var HTMLworkEmployer = '<a href="#">%data%';
			var HTMLworkTitle = ' - %data%</a>';
			var HTMLworkDates = '<div class="date-text">%data%</div>';
			var HTMLworkLocation = '<div class="location-text">%data%</div>';
			var HTMLworkDescription = '<p><br>%data%</p>';

			var work = octopus.getWork();

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
		},

		projDisplay: function(){
			var data = '%data%';
			var HTMLprojectStart = '<div class="project-entry"></div>';
			var HTMLprojectTitle = '<a href="#">%data%</a>';
			var HTMLprojectDates = '<div class="date-text">%data%</div>';
			var HTMLprojectDescription = '<p><br>%data%</p>';
			var HTMLprojectImage = '<img src="%data%">';

			var proj = octopus.getProj();

			for (var i = 0; i < proj.projects.length; i++) {
				var project = proj.projects[i];
				$('#projects').append(HTMLprojectStart);

				var formattedProjectTitle = HTMLprojectTitle.replace(data, project.title);
				formattedProjectTitle = formattedProjectTitle.replace('#', project.url);
				$('.project-entry:last').append(formattedProjectTitle);

				var formattedProjectDates = HTMLprojectDates.replace(data, project.dates);
				$('.project-entry:last').append(formattedProjectDates);

				var formattedProjectDescription = HTMLprojectDescription.replace(data, project.description);
				$('.project-entry:last').append(formattedProjectDescription);
			};
		},

		edDisplay: function(){
			var data = '%data%';
			var HTMLschoolStart = '<div class="education-entry"></div>';
			var HTMLschoolName = '<a href="#">%data%';
			var HTMLschoolDegree = ' -- %data%</a>';
			var HTMLschoolDates = '<div class="date-text">%data%</div>';
			var HTMLschoolLocation = '<div class="location-text">%data%</div>';
			var HTMLschoolMajor = '<em><br>Major: %data%</em>';
			var HTMLonlineClasses = '<div class="online-entry"></div>';
			var HTMLonlineTitle = '<a href="#">%data%';
			var HTMLonlineSchool = ' - %data%</a>';
			var HTMLonlineDates = '<div class="date-text">%data%</div>';
			var HTMLonlineURL = '<br><a href="#">%data%</a>';

			var ed = octopus.getEd();

			$('#education').append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace(data, ed.schools[0].schoolAttended);
			formattedSchoolName = formattedSchoolName.replace('#', ed.schools[0].url);
			$('.education-entry:last').append(formattedSchoolName);

			var formattedSchoolLocation = HTMLschoolLocation.replace(data, ed.schools[0].city);
			$('.education-entry:last').append(formattedSchoolLocation);

			var formattedSchoolDates = HTMLschoolDates.replace(data, ed.schools[0].yearsAttended);
			$('.education-entry:last').append(formattedSchoolDates);

			var formattedMajor = HTMLschoolMajor.replace(data, ed.schools[0].major);
			$('.education-entry:last').append(formattedMajor);

			var formattedDegree = HTMLschoolDegree.replace(data, ed.schools[0].degree);
			$('.education-entry:last').append(formattedDegree);

			for (var i = 0; i < ed.onlineCourses.length; i++) {
				var onlineClass = ed.onlineCourses[i];

				$('#education').append(HTMLonlineClasses);

				var formattedOnlineName = HTMLonlineTitle.replace(data, onlineClass.school);
				formattedOnlineName = formattedOnlineName.replace('#', onlineClass.url);
				$('.education-entry:last').append(formattedOnlineName);

				var formattedOnlineDates = HTMLonlineDates.replace(data, onlineClass.date);
				$('.education-entry:last').append(formattedOnlineDates);

				var formattedOnlineDegree = HTMLonlineSchool.replace(data, onlineClass.title);
				$('.education-entry:last').append(formattedOnlineDegree);
			};
		},

		mapDisplay: function(){
			var googleMap = '<div id="map"></div>';
			$('#mapDiv').append(googleMap);
		},

		initializeMap: function() {
			var map;

			var mapOptions = {
				disableDefaultUI: true
			};

			map = new google.maps.Map(document.querySelector('#map'), mapOptions);

			var infoWindow;

			var locations = octopus.getLocations();

			function createMapMarker(placeData) {
				var lat = placeData.geometry.location.lat();  // latitude from the place service
				var lon = placeData.geometry.location.lng();  // longitude from the place service
				var name = placeData.formatted_address;   // name of the place from the place service
				var bounds = window.mapBounds;            // current boundaries of the map window

				var marker = new google.maps.Marker({
					map: map,
					position: placeData.geometry.location,
					title: name
				});

				google.maps.event.addListener(marker, 'click', function() {
					if (infoWindow) infoWindow.close();
					infoWindow = new google.maps.InfoWindow({
						content: name
					});
					infoWindow.open(map,marker);
				});

				google.maps.event.addListener(map, 'click', function() {
					infoWindow.close();
				});

				bounds.extend(new google.maps.LatLng(lat, lon));
				map.fitBounds(bounds);
				map.setCenter(bounds.getCenter());
				}

			function callback(results, status) {
				if (status == google.maps.places.PlacesServiceStatus.OK) {
					createMapMarker(results[0]);
				}
			}

			function pinPoster(locations) {
				var service = new google.maps.places.PlacesService(map);

				for (var place in locations) {
					var request = {
						query: locations[place]
					};
					service.textSearch(request, callback);
				}
			}

			window.mapBounds = new google.maps.LatLngBounds();

			locations = octopus.getLocations();

			pinPoster(locations);

		},

		bioPicHover: function(){
			$('.biopic').hover(function(){
				$(this).attr("src", "images/fry.jpg");
			}, function() {
				$(this).attr("src", "images/me.jpg");
			});
		},

		sectionExpand: function(){
			$('.expandable').click(function(event){
				$(this).children('div').toggle();
			});
		}
	};

	octopus.init();