# Flask EV Calculator
A group of calculators catered towards light electric vehicles (light EV)s, developed and routed in Python Flask.

## What Is It?

My first time digging in Python's web routing framework Flask, Flask EV Calculator is a combination of my love and proficiency in the Python programming language and my interest in light electric vehicles (light EVs). It is made using four languages in total: HTML5 for skeleton, CSS for styling, Javascript for theme changing, and Python for routing, partial pages, and necessary calculations.

With this little project, I've brought my A-game in designing and styling a simple & lightweight web application (however it _doesn't_ use Bootstrap).

## Why A Light EV Calculator?

- I actually like EVs as concepts and electric propulsion definitely has its place
- I wanted to make the most consumer friendly calculator of its kind, as all other related EV calculators need _a little bit more technical knowledge_ than what an average light EV user knows about their vehicles.

The Flask EV Calculator is specifically catered towards light electric vehicles, e.g. electric scooters, motorcycles and quadricycles (microcars). So if you own something like a Tesla, VW ID.3, or a Mercedes EQ, then sadly you will _not_ get what you want in this program (there are dedicated programs to do so). But this shouldn't discourage you from using this program, toying with calculators like this is always free, don't ask how I know😁

## What You Can Calculate

Using Flask EV Calculator, you can (currently) calculate three different aspects of your light electric vehicle (or the future light electric vehicle if you'd like to buy one):

- **Range:** When I started developing Flask EV Calculator, I made a no-frills range calculator. It has seven crucial parameters and can be considered a little _ballpark_.
- **Acceleration:** Acceleration Calculator is also very basic, it has only three parameters (so far). It calculates your theoretical 0-25km/h and 0-45km/h times, though actual results can vary.
- **Commuting Cost:** Flask EV Calculator also has a commuting cost calculator, which is another important aspect in owning an EV. Electric is much cheaper than gas (even though range is almost always shorter). Uses two mandatory parameters and it can even compare with a similar gas vehicle.

## Techincal Standpoint

As much as it is a small project, Flask EV Calculator makes use of very useful techniques, to name a few:

- **Partials:** A technique I've learnt from PHP and immediately applied on Python Flask. Makes life much easier :)
- **Variable-Dependent Content:** I don't know what the official term is, so I'm using this term to describe it. Basically, there's an important variable in the routing system that determines what a certain page (or partial) will display at that moment. The best example of it is "help.html", which behaves like three different pages depending on which calculator you use, but it is a single page in reality.
- **Multi-Module Python Backend:** My love and passion towards algorithm optimization prevents this project from looking like a barebone Flask project.
- **Custom 404 Page (Update 1: 20.11.2023)** I've made a custom 404 page that fits with the theme(s) of the project, visually.

## Todos

- Range calculator is fine, but the other two calculators could get beefed up a little bit more.
- Main menu needs a little fix, the overall styling is good other than that. (FIXED)
- Maybe _another page_ could be added, but I'm not sure what it will be about.
