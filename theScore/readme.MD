K6 theScore Project

This is an home assignment github repo to show how to write API validations using k6.

What the test does:

datacrunch API is used to validate sports API. K6 framework is used for validations. The league used is NBA and for the season 2020. The scripting language used is javascript. This framework finds the top 10 players by score and top 10 teams by wins.

The http request named playerURL fetch all player scoring stats for the season and using the response from the API, it creates the list of top 10 leading players for points/goals.

The http request named teamURL fetch all team scoring stats for the season and using the response from the API, it creates the list of top 10 leading teams for points/goals.

k6 run script.js
The above script will run the test with 5 virtual users as defined on the test initialization found on script.js

prerequisites for macOS:
1. Ensure that you install k6 using the following
Using Homebrew:
$ brew install k6

2. git clone the repo

3. Move into the directory

4. run the command 'k6 run script.js' (inverted commas excluded)

If using any other OS, please refer to link below:
https://k6.io/docs/getting-started/installation/

If you use the Chocolatey package manager you can install the unofficial k6 package with:

choco install k6
COPY
Otherwise you can manually download and install the latest official .msi package.

Note:
There is no token required as it is using public API.
