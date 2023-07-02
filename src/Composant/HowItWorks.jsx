import React from 'react';
import './HowItWorks.css';
import Chat from './Chat';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container mt-5">
      <h1 className="title">How the Mentorship Program Works</h1>
      <ol className="steps-list">
        <li>
          <h2>Identification of Mentors and Mentees</h2>
          <p>
            Mentors and mentees are identified based on their expertise, experience, and areas of interest. They may go through an application or nomination process to participate in the program.
          </p>
        </li>
        <li>
          <h2>Program Enrollment</h2>
          <p>
            Mentors and mentees enroll in the mentorship program by submitting their applications or expressing their interest. They provide necessary information about their background, goals, and expectations from the program.
          </p>
        </li>
        <li>
          <h2>Matching Process</h2>
          <p>
            The program organizers carefully match mentors with mentees based on their respective profiles, goals, and preferences. The matching process aims to create compatible mentor-mentee pairs.
          </p>
        </li>
        <li>
          <h2>Orientation and Goal Setting</h2>
          <p>
            Once the mentor-mentee pairs are established, an orientation session is conducted to introduce the participants to the program guidelines, expectations, and code of conduct. During this phase, mentors and mentees collaborate to set specific goals and define the scope of their mentorship relationship.
          </p>
        </li>
        <li>
          <h2>Establishment of Mentorship Relationship</h2>
          <p>
            Mentors and mentees begin their mentorship journey by establishing a strong and supportive relationship. They communicate regularly, discuss challenges, share experiences, and provide guidance and feedback to each other.
          </p>
        </li>
        <li>
          <h2>Knowledge Sharing and Guidance</h2>
          <p>
            Mentors share their knowledge, skills, and expertise with mentees, providing guidance and support in their areas of interest or development. They may offer advice, resources, and practical tips to help mentees overcome obstacles and achieve their goals.
          </p>
        </li>
        <li>
          <h2>Career and Personal Development Support</h2>
          <p>
            Mentors assist mentees in their career and personal development by offering insights into professional growth opportunities, networking, and skill enhancement. They may provide guidance on resume building, interview preparation, and career advancement strategies.
          </p>
        </li>
        <li>
          <h2>Continuous Learning and Skill Building</h2>
          <p>
            Mentees actively engage in learning from their mentors, taking advantage of their expertise and experiences. They work on acquiring new skills, expanding their knowledge, and applying the learnings to their personal and professional lives.
          </p>
        </li>
        <li>
          <h2>Monitoring and Evaluation</h2>
          <p>
            The program organizers periodically monitor the progress of the mentorship relationships and evaluate their effectiveness. Feedback from both mentors and mentees is gathered to make improvements and ensure the program's success.
          </p>
        </li>
        <li>
          <h2>Closure and Transition</h2>
          <p>
            As the mentorship program comes to an end, mentors and mentees reflect on their journey, achievements, and lessons learned. They wrap up their formal mentorship relationship with gratitude and may continue to stay in touch informally.
          </p>
        </li>
        <li>
          <h2>Alumni Engagement</h2>
          <p>
            After completing the mentorship program, participants may become mentors themselves or actively engage with the program's alumni network. They can share their experiences, provide guidance to new participants, and contribute to the continuous growth of the mentorship community.
          </p>
        </li>
      </ol>
      <Chat></Chat>
    </div>
  );
};

export default HowItWorks;
