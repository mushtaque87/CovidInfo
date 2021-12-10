# CovidInfo
Application to fetch Covid Datas and Summary

### How to run
Go to root folder and run the below command from terminal to give permission to run the script file
```chmod +x ./scripts/runscript.sh```

and then run the script
```./scripts/runscript.sh```

The command will clear all previous node_module/ packages, derived datas and 

1.Install new node_modules packages.

2.Install pods 

3.Start yarn server and finally 

4.Build and launch the app in iOS simulator.

### About the app.
This is a 2 page simple application showing covid datas.

1. Dashboard 
This shows the top 5 countries with are severly effected with covid with bar graphs companring between these 5 countries.
It also shows a consolidated  Global Summary of all the reported confirmed cases , deaths and recovered with graphs. 


2. Country List Screen.
This screens shows all the countries and the reported cases. You can search by country name.
The screen gives you option to search/sort countries based on case Type and sort Type

![Dashboard](covid_1.png)
![Search for countries](covid_2.png)
![Sort by cases](covid_3.png)

Notes:

1.The App uses React Navigation 6 for navigation. 

2.ReactQuery for fetching,caching and re-rendering datas on screens on app state change and screen focus/re-focus.

3.react native state management techniques.

4.react-native-chart-kit for graphs.

