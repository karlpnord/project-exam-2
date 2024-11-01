import Question from './Question';
import faqData from './faqData';
import { useState } from 'react';
import SectionHeading from '../../../utils/SectionHeading';

const FAQ = () => {
	const [openId, setOpenId] = useState<number | null>(null);

	const handleToggle = (id: number): void => {
		if (openId === id) {
			setOpenId(null);
		} else {
			setOpenId(id);
		}
	};

	return (
		<div className='px-4 py-20 font-inter'>
			<div className='mx-auto max-w-3xl'>
				<SectionHeading
					heading={'Frequently Asked Questions'}
					subheading={
						'Quick answers to questions you may have about Holidaze and etc. Cant find what you are looking for? Get in touch below.'
					}
				/>
				{faqData.map((faq, index) => (
					<Question key={index} title={faq.question} id={faq.id} handler={handleToggle} openId={openId}>
						<p>{faq.answer}</p>
					</Question>
				))}
			</div>
		</div>
	);
};

export default FAQ;
