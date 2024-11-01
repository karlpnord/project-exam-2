export interface FeatureData {
	id: number;
	question: string;
	answer: string;
}

const faqData = [
	{
		id: 1,
		question: 'How do I book a venue on Holidaze?',
		answer:
			'Simply browse our venues, select your preferred option, and follow the booking instructions to reserve your spot.',
	},
	{
		id: 2,
		question: 'Can I list my own venue on Holidaze?',
		answer: 'Yes! Just sign up as a host, fill in your property details, and start welcoming guests.',
	},
	{
		id: 3,
		question: 'Is it safe to book through Holidaze?',
		answer: 'Absolutely. We verify all listings and provide secure payment options for a trusted booking experience.',
	},
	{
		id: 4,
		question: 'What should I do if I have issues with a booking?',
		answer: 'Our 24/7 customer support team is here to help. Just reach out through the “Contact Us” section.',
	},
	{
		id: 5,
		question: 'Are there fees for listing my property on Holidaze?',
		answer: 'Listing your property is free! A small service fee applies only when a booking is confirmed.',
	},
];

export default faqData;
