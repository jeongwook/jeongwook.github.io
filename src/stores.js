import { writable } from 'svelte/store';

export const WorkExperience = writable([
	{
		name: 'VideoAmp',
		position: 'Intermediate Engineer (Full Stack)',
		location: 'Los Angeles',
		date: 'Feb 2015 - Aug 2015',
		href: '/work/outboundengine',
		keypoints: [
			'Designed and implemented Airflow DAGs to extract and process third‑party measurement data fromPostgres and Snowflake, generating JSON files that were uploaded to AWS S3 buckets for Facebook',
			'Generated business‑critical data reports in Snowflake and/or Postgres, transforming the data in Tableau',
			'Improved ETL pipelines by implementing new features and bug fixes, resulting in increased efficiency andaccuracy. Revised the schedulers to also acquire missing metadata',
			'Developed new components in the API layer, increasing the functionality and usability of the system',
			'Resolved complex issues in dynamic query builders, improving the accuracy and relevance of data'
		],
		src: '/images/videoamp-logo.jpg'
	},
	{
		name: 'Music Reports',
		position: 'Sr. Data Engineer',
		location: 'Woodland Hills, CA',
		date: 'Aug 2020 - Apr 2022',
		href: '/work/musicreports',
		keypoints: [
			'Designed and developed database objects, functions, and stored procedures',
			'Optimized ETL pipelines and queries to improve performance and enhance user experience',
			'Improved the quality of data by maintaining correctness and linking missing metadata',
			'Maintained queries to calculate high-volume royalties and ensure great accuracy in tracking reports'
		],
		src: '/images/music-reports-logo.jpg'
	},
	{
		name: 'Trifecta Clinical',
		position: 'Senior Oracle Engineer',
		location: 'Los Angeles, CA',
		date: 'Apr 2022 - Feb 2023',
		href: '/work/trifectaclinical',
		keypoints: [
			'Designed a new rating quiz system to satisfy intra‑rater reliability training to determine consistency of users for a new client (Rating Quiz System)',
			'Key engineer in the redevelopment of a safety reporting system, designed to distribute safety notification letters to sites involved in clinical trials and generating over 4 million records, resulting in improved performance, a streamlined hierarchy, and an enhanced customer experience (Safety Vigilance 3)',
			'Implemented a new feature to grant Principal Investigators the ability to securely delegate sensitive duties while maintaining safety compliance (Delegation of Signatures)',
			'Automated and streamlined the billing reports for safety letters, reducing processing time by over 50% and minimizing the risk of human error (Safety Vigilance Billing)',
			'Enhanced the letter signing process to include a feature essential to the company’s acquisition of its first Japanese client (Safety Signature Questions)',
			'Data Tier 3 - Support tier 2 team in resolving complex data issues or requests and deliver custom queries per client or operation’s needs',
			'Develop and manage monthly and periodic reports for tracking critical metrics'
		],
		src: '/images/trifecta-logo.jpg'
	},
	{
		name: 'OutboundEngine',
		position: 'Software Engineer Intern',
		location: 'Austin, TX',
		date: 'Feb 2015 - Aug 2015',
		href: '/work/outboundengine',
		keypoints: [
			'Generate automated unit tests for quality assurance in website functionality and deployment',
			'Integrated Selenium to streamline testing',
			'JS and HTML refactoring',
			'Develop SQL tables and triggers'
		],
		src: '/images/outboundengine-logo.jpg'
	}
]);
