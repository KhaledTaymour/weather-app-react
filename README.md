# Weather App React

This is a Weather App Project made using react, redux, and typescript and fetching its data from openweathermap 5 days api .

---

## Technical Aspects

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with the typescript template.

### Git Commit Message Style

Used the [Udacity Git Commit Message Style Guide](http://udacity.github.io/git-styleguide/)

e.g.:

> feat: Install Sass.

### CSS Naming

Used BEM ([Block Element Modifier](http://getbem.com/naming/)). only used settings, tools, generics, and elements.

### Planning

|            |                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Components | ![Components](https://github.com/KhaledTaymour/weather-app-react/tree/master/src/assets/images/screenshots/2.components.png?raw=true) |
| Events     | ![Events](https://github.com/KhaledTaymour/weather-app-react/tree/master/src/assets/images/screenshots/3.events.png?raw=true)         |
| Data       | ![Data](https://github.com/KhaledTaymour/weather-app-react/tree/master/src/assets/images/screenshots/4.data.png?raw=true)             |

### File Structure

![](https://github.com/KhaledTaymour/weather-app-react/blob/master/src/assets/images/screenshots/0.folder-structure.PNG?raw=true)

#### Styles:

- SASS was used.
- [ITCSS](https://www.hongkiat.com/blog/inverted-triangle-css-web-development/), which is an organizational method for writing reusable and scalable CSS, was chosen for dividing sass files into `partials`. [see a real example](https://www.carloscaballero.io/understanding-itcss-real-case-using-itcss-https-carloscaballero-io/).

#### Store

- In the `src` folder, `redux` folder was created including the following structure:

```bash
redux
|── actions
|   └── weatherActions.ts
|── reducers
|   |── cityReducer.ts
|   |── rootReducer.ts
|   |── statusReducer.ts
|   └── weatherReducer.ts
|── selectors
|   |── citySelector.ts
|   |── statusSelector.ts
|   └── weatherSelector.ts
|── actionTypes.ts
```

#### Others:

Added other folders/files:

- `assets`: for images, icons, and screenshots
- `config`: for saving the API url
- `handlers`: handles calling the API through apiHandler.
- `helpers`: functions that help the preparation and normalization of data for the application.
- `interfaces`: Typescript interfaces used throughout the application.
- `middleware`: To connect redux dev tool, and react thunk.
- `utils`: For conversion of data: time and temperature.
- `enums`: Typescript enums used throughout the application.

### Installed Packages:

- **sass**: for styling
- **redux**: for store management
- **react-redux**
- **axios**: for api calls
- **react-error-boundary**: better than class-based component error boundary as it handles async code also.
- **redux-thunk**: for side effects

### Screens

Handled the appearance of the application by changinging sizes, font-sizes and grid division for:

- Large screens (based on the figma design: width of 1920px) (width above 1400px)
- 15" Laptop screens (width between 940px-1439px)
- mobile (width below 480px)

### Accessibility A11y:

- Handling key strokes to navigate cards:
  - `[right-arrow]` & `[space]`: next card
  - `[left-arrow]`: previous card

### Testing:

Used the TDD technique and made some samples for tests using `jest` and `react-testing-library`. In a real project, more intensive test should be made covering more scenarios and most of the functions. <br />
Current Coverage: 19.75%. <br />
To run the tests and show the coverage (after cloning the repo):

> npm test -- --coverage

### Icons:

Used the given 2 icons "clouds" and "clear" and added another one "rain". In a real project all other conditions should has its own icon.

### Loading, Fail, and Error handling

- Made Components to be shown while loading the API data, or fail fetching it.
- Used `react-error-boundary` to wrap the application.

### CORS solution implementation

- Added a `proxy` in `package.json` as it's only one api from one domain is being called.
- The deployed version can be accessed via https://khaledtaymour.github.io/weather-app-react/ or https://kt-weather-react-app.herokuapp.com/ with enabling the allow-cors extension on chrome https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
