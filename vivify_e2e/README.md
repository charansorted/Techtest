# Installation Instructions
npm i to install node modules
npx playwright test to run tests

# Future Enhancements
Follow page object design pattern so that the  pages are divided into respective classes so it is easy to maintain and develop further 
Assert every primary and secondary elements on the page
Assert all error validation messages
Validating images using snapshots on every page
Review and investigate failed tests and if it is a genuine bug a comment should be added on top of the test with jira ref, once the bug is fixed rerun the failed test if passes remove the comment and close the bug on jira
Once application is stable enough to automate i will write Automated Functional tests(postive and negative tests), Integration tests(integration with timeslots and Stripe for example)
Annotate critical journey tests as Smoke tests and introduce them into AWS release pipeline and setup to run these tests every time a deployment to a environment is initiated


# Testing New Changes
# Test cases
Create a booking
Create a booking for a timeslot using different sessions
Create a block booking
Create different booking type 
Verify various booking reoccurence options
Confirm a booking
Alter a booking
Cancel/discard a booking
Validate different booking statuses - Reserved, Confirmed, Payment Declined/Failed , Payment refund
Create and confirm a booking for a particular time and verify that the timeslot isn't available for another booking for a given venue
Cancel a confirmed booking and verify that the timeslot is showing up as available
Alter time zones(Summer/Winter time) and investigate time slot behaviour


# Bugs spotted whilst testing :

![Alt text](<Screen Shot 2023-11-24 at 13.48.28 pm.png>) - I was seeing some intermittent status code: 500 exceptions
![Alt text](<Screenshot 2023-11-26 at 19.31.33.png>) - When a slot is removed by clicking remove all button, reserved available slots value is presented as 1 to the user
![Alt text](<Screen Shot 2023-11-26 at 19.35.18 pm.png>)- Spinner keeps spinning ages and timesout
![Alt text](<Screen Shot 2023-11-26 at 19.35.41 pm.png>) - Another status code : 500 exception caught whilst testing, unfortunately my network wasn't opened
I was also seeing some intermittent status code : 404 when i was trying to remove a available time slot and also whilst trying to discard a timeslot 


