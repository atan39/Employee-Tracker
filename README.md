# Employee-Tracker
This application helps you track employees all in one database.

## Usage
Run the program through node and mysql 
First you would need to install npm
```bash
npm i
```

Second you need to source the schemas. In order to do so you need to do the following. <br>

```bash
mysql -u root -p 
```
Enter your password and then type:
```bash
SOURCE db/schema.sql
```
After that type:
```bash
SOURCE db/seeds.sql
```

Then exit mysql

Finally, you would run 
```bash
node index.js
```

Then you can view the options and results in the terminal.

## Pictures
![image](https://github.com/atan39/Employee-Tracker/assets/126987766/c635b457-38d4-4ff1-809c-0adb4df5ec1f)
![image](https://github.com/atan39/Employee-Tracker/assets/126987766/5733eb1f-720d-41fc-ab0c-78fd465e5500)
![image](https://github.com/atan39/Employee-Tracker/assets/126987766/03ae2093-f988-4565-9588-14949af83257)

## Github Repository
https://github.com/atan39/Employee-Tracker

## Credits

UofM bootcamp code, tutors, and TAs