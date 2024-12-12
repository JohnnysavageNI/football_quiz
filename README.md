# Football Quiz

This quiz is for football fans to test their knowledge. The aim is to get as high of a score as possible from the array of questions provided, when the quiz is complete an alert will appear to display the result and when you click 'OK' the page refreshes to reset.

This quiz hopes to give users an engaging and enjoyable experience through testing their knowledge and offering an easy to use knowledge checker with an intuitive design.

![Screenshot of home page on laptop](assets/images/laptop.png)

# Features

- ### Relevant background
    - The background image will be a familiar site to football fans as it shows goalposts with a footballer shooting. It has mostly dark colours which helps create contrast with the semi-transparent white boxes.

- ### Header
    - The header is simple but big and clear with the words 'Football Quiz and an icon of a question mark below it. 

- ### Favicon
    - A favicon was created using [Favicon.io](https://favicon.io/).
    
    ![Screenshot of favicon in tab](assets/images/favicon.png)

- ### Fully responsive
    - No media queries were needed as the design adapts well to tablet and mobile screens.

    ![Screenshot of tablet](assets/images/tablet.png)

    ![Screenshot of mobile](assets/images/mobile.png)

- ### Feedback
    - When an option is selected it will turn green to show feedback.

    ![Screenshot of select highlight](assets/images/highlight-answer.png)

    - Another form of feedback is the results alert that appears when the quiz is complete. 

    ![Screenshot of results](assets/images/results-feedback.png)

# Testing

- All questions were tested to make sure the correct answer is being picked up by the code.
- All HTML was tested in [W3C validator](https://validator.w3.org/) with one small error. A div ended to be closed.
- All CSS was tested in [W3C validator](https://jigsaw.w3.org/css-validator/) one error. A grid-template-column was removed.
- All Javascript was tested in [JSHint](https://jshint.com/). A few warning messages of 'arrow function syntax (=>)' is only available in ES6,