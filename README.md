# How to run the project


1. Install dependencies
```
npm install
```

2. Run the application

```bash
npm run dev
```




Music Application "Spoty"

Description
"Spoty" is a simple web application for viewing information about music albums and singles, as well as searching for albums by their title. It also features user registration and authentication. Users can browse the list of albums, read news about new album releases, and use the search function to quickly find albums of interest.



## Design and Development Process

1. **Creating the basic web layout**: 
It started with creating the basic layout of the application, which included the main page with news about music albums and singles.
4. Added functionality for user registration and login. Implemented `Signup` and `Login` forms, input data form components, route setup, and backend integration.

2. **Development of album or single detail view page**: Next, developed a page for detailed viewing of album or single information, where users can see additional details.

3. **Implementation of search feature**: Added a search feature allowing users to find albums by their title.

## Compromises and Issues

**Data storage**: It was decided to store information about music albums and singles in a JSON file directly inside the project for simplicity. However, as the data volume increases, this may become inefficient.

- **Lack of rating and review feature**: Due to the static nature of the JSON file, there was no time to implement this functionality.
