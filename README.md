# Weekday/Readme.md

# Initial Setup:

1. Either download the zip file or clone the repository using web URL 
    
    ```jsx
    git clone https://github.com/negxative/weekday.git
    ```
    
2.   Open the directory and run command on terminal of designated directory to install respective dependencies and libraries used for development :
    
    
    npm i
    
    
3. As the bundler  used is vite,  the following command to start the app:
    
    ```jsx
    npm run dev
    ```
    
4. The app can be seen live on default port :5173

# Dependencies:

```json
 		"@mui/material": "^5.15.18",
    "@reduxjs/toolkit": "^2.2.4",
    "lodash": "^4.17.21", // for efficient and small logical handling
    "react": "^18.2.0", 
    "react-dom": "^18.2.0",
    "react-redux": "^9.1.2",
    "react-select": "^5.8.0" // for select/multi-select dropdowns as used in weekday
```

# Requirements Checklist:

| Parameter | Completion | Blockers | Notes |
| --- | --- | --- | --- |
| Job Card | Completed | No available data for tag on top | none |
| Filters | Completed | No data incoming in JD to filter out Tech Stack and Remote/On-site so simply added the non functional filters | Made use of sets in JavaScript to extract distinct options for dropdown in real time, when using an API for tech stack similar concept can be used to  extract different values for tech stack  from job descriptions rather than hardcoding options manually |
| Responsive Design | Incomplete | Time Constraints | none |
| Infinite Scroll | Completed | None | None |

# Additional Information:

1. Keyboard and Screen Reader Accessible with proper descriptions  of regions using Aria-labels 
2. Usage of performance improvement techniques like using debouncing while searching ,making use of sets etc. and using lodash for smaller tasks like capitalizing 1st letter of location words.
3.  Prioritizing ES6 based coding practice
4. Commented Code for better understanding
5. Modularized use-basis functions scalable to integrate side effects and functionalities
6. Material Ui based component flow and external CSS styling only where needed

---

Thanks For Viewing
