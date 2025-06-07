import { List, Section, TimelineItem } from '@/components/cv'

export default function WorkExperience() {
  return (
    <>
      <Section title="Work Experience">
        <ul className="relative space-y-6 pl-6 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950">
          <TimelineItem
            startDate="2019-04-01"
            endDate="2024-11-30"
            title="Domestika (Digital Education Platform, B2C)"
            description={
              <>
                <List title="What I Did">
                  <li>Built and improved frontend features with a practical, hands-on approach.</li>
                  <li>Refactored legacy code using BEM and OOCSS, always keeping UX in mind.</li>
                  <li>
                    Worked with Level Access to apply WCAG guidelines and improve accessibility.
                  </li>
                  <li>
                    React frontend with hexagonal architecture, using Tailwind CSS and React Testing
                    Library.
                  </li>
                </List>

                <List title="Highlights">
                  <li>
                    Led the creation of a #stay-at-home landing page — delivered in two days and
                    visited by thousands.
                  </li>
                  <li>Created a design system that improved frontend-backend collaboration.</li>
                </List>
              </>
            }
          />
          <TimelineItem
            startDate="2017-04-01"
            endDate="2018-12-31"
            title="Bizneo (Human Resource Software, B2B)"
            description={
              <>
                <List title="What I Did">
                  <li>
                    Led a small frontend team and improved the codebase using React and Storybook.
                  </li>
                  <li>
                    Designed interfaces in Figma, working closely with the CEO to turn early product
                    ideas into visuals.
                  </li>
                  <li>
                    Implemented those designs as components and screens, keeping everything
                    consistent and clean.
                  </li>
                </List>

                <List title="Highlights">
                  <li>
                    Led a full redesign that improved the experience and was very well received by
                    clients.
                  </li>
                  <li>
                    Introduced key UX improvements in the ATS that increased usability — many are
                    still in place today.
                  </li>
                </List>
              </>
            }
          />
          <TimelineItem
            startDate="2015-10-01"
            endDate="2017-04-30"
            title="BetVictor (Gaming Platform, B2C)"
            description={
              <>
                <List title="What I Did">
                  <li>
                    Improved a high-traffic betting app by structuring the HTML/CSS using
                    object-oriented principles.
                  </li>
                  <li>
                    Built interactive components in JavaScript to support real-time betting
                    features.
                  </li>
                  <li>
                    Worked with backend and UX teams to keep the experience smooth and consistent.
                  </li>
                </List>

                <List title="Highlights">
                  <li>Recognized for a proactive mindset and strong overall impact on the team.</li>
                  <li>
                    Introduced BEM methodology, making the codebase easier to scale and maintain.
                  </li>
                  <li>
                    Mentored new developers to help them ramp up quickly and follow best practices.
                  </li>
                </List>
              </>
            }
          />
        </ul>
      </Section>
    </>
  )
}
