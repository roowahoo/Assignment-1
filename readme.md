# Strategy
## Site owner's goals: 
To raise awareness of the major crimes that took place in Singapore that is known for being one of the safest countries in the world to live in.
Also, to shed light on current and cold cases of missing people in Singapore and to provide a channel for reporting new cases. 
# Users: 
1.General public
2.Friends/family members of missing people  
## User's goals: 
For the general public, it would be to be aware and watch out for their own safety which can be very easily taken for granted considering we
are living in Singapore where laws and punishments for offenders are strictly enforced.

Apart from being aware of the chances of becoming a victim of crime themselves, there is a need for a convenient one-stop place to visit
for current missing people reports that do not make it to major news outlets. They can then be on a look out for these missing people who
happened to be last seen in their vicinity.

For friends/family members of missing people, they would want to reach a wider audience(other parts of the world) in the search for
their loved ones especially when their case do not make it to the news headlines.

## User Stories
1. As a user, I want news from reliable sources on the topic of crime in Singapore so that I do not be deceived by fake news that is prevalent
in social media now.
Acceptance Criteria: Only articles from trusted local news outlets such as The Straits Times will be filtered and displayed.
2. As a user, I want relevant articles to be presented to me so that I do not have to sift through the internet for them myself.
Acceptance Criteria: Relevant articles will be filtered by keywords and displayed on a carousel.
3. As a user, I want data from reliable sources on the crime rates in Singapore so that I am well-informed by facts and statistics.
Acceptance Criteria: Data will be retreived from government sources such as that from Singapore Police Force.
4. As a user, I want these data to be in a summarised and readable format so that I can access them conveniently in a short time.
Acceptance Criteria: Data will be filtered and displayed on charts.
5. As a user, I want a quick way to publish my missing report so that I can get information out quickly without having to go through
tedious processes when I am already desperate.
Acceptance Criteria: Form should be easy to fill in and submit and should only ask for relevant information that contributes to improving
the quality of search.

# Scope
## Functional:
1. Users can click on markers on a map to get a summary of  what took place at the location.
2. Users have the option to read more with links to articles without having to search for themselves.
3. Users are presented with crime statistics in an easy-to-infer format such as a bar graph.
4. Users can report their cases easily for publishing on the webpage.
5. Users can read relevant news articles from local news outlets.

## Non-functional:
1. Mobile responsiveness
2. Privacy of reporters (no personal information is requested and published on the web)

# Structure
![image](skeleton/structure.png)

## Information architecture
### Content Inventory
1. News articles
2. Images of missing people
3. Dataset for crime statistics

### Interaction design
1. Understandability: Content have short headings for quick understanding and forms have clear input titles.
2. Learnability: Navigation links are positioned at the top where users are familiar with and are consistent throughout the pages.
Cursors and font color changes on links on hover to indicate that it is clickable.
3. Operability: 
i. Links to external news sources are working
ii.Forms are working and display an error message when submission fails
4. Attractiveness: 
i. Padding and margin are present to improve readability
ii. Font size and layout changes according to screen size to improve readability 

# Skeleton
## Main page: 
![image](skeleton/main.png)
## About us page: 
![image](skeleton/about-us.png)
## Cases page:
![image](skeleton/cases.png)
## Report page:
![image](skeleton/report.png)

### Interface design
Each page consists on a navigation bar and main content section.
Home page: Includes current informational news on a carousel and charts.
About Us page: Identifies goals of the web page and content you can expect from it.
Cases page: Includes a map that marks out crime scenes of notorious cases as well as last seen locations of missing people. 
Pop-ups showing more details of these cases on click.
Report page: Includes a form for user to post their own cases and display cases posted by others.

### Navigation design(bootstrap components)
1. Fixed navigation bar on top of every page and highlighted depending on active page that user is on.
2. Logo brings you to home page on click.
3. Colapsible hamburger menu on smaller screens

# Surface
## Visual design
1. Colour
As the web page is based on a solemn topic of murders and missing people, the main color palette chosen were muted colours
like white, gray and pastels specifically for the bar chart.
2. Fonts
Main font chosen resembles that of a typewriter and is easy on the eyes of the reader.
3. Logo
Clean logo design clearly communicates purpose of the web page and abstract background of the logo symbolizes the element of mystery in
some cases.

# Features
## News carousel
Latest relevant news from local news outlets are fetched from a news api and displayed on a bootstrap carousel. It is however limited to 100 
requests per day on the free plan.
Links to the external news sources are made available on the carousel.
## Chart
ApexCharts is used to display datasets retreived from data.gov.sg. 
Next to it is a brief summary of what can be inferred from the chart.
## Map
Leaflets map is used to mark out significant locations where notorious crime cases took place.
A card pop-up on click displays an image and summarissed details of what happened.
Buttons on the cards bring users to the external news source for further reading.
## Form
Form allows users to create and post their own cases which will then be displayed on a mock bulletin below.

# Technologies
HTML, CSS and Javascript languages were used in this project.

[Gitpod](www.gitpod.io) was the main coding platform and [Repl.it](repl.it) as a temporary testing platform when Gitpod was down.

[GitHub](github.com) was used for repositories.

[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 5 was used for it's starter template, navigation bar, 
carousel and cards. Bootstrap CSS was used when it made more sense to.

[InVision](invisionapp.com) was used for drawing skeleton.

[Lucid](lucid.app) was used for drawing structure.

[Canva](www.canva.com) was used for creating the logo.

