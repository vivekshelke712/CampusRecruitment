Authentication : -
Admin Auth - Hardcoded
Student Login - registration
Teacher Login - Registration 

Admin : -
Admin Navbar
Admin Dashboard

Admin can Post the jobs as well as Accept the request applied by the student  for the job 

Teacher : 
Teacher Navbar 
teacher Dashboard - With The help of this Dashboard he can authenticate the students are valid are Not 

Student : - 
there Will Be Two Student dashboards 
One For Regular student another one for the Studemts Who want to perceive  the Enterprenuership 

student- Student Navbar 
Jop Portal - Job Detailing 
Apply PAge 



/campus-recruitment-system
|-- /src
|   |-- /admin
|   |   |-- adminDashboard.js
|   |   |-- adminNavbar.js
|   |   |-- postJobs.js
|   |   |-- manageApplications.js
|   |
|   |-- /teacher
|   |   |-- teacherDashboard.js
|   |   |-- teacherNavbar.js
|   |   |-- authenticateStudents.js
|   |
|   |-- /student
|   |   |-- studentRegularDashboard.js
|   |   |-- studentEntrepreneurshipDashboard.js
|   |   |-- studentNavbar.js
|   |   |-- jobPortal.js
|   |   |-- applyPage.js
|   |
|   |-- /common
|   |   |-- messaging.js
|   |   |-- profileManagement.js
|   |   |-- searchFilter.js
|   |   |-- interviewScheduler.js
|   |   |-- feedbackSystem.js
|   |   |-- analyticsDashboard.js
|   |
|   |-- /entrepreneurship
|       |-- startupDatabase.js
|       |-- entrepreneurshipResources.js
|       |-- pitchingPlatform.js
|
|-- /db
|   |-- users.json
|   |-- jobs.json
|   |-- messages.json
|   |-- feedback.json
|   |-- interviews.json
|
|-- /utils
|   |-- authentication.js
|   |-- passwordEncryption.js
|
|-- /public
    |-- index.html
    |-- /css
    |   |-- styles.css
    |
    |-- /js
        |-- main.js



Messaging System:

Allow communication between admins, teachers, and students.
Notification system for new messages.
Profile Management:

Allow users to update their profiles.
Display relevant information about each user (e.g., skills, qualifications).
Search and Filter:

Enable users to search and filter jobs based on various criteria.
Provide sorting options for jobs.
Interview Scheduler:

Allow admins and teachers to schedule interviews with students.
Notification for interview schedules.
Feedback System:

Implement a feedback system for students and teachers.
Allow students to rate and provide feedback on job experiences.
Analytics Dashboard:

Provide analytics for admins to track system usage and performance.
Specific Features for Students Interested in Entrepreneurship:
Startup Database:

Create a database of startups looking for talent.
Allow students to explore and apply to startup opportunities.
Entrepreneurship Resources:

Provide a section with resources for budding entrepreneurs (articles, videos, workshops).
Pitching Platform:

Allow students to pitch their business ideas.
Teachers and admins can provide feedback and support.
Security Features:
Role-Based Access Control:

Implement a secure system with role-based access control.
Ensure that each user has the appropriate permissions.
Password Encryption:

Encrypt passwords to enhance security.


