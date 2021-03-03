# Challenge ReactJs 
This proyect is the result of a challenge, made to test web page development skills.

# Sample Images

#### Characters View
![Characters View](https://github.com/tomasdematos/ChallengeReactjs/blob/dedf40ddb8cf2af4e5fbd40f0ca64d98898c7879/img/CharactersView.png)

#### Locations View
![Loctions View](https://github.com/tomasdematos/ChallengeReactjs/blob/dedf40ddb8cf2af4e5fbd40f0ca64d98898c7879/img/LocationsView.png)

#### Episodes View
![Episodes View](https://github.com/tomasdematos/ChallengeReactjs/blob/dedf40ddb8cf2af4e5fbd40f0ca64d98898c7879/img/EpisodesView.png)

#### Pagination
![Pagination](https://github.com/tomasdematos/ChallengeReactjs/blob/dedf40ddb8cf2af4e5fbd40f0ca64d98898c7879/img/Pagination.png)


#### Navigation Filters
![NavigationFilters](https://github.com/tomasdematos/ChallengeReactjs/blob/dedf40ddb8cf2af4e5fbd40f0ca64d98898c7879/img/NavigationFilters.png)


# Installation 
1. ``` yarn add react-router-dom ``` 
2. ``` npm install @apollo/client graphql ```
3. ``` yarn add @material-ui/core ```
4. ``` yarn add @material-ui/lab ```
5. ``` yarn add @material-ui/icons ```
6. ``` yarn add clsx ```


# How to use
In the first View, you can see a top bar, with a retractable menu in the left side. If you open it, you can see three options. 

	Character
	Locations
	Episodes

Everyone of they, will show three lists of results. 

This results are showed in cards in the center of the page, whit some data everyone, and at the bottom it has a button to expand that data.
if you are seen the locations or the episodes, this extra data, will containt five or less cards, whith data of the characters or residents, 
and these also have a button to show more data.

# Search 
The topbar also has an input to perform searches. 
To perform a search, you need to type at least three letters, and an automatic search will be executed, displaying the results.

You can choose between two filters: 
	
	NAME
	TYPE

# Restart Search
When you start to write in the search input, a button to restart the input will appear in the right side of the search input.
if you click in it the input will be restarted.

# Pagination
A paginator is in the bottom of the page. 
In every page twenty results will be showed. 
if you want to see more you can click in the next page of the paguinator
