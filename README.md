
# React Native Assessment

A brief description of what this project does 


## Project Setup Documentation

[Documentation](https://reactnative.dev/docs/environment-setup)


## Installation

Install the following dependencies

```bash
cd my-project
yarn add @react-native-async-storage/async-storage
yarn add @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/database
yarn add @react-native-masked-view/masked-view
yarn add @react-navigation/native @react-navigation/stack
yarn add @reduxjs/toolkit
yarn add lottie-react-native
yarn add react-native-gesture-handler
yarn add react-native-linear-gradient
yarn add react-native-responsive-screen
yarn add react-native-safe-area-context
yarn add react-native-skeleton-placeholder
yarn add react-native-toast-message
yarn add react-native-vector-icons
yarn add react-redux
yarn add redux-persist


 
```
    
## Firebase Project Setup

[Documentation](https://console.firebase.google.com/)




## Project Documentation

- Authentication: Implemented authentication functionalities including login, signup, and password reset using `@react-native-firebase/auth`.
- Database Integration: Integrated Firebase Realtime Database for storing and retrieving tasks with `@react-native-firebase/database`.
- Navigation: Utilized `@react-navigation/native` and `@react-navigation/stack` for seamless navigation between screens.
- Redux State Management: Managed application state with `@reduxjs/toolkit` for storing userid and rememberuser for next time.
- UI Components: Created reusable UI components like buttons, input fields, and modals for a consistent user experience.
- Screen Layouts: Developed screens for login, signup, password reset, and home, organized under `screens/`.
- Asset Management: Managed project assets resource such as lottie file under `assets/`.

## Missing Feature
You didn't mention the logout functionality in assessment but I implement the logout functionality on longpress of add task. Its not a good approach for logout but I make this hidden for you to logout and test other users. If I don't implement this then you need to uninstall the app and install again for testing new user because I added rememberme using redux if user already login then he will not login again it will navigate to home screen because I update the rememberme and store the uid on first login.

