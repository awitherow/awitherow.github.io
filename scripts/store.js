function getStore() {
	return [
		{
			title: 'Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol I',
			link: 'http://amzn.to/2CaIbtJ',
			description:
				'Advanced Yoga Practices (AYP) brings together the most effective methods of Yoga in a flexible integrated system that anyone can use. Instructions are given in plain English for deep meditation, spinal breathing pranayama, bodily manipulations (asanas, mudras and bandhas), tantric sexual practices, and other methods that are systematically applied to swing open the door of our nervous system to permanent higher experience. This is a non-sectarian approach that is compatible with any belief system or religious background.',
		},
		{
			title:
				'Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol II',
			link: 'https://amzn.to/2ub6xhq',
			description:
				'This book is the second in the series of Advanced Yoga Practices.',
		},
		{
			title: 'Kundalini Tantra',
			link: 'https://amzn.to/2waDGKW',
			description:
				"Kundalini Yoga is a part of the tantric tradition. Even though you may have already been introduced to yoga, it is necessary to know something about tantra also. Since ancient times, the wise have realised that mind can be expanded and that experiences do not necessarily depend on the object. This means that if somebody is playing music, I can hear it, and if somebody has painted a picture, I can see it, but I can also see if there is no picture, and I can also hear if there is no music. This is also a quality of man's personality which has been ignored in the last 150 to 200 years. This Book presents a systematic and pragmatic approach to the awakening of kundalini, which arouses greater intelligence from it's sleep and you can give birth to a new range of creativity.",
		},
		{
			title: 'The Enchiridion',
			link: 'http://amzn.to/2vyGzmW',
			description:
				'Although he was born into slavery and endured a permanent physical disability, Epictetus (ca. 50–ca. 130 AD) maintained that all people are free to control their lives and to live in harmony with nature. We will always be happy, he argued, if we learn to desire that things should be exactly as they are.',
		},
	];
}

function populateStore() {
	const items = getStore();
	const StoreList = document.getElementById('store-list');
	items.map(function(item, index) {
		StoreList.innerHTML +=
			"<div className='store-item index-" +
			index +
			"'><h2><a href='" +
			item.link +
			"'>" +
			item.title +
			'</a></h2><p>' +
			item.description +
			'</p></div>';
	});
}

populateStore();
