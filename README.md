## Random Password Generator

## Description

This is a Challenge 3 homework assignment. All HTML and CSS code was already provided. Our task was to provide the javascript code so that the website interacts with the user to establish desired user criteria and in turn generate a random password based off of that criteria using window prompts.

To use this password generator you will see the screen with 'Password Generator' at the top. Underneath will be a box where the user's randomly generated password will appear. Underneath that box will be a red button that states 'Generate Password', the user will click this button to start the confirmation window boxes to be able to match the user's criteria for their password. The first question will appear where the user can enter their specified amount of characters between 8 and 128 characters long. If the user enters a non-numerical character or a number outside of parameters, an alert will be shown. The user will confirm this error message to exit out of the window. The user will then have to click the 'Generate Password' button again to start the series of confirmations over. The questions include; character length and to include numbers, upper case and lower case letters. Once criteria is confirmed, the windows will clear and on the main screen in the first box, the randomly generated password will appear. 

## Visuals

### Written code and comments:

#### Set Up:


![image](https://user-images.githubusercontent.com/118077000/208988096-fa210cdf-9573-4f76-b104-9e544ffed33f.png)


#### Prompts function:


![image](https://user-images.githubusercontent.com/118077000/208988180-86254c08-a613-4f82-89bb-5544bde6d0f2.png)
![image](https://user-images.githubusercontent.com/118077000/208988252-99653ff8-a684-4372-8127-39a550dd2cea.png)


#### Generate Password function:


![image](https://user-images.githubusercontent.com/118077000/208987763-7ba637cf-e52f-4574-980f-cf0bed14f47a.png)


### Main website page:
Starter Code already provided for HTML and CSS


![image](https://user-images.githubusercontent.com/118077000/208977604-38221033-960d-4a4d-9dc0-c0d74d9417fa.png)


### Button to start criteria questions:
Button code was apart of javascript starter code


![image](https://user-images.githubusercontent.com/118077000/208981267-fa0e0756-2924-49f2-b7de-b426ecba05b4.png)


### Confirmation Questions:

#### Input: '10' characters


![image](https://user-images.githubusercontent.com/118077000/208981482-29bd1a19-b7fc-4591-8805-f087273b56d2.png)


#### 'Cancel' for No - Example is choosing 'Cancel' to numbers


![image](https://user-images.githubusercontent.com/118077000/208981709-80111908-a8da-49c2-a735-5dd634a15a80.png)


#### 'OK' for Yes - Example is choosing 'Ok' to special characters


![image](https://user-images.githubusercontent.com/118077000/208990606-8c2b1f76-5690-4024-9a46-c042362d53a8.png)


#### 'OK' for Yes - Example is choosing 'Ok' to lower case characters


![image](https://user-images.githubusercontent.com/118077000/208982988-59ce4625-a1f4-4f13-b545-b15d58c80f4f.png)


#### 'OK' for Yes - Example is choosing 'Ok' to upper case characters


![image](https://user-images.githubusercontent.com/118077000/208983145-fbf921f9-8e58-421d-a643-c83be2327160.png)


#### Password is then generated to match the user's criteria


![image](https://user-images.githubusercontent.com/118077000/208983303-f7ba55e6-9539-4e13-9dfa-437b4609c39f.png)

### Alerts:

#### If user inputs non-numerical characters an alert will show:


![image](https://user-images.githubusercontent.com/118077000/208983729-0336d659-f064-477a-a59c-c26fe5414937.png)


#### If user inputs a character length of < 8 or > 128 an alert will show:


![image](https://user-images.githubusercontent.com/118077000/208984012-3eeecdc3-b485-4555-8eb2-5552528d0b43.png)




## Usage

This webpage was created to generate a random password according to the users criteria. After the user answers a series of window questions a random password is generated for them to use.


Website URL for reference:

https://tessaec.github.io/challenge3-js-generate/