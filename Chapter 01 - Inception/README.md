# namaste-react

# What is emmet?
 Emmet is a free addons on the text editor to create a boiler plate code once you type abbreviations of the code. It is mostly used for HTML, XML & css
# Difference between a Library and Framework?
Library & Framework is like a creating a reusable functions written by someone to use in your code. 
In Library, developer is the controller of the flow of applications. he decides when and where to call library. Whereas in Framework, framework is the charge of the flow. It has created the placeholder of you to plug your code and run the code as needed.
For example, Library: You are responsiblee for building your home from ground to top and you have the control to design your own room, kitchen etc.
Framework: You have a flat and everything is already created like room, kitchen etc and you just needs to live there.

# What is CDN? Why do we use it?
A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
CDNs help us to reduce the bandwidth demands on origin servers, reducing bandwidth and web hosting costs for website owners

# What is crossorigin in script tag
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS(cross-origin resource sharing) request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not.

# What is diference between React and ReactDOM
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser

# What is difference between react.development.js and react.production.js files via CDN?
react.development.js is in readable format code to easily readable for developers. while in react.production.js is in minified version and size of file is very less.

# Difference between defer & async

Both async and defer in Script tags are used to optimize the loading time of websites. Without these attributes, the browser pauses HTML parsing when it encounters the script tag and sends Network request for the script files. When the script files are received, it executes the script files and only then it would continue with HTML parsing.
Async is suitable when the application requires scripts that need not be executed in a specific order(for example, some third party scripts). However, async does not guarantee the order in which script files are executed. If the application has many script files and one script file depends on the execution of the other scripts, then using async may result in errors.

defer - When the Script has defer attribute, the browser sends the network request for the script files without pausing HTML parsing. Only arter the HTML is completely parsed, the browser executes the scripts. Unlike async, the browser can execute the scripts in which they are required by the app. Defer is suitable if the application has script files that needs to be executed in a specific order.
