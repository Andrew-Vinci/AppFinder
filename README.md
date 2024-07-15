# AppFinder

![Static Badge](https://img.shields.io/badge/JavaScript-black?style=flat&logo=JavaScript&logoColor=yellow)
![Static Badge](https://img.shields.io/badge/CSS3-blue?style=flat&logo=css3&logoColor=blue&labelColor=black)

## Description

#### **This project is property of Andrew Vinci, Matthew Cournoyer, Kristin DeMatteo, and Ethan Helms.**

#### *AppFinder was done as a joint collaboration in the class Human-Computer-Interaction at Champlain College.*

#### **Teacher: David Kopec**
#### **Semester: Fall Semester 2023**

This project is meant to act as part of an experiment to determine how icon color affects a user's ability to quickly and easily identify said icon from amongst other apps.

The webpage cycles through the same app in four different colors: white, red, green, and blue. Incorrect attempts and total time are recorded in a text file at the end of each round.

The following README includes sections from the intiial research paper, including the Abstract, Methods, Results, and Conclusion section. It also includes a download of the research paper itself.


## Table of Contents
- [Installation](#installation)
- [Abstract](#installation)
- [Methods](#methods)
- [Results](#results)
- [Discussion](#discussion)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

## Installation
`> git clone https://github.com/Andrew-Vinci/AppFinder.git`

## Research Paper
[Download Research Paper](https://github.com/Andrew-Vinci/AppFinder/raw/main/Final%20Research%20Paper.docx)

## Abstract

This study explores the impact of color-coded interfaces on reaction time when locating an app within a cluttered home screen, with a focus on college students as participants. By exposing participants to four distinct colors of one specific app, the research aims to discern patterns in user behavior. Contrary to initial expectations, statistical analysis does not reveal significant differences in the time taken to locate the app based on color variations. While the quantitative results were deemed insignificant, the study emphasizes the importance of qualitative insights and potential analyses of other factors for a comprehensive interpretation. Some of these findings imply that blue and white tones warrant a faster reaction time than red or green, and also contribute to the understanding of user behavior in the context of color-coded interfaces.

## Methods

Since this is a highly visual experiment, great lengths were taken to consider the graphics and visual representation of each app icon. To ensure the experiment simulated searching for an app on a modern device, the researchers decided to recreate popular app icons that participants would be familiar with, to use as distractor icons. The following search phrases of “most used apps in America,” “most popular apps for millennials,” and “highest downloaded apps for iOS” were used to compile a list of currently popular apps. This list was then narrowed down to 34 icons that could be posterized, as to the limit the color combinations present in the experiment. Finally, a 35th icon was developed as the target icon for participants to search for. This icon was designed to be a simple but easily recognizable form on top of a single color background, and was made in a red and white, green and white, blue and white, and white and black variant to test which color would be quickest to find between trials. The background for the test page was a plain gray so as to limit the amount of color-based distractions between app icons.

### How Icons Were Created
![](<Screenshot 2024-07-15 at 5.03.05 PM.png>)

The front end of the experiment was designed using HTML and CSS, specifically CSS Flexbox. Flexbox in CSS allows the developer to set the number of columns and rows of a specific element. The element was wrapped in a div class titled “background” and the individual elements inside the container were populated dynamically using Javascript. A function was used to populate the various elements based on the color cycle that was applied for that given round. Four arrays were used to store the elements with different colored applications. When a round was completed, a counter was applied to the color cycle variable and the next set of icons would be loaded for that round.


## Results

The results of the experiment were collected from text files containing the data of each round of the experiment which was downloaded after a user completed all four tasks. The text files for all participants were placed in a spreadsheet and then analyzed to determine if any outliers existed. One was removed from the dataset because it was the only test where misclicks occurred, which impacted the time taken for the red test because it was around 3 standard deviations above the mean. Two others were removed from the analysis because they were at minimum 15 standard deviations above the mean, either due to distraction, starting the experiment early, or any other possible cause. By this point, a total of 21 participants were recorded but only 18 used in the data analysis. This was done by utilizing an analysis of variance (ANOVA) to search for statistical significance using the sum of the times, also known as the aggregate. The ANOVA of the aggregate is displayed in the image as well as the table below.

### Results Table
![](<Screenshot 2024-07-15 at 5.09.50 PM.png>)

The statistics most relevant to determining if the data shows significance or not in regards to the hypothesis are the F-value and p-value. If F > 1.0 and p < .05, then the data is considered significant. As shown in the table below, the F-value was indeed greater than 1.0, but the p-value was 0.185, meaning that the data collected did not have much significance. Because of this, the hypothesis that the color of an app affects how fast it can be located cannot be rejected nor proven to be true according to this experiment.

### Anova Table
![](<Screenshot 2024-07-15 at 5.10.29 PM.png>)

## Discussion

Because the data collected from this experiment equates to the results being statistically insignificant, it may be determined that the color of an app has no effect on the rate at which it is located. The figures above display the full details of the results as well as the calculations done to determine the significance of the statistics, but there are more things to consider than just proving or disproving the null hypothesis presented based on the small pool of participants.  Numerous factors could have influenced the data collected. The randomized location of an app could influence the speed at which it was located. If the app appeared in the center of the screen, it could have been found faster because of the participant’s eye naturally focusing on the middle of the webpage. A corner position could also take longer for the participant to mouse over regardless of the speed in which they located it with their eyes.

The business of the background of the home screen could have also affected the time for each round. The group chose a plain gray background so as to minimize the level of distraction participants experienced, however it is uncommon for people to have plain wallpapers. Having a busier background or selecting a different color could have more accurately simulated a person’s home screen, which may have provided different results than the ones from this experiment. The simple background was chosen to minimize variables that could affect a participant’s reaction time, but this choice could have been detrimental to having an accurate simulation. 

Similarly, had this experiment been done on a phone as it is meant to mimic locating an app on a home screen, the use of a touchscreen could have warranted very different results in regards to the speed and accuracy at which a participant could click on a specific app. Because both laptops used in this experiment were done with a screen resolution of 1080p and had trackpads rather than a mouse, these physical limitations could have changed the outcome of each participant’s reaction time. Those more familiar with a mouse might have had a more difficult time swiping the trackpad fast enough, and those who were more comfortable with a trackpad might have possessed an advantage and skewed the results.

Regardless of the uncontrollable variables that could have influenced the results collected, there are still interesting data points to look closer at. For example, the times for green when compared to other colors were higher despite the insignificance of the overall dataset. The average time recorded for green was approximately 24% longer compared to the average of the colors white and blue. The graph below shows the average time as well as the standard deviations for each color. When considering the fact that a majority of the miscellaneous distraction apps (about 40%) chosen to populate the display were blue, it is surprising that blue had the fastest reaction time rather than any of the other three colors that would have theoretically stuck out more. The second fastest time was the white icon, and the second most common app colors for distraction apps were black and white.

### Average Search Time
![](<Screenshot 2024-07-15 at 5.12.35 PM.png>)

Although the statistical analyses did not reveal significant differences in the speed of app location across the four differing color variations, the qualitative dimensions of participant interactions can still merit consideration. Some verbal feedback from participants highlighted the fact that color didn’t play a significant role in how they located the app and instead they focused on the shape of the magnifying glass icon chosen. Other participants mentioned that the black outline of the magnifying glass of the white icon stood out more than the white it was given for the three other colors. These factors could have all played a role in how participants recognized and reacted to the icon’s randomized location.

## Conclusion

Based on the results of this experiment, the color of an app has little to no significance in how recognizable it is and thus how fast it can be located amongst a cluttered home screen. Even if the experiment did not show statistical significance based on the ANOVA tests, it contributed to the cumulative knowledge in the field of human-computer interaction. Experiments such as this one that seemingly yield insignificant results still add to the broader context of understanding user behavior and preferences, and can also be repeated and yield different results based on the variety and number of participants. Understanding the nuances of user behavior in response to color-coded interfaces can contribute valuable qualitative data, shedding light on potential trends, user preferences, and navigational challenges. Future works could be conducted and expand upon the color-reaction time theories tested in this experiment, and new discoveries can be made.

## Acknowledgements
- Champlain College
- JavaScript
- Flexbox
