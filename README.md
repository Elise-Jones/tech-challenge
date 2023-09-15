## Description:

This news application offers a streamlined news browsing experience. Upon loading, users see the day's top headlines and can select categories like Science, Health, Technology, Business, etc., via a dropdown. Clicking on an article provides detailed information. This app was developed in eight hours as a part of a tech challenge.

## Built With
* ![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
* ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge)


## <b>Getting Started</b>

To get a local copy, follow these simple instructions

### <b>Installation</b>

1. Fork the Project
2. Clone the repo 
``` 
#terminal
git clone git@github.com:Elise-Jones/tech-challenge.git
```
3. Move into the directory
```
#terminal
cd tech-challenge
```
4. Install required dependencies
```
#terminal
npm install
```
5. Launch the application
```
#terminal
npm start
```
## UI 
### Home Page:
![Home Page](https://github.com/Elise-Jones/tech-challenge/assets/119144613/ff809fce-f81a-4825-b37f-79a74bb15b06)

### Details Page:
![details page](https://github.com/Elise-Jones/tech-challenge/assets/119144613/5dc7d30d-0225-4101-9ced-d5930656a9c4)


## Wins/Challenges
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
- At the project outset, since the News API only allowed for 100 daily calls, I debated on whether to make a single fetch for  each news category and store in a piece of state, thereby minimimizing overall API calls versus choosing to make a fetch call each time the user adjusted the category selection. Ultimately, I chose the latter approach because, as a user, I understand the importance of ensuring that I receive the latest and most up-to-the-minute top headlines in a news application.
  
- Another challenge I ran into was because the data returned from the api did not have a unique number id I decided to use the title as a unique identifier. I discovered while using mockdata that when filtering through the articles in the details page, titles that had special characters would be falsey so no details would be displayed. As a result I found a packacge called uuid that generate Universally Unique Identifiers randomly. Within my function that handles null values I added an unqiue ID to each article object which then solved the problem.

## Plans For Future:
- Cypress Testing
- Error Handling
- Allow Users to share, favorite, and comment

## Author

- Elise Jones [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/Elise-Jones) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/elise-jones-964bb5264/) 

## Planning Tools
- [![Miro Board](https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white)](https://miro.com/app/board/uXjVMsa-Jz0=/?moveToWidget=3458764562195436996&cot=14)
- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/orgs/In-The-Field/projects/2)
