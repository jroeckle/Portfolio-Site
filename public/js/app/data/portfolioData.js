define([
	"collections/PortfolioCollection",
	"text!templates/portfolio/fox.html",
	"text!templates/portfolio/tombraider.html",
	"text!templates/portfolio/acunity.html",
	"text!templates/portfolio/safetysmart.html",
	"text!templates/portfolio/saintsgov.html",
	"text!templates/portfolio/manofsteel.html"
	], function(PortfolioCollection, foxTemplate, tombRaiderTemplate, acTemplate, safetysmartTemplate, saintsgovTemplate, manofsteel) {
	return new PortfolioCollection([
		{
			slug     : "saints-row",
			title    : "Saintsgov.com",
			subtitle : "Saints Row IV",
			copy     : saintsgovTemplate,
			tech     : ["BackboneJS", "RequireJS", "JavaScript", "jQuery", "HTML5", "CSS3", "Laravel", "MySQL", "Facebook SDK"],
			clients  : ["Future US", "Deep Silver"],
			awards   : [{
							title        : "Best Website for a Product",
							organization : "Game Marketing Awards in 2014"
						}]
		},
		{
			slug     : "fox-emmy",
			title    : "For Your Consideration",
			subtitle : "20th Century Fox Television",
			copy     : foxTemplate,
			tech     : ["BackboneJS", "JavaScript", "jQuery", "Laravel", "MySQL"],
			clients  : ["20th Century Fox Television"]
		},
		{
			slug     : "safety-smart",
			title    : "Safety Smart",
			subtitle : "UL",
			copy     : safetysmartTemplate,
			tech     : ["CreateJS", "MarionetteJS", "BackboneJS", "RequireJS", "Laravel", "MySQL"],
			clients  : ["Underwriters Laboratories"],
			livelink : "http://www.ulsafetysmart.com/"
		},
		{
			slug     : "man-of-steel",
			title    : "Houses of Krypton",
			subtitle : "Man of Steel",
			copy     : manofsteel,
			tech     : ["WPF", "C#"],
			clients  : ["Warner Bros. Pictures"]
		},
		{
			slug     : "ac-unity",
			title    : "Guillotine Prize Drop",
			subtitle : "Assassin\'s Creed Unity",
			copy     : acTemplate,
			tech     : ["MarionetteJS", "Foundation", "SASS/SCSS", "HTML5", "CSS3", "CreateJS", "BackboneJS", "RequireJS", "Laravel", "MySQL"],
			clients  : ["Ubisoft"],
			livelink : "http://assassinscreed.ubi.com/en-us/play/index.aspx"
		},
		{
			slug     : "tomb-raider",
			title    : "Scavenger Hunt",
			subtitle : "Tomb Raider",
			copy     : tombRaiderTemplate,
			tech     : ["HTML5", "JavaScript", "jQuery", "Bootstrap", "HTML5", "CSS3", "Laravel", "MySQL", "Facebook SDK"],
			clients  : ["Square Enix"],
			awards   : [{
							title        : "Best Mobile Campaign",
							organization : "Game Connection 2013"
						}]
		}
	]);
});