function fields() {
	// spaces not allowed
	var result = [
		'id',
		'first-name',
		'last-name',
		'maiden-name',
		'formatted-name',
		'phonetic-first-name',
		'phonetic-last-name',
		'formatted-phonetic-name',
		'headline',
		'location:(name,country:(code))',
		'industry',
		'distance',
		'relation-to-viewer:(distance)',
		'last-modified-timestamp',
		'current-share',
		'network',
		//'connections', // list of many profiles
		'num-connections',
		'num-connections-capped',
		'summary',
		'specialties',
		'proposal-comments',
		'associations',
		'honors',
		'interests',
		'positions',
		'publications',
		'patents',
		'languages',
		'skills',
		'certifications',
		'educations',
		'courses',
		'volunteer',
		'three-current-positions',
		'three-past-positions',
		'num-recommenders',
		'recommendations-received',
		'phone-numbers',
		'im-accounts',
		'twitter-accounts',
		'primary-twitter-account',
		'bound-account-types',
		'mfeed-rss-url',
		'following',
		'job-bookmarks',
		'group-memberships',
		'suggestions',
		'date-of-birth',
		'main-address',
		'member-url-resources:(url,name)',
		'picture-url',
		'site-standard-profile-request',
		'api-standard-profile-request:(url,headers)',
		'public-profile-url',
		'related-profile-views',
	].join(',')

	// 710 characters or so is max
	//console.log(result.length, result)

	return result
}
