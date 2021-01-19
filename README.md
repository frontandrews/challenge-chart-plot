### This project was a Front End challenge to work at Intellie


You can see the challenge here

https://github.com/intelie/challenge-chart-plot


# Dependencies
For this project I used some dependencies like:

json5 - To deal with the data format.

ace-builds - To create the code editor.

highcharts and highcharts-react-official - To generate the chart.

react-splitter-layout - To make the div resizable 
# Huge Amount of Data
To deal with the huge amount of data, I've created a limitation of data, getting only the last 8 more recent lines.

However, if I had more time, I would probably try instead to limit the records, give the user an average of min_response_time and max_responde_time for each type.

# Bonus JSON
The challenge suggests that we implement as a bonus that the system accepts JSON, I managed to make it accept this format, however, I had never used any type of code editor like Ace-editor, so I had a certain difficulty in making it work, inside of the code I left two variables one with the value with page breaks as the user fills in and the other with the valid JSON format.
# The Challenge and my choices

When I started to develop, my thought was that it was as simple as possible and with the least number of dependencies possible.

I like to follow the idea of ​​pure functions and create reusable components.

# Tests

The tests were simple

I didn't do interface tests, just unit tests.

# Time

The project was done in a day and a half, I wish I could have more time available to do more tests and deal better with error possibilities in the code editor.

At the time of delivery of this challenge, I am involved in other projects that do not allow me to dedicate myself to this one during the week.


# Conclusion

I found it a little difficult, because I did not know the context of the data and information that would need to be generated, but I hope that it met expectations

If everything went well, today I must be working at Intellie, let's see.


## To run the project

### `yarn install`

## Available Scripts

In the project directory, you can run:
### `yarn start`

### `yarn test`

### `yarn build`
