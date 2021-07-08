# Propulsion

Propulsion is a 'New Tab' browser replacement for your web browser! It is a clone of the popular browser extension [Momentum](https://momentumdash.com/).

The purpose of this project is to recreate most of Momentum in React, with a few additions, such as a frequently used tablist, and a button which fetches random pictures of dogs.

### Technologies Used
What technologies you used that helped you build this project. 

* Javascript
* React
* React Router
* Bulma CSS Library
* VSCode (for coding)
* Google Chrome (for debugging and server running purposes)

### Wireframes

TBD

### User Stories

* There should be a clock displayed at the top of the page.
* There should be a line of text greeting me based on the time of day.
* There should be a list of frequently used websites, which will be displayed on the webpage.
* I should be able to see the weather at the bottom of the page.
* I should be able to see random pictures of dogs pulled from the Internet, on the click of a button.
* I should be able to add new URLs through a form.
* I should be able to read the rationale of this project through an About Page.

## Planning and Development Process

I began planning this by looking at example projects built in React. I wanted a project that was simple enough for me to execute within a week, leaving additional leeway for bug-fixing and errors (which really did happen)! I eventually settled on a New Tab page, involving me pulling a motivational quote API.

However, after going through numerous motivational quote APIs, all failed due to opaque responses and my browser's CORS policy, which I discovered was unsolvable without a CORS proxy server. I then settled on a weather, dog, and AirTable API.

All this was documented on paper in really messy wireframes (see below for final draft).

I needed a nice CSS library to spruce up my otherwise plain design. I chose Ant.design, but left it as it had incomplete documentation. I then chose Material UI, which was good, but overly complicated for my needs. I finally settled on Bulma, which was the perfect fit and really easy to style.

The next few days saw me coding and testing the project.

### Problem-Solving Strategy

First, I googled. Google really helps. As well as YouTube/Stack Overflow.
Second, if I couldn't find anything, I'll ask my classmates, or my TAs and lecturer.
I never got a third option as my classmates, TAs, and lecturer were incredibly helpful :) (thanks Sam & Simon)

### Unsolved problems

There is currently no way to remove a frequently used tab without going into the AirTable website. I intend to add this in a future iteration. I also want to implement a site-wide dark mode, which will probably require quite a lot of CSS refactoring.

## APIs Used

* Data.gov.sg
This API is the Singapore Government's own public database. I pulled the 24H weather from it.

* AirTable
This API allows me to store information (like my frequently used websites) in the cloud. I used this for the frequently used website portion.

* Random.dog
This API pulls random pictures of truly adorable dogs from the far reaches of cyberspace. I used this for my random dog generator portion.

---

## Acknowledgments (in no particular order)

* Google
* Stack Overflow
* YouTube
* God
* my classmates from SEI-30
* my TAs from SEI-30 (Jun Siang, Sam Tan)
* my lecturer from SEI-30 (Simon Lau)


---

 ## References

 * Momentum Dash
